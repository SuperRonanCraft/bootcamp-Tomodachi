import AddTab from './AddTab';
import Tab from './Tab';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '@/utils/queries';
import auth from '@/utils/auth';

const testArray = [{ name: 'Mike' }, { name: 'Alfonso' }];

export default function TabContainer({ className }) {
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: auth.getProfile().data._id },
  });

  const gamesArray = data.me.gameData;

  // console.log(gamesArray);

  return (
    <div className={className}>
      <ul className="flex flex-row gap-2 min-w-[300px]">
        {gamesArray.map(({ name, _id }, index) => (
          <li key={_id}>
            <Tab name={name} gameId={_id} />
          </li>
        ))}
        {gamesArray.length <= 2 && (
          <li>
            <AddTab />
          </li>
        )}
      </ul>
    </div>
  );
}
