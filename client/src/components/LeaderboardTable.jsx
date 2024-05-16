import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS } from '../utils/queries';
import { getTimeLeft } from '../lib/Game';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../utils/auth';

export default function LeaderboardTable() {
  const { loading, data, error } = useQuery(QUERY_ALL_USERS);
  const navigate = useNavigate();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  const filteredUsers = data.users.filter(
    ({ gameData }) => gameData.length > 0
  );

  const sortedUsers = filteredUsers
    .map((user) => {
      // const total = user.gameData.reduce(
      //   (acc, game) => {
      //     return {
      //       energy: acc.energy + game.energy,
      //       food: acc.food + game.food,
      //       happiness: acc.happiness + game.happiness,
      //     };
      //   },
      //   { energy: 0, food: 0, happiness: 0 }
      // );
      const largestTime = user.gameData.reduce((acc, game) => {
        if (game.timeAlive > acc.timeAlive) return game;
        return acc;
      });

      return {
        ...user,
        totalScore: largestTime.timeAlive, //total.energy + total.food + total.happiness,
      };
    })
    .sort((a, b) => b.totalScore - a.totalScore);

  return (
    <>
      <Table className="max-w-96 overflow-hidden mx-auto">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Place</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">Highest Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user, index) => (
            <TableRow
              key={user._id}
              className="hover:bg-gradient-to-r hover:from-violet-600/50 hover:to-rose-400/50"
              onClick={() => {
                navigate(`/profile/${user._id}`);
              }}
            >
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <Link
                  className="text-foreground/70 hover:text-primary underline font-bold"
                  to={`/profile/${user._id}`}
                >
                  {user.username}{' '}
                  <span className="font-normal">
                    {user._id === auth.getProfile().data._id && ' (you)'}
                  </span>
                </Link>
              </TableCell>
              <TableCell className="text-right">
                {getTimeLeft(user.totalScore)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
      <p className="text-center text-foreground/70">
        Don't see your name up there? Keep caring for your Tomodachis and you'll
        be up there in no time!
      </p>
    </>
  );
}
