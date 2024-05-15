import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS } from '../utils/queries';

export default function LeaderboardTable() {
  const { loading, data, error } = useQuery(QUERY_ALL_USERS);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const filteredUsers = data.users.filter(
    ({ gameData }) => gameData.length > 0
  );

  const sortedUsers = filteredUsers
    .map((user) => {
      const total = user.gameData.reduce(
        (acc, game) => {
          return {
            energy: acc.energy + game.energy,
            food: acc.food + game.food,
            happiness: acc.happiness + game.happiness,
          };
        },
        { energy: 0, food: 0, happiness: 0 }
      );

      return {
        ...user,
        totalScore: total.energy + total.food + total.happiness,
      };
    })
    .sort((a, b) => b.totalScore - a.totalScore);

  return (
    <Table>
      <TableCaption>
        Don't see your name up there? Keep caring for your Tomodachis and you'll
        be up there in no time!
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Place</TableHead>
          <TableHead>Username</TableHead>
          <TableHead className="text-right">Total Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedUsers.map((user, index) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell className="text-right">{user.totalScore}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow></TableRow>
      </TableFooter>
    </Table>
  );
}
