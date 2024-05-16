import LeaderboardTable from '../components/LeaderboardTable';

export default function Leaderboard() {
  return (
    <div className="container mt-32">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl text-center my-8 bg-gradient-to-r from-violet-600 to-rose-400 text-transparent bg-clip-text">
        Tomodachi Leaderboard
      </h1>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold text-center tracking-tight first:mt-0 my-8">
        Check out other users Tomodachis and compete with others for a spot on
        our leaderboard!
      </h2>

      <div className="container">
        <LeaderboardTable />
      </div>
    </div>
  );
}
