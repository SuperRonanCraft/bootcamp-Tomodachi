import AddTab from './AddTab';
import Tab from './Tab';

const testArray = [{ name: 'Mike' }, { name: 'Alfonso' }];

export default function TabContainer() {
  return (
    <ul className="flex flex-row gap-2">
      {testArray.map(({ name }, index) => (
        <li key={name + index}>
          <Tab name={name} link="#" />
        </li>
      ))}
      {testArray.length <= 2 && (
        <li>
          <AddTab />
        </li>
      )}
    </ul>
  );
}
