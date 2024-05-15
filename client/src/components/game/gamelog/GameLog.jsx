import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useGameContext } from '../../../context/GameContext';

const testData = [
  { text: 'Eloquent cats chase mice', timestamp: '12:34:56' },
  { text: 'Raindrops dance on windows', timestamp: '23:45:12' },
  { text: 'Gentle whispers in the wind', timestamp: '09:18:27' },
  { text: 'Sunshine warms the soul', timestamp: '15:30:45' },
  { text: 'Mystical forests hold secrets', timestamp: '08:59:03' },
  { text: 'Sparkling stars light the sky', timestamp: '18:20:10' },
  { text: 'Benevolent spirits guide us', timestamp: '03:15:22' },
  { text: 'Whimsical dreams take flight', timestamp: '14:07:59' },
  { text: 'Harmony fills the air', timestamp: '21:56:38' },
  { text: 'Magical creatures roam freely', timestamp: '06:42:17' },
  { text: 'Eloquent cats chase mice', timestamp: '17:38:24' },
  { text: 'Raindrops dance on windows', timestamp: '10:09:51' },
  { text: 'Gentle whispers in the wind', timestamp: '04:25:33' },
  { text: 'Sunshine warms the soul', timestamp: '19:03:11' },
  { text: 'Mystical forests hold secrets', timestamp: '13:50:19' },
  { text: 'Sparkling stars light the sky', timestamp: '01:27:46' },
  { text: 'Benevolent spirits guide us', timestamp: '16:11:57' },
  { text: 'Whimsical dreams take flight', timestamp: '22:14:36' },
  { text: 'Harmony fills the air', timestamp: '07:48:05' },
  { text: 'Magical creatures roam freely', timestamp: '11:23:58' },
];

export default function GameLog({ visible }) {
  const { gameState } = useGameContext();

  let logs = gameState.logs;
  if (gameState.logs.length > 12) {
    // logs = logs.slice(-12);
    console.log(logs);
  }

  return (
    <Card
      className={`flex flex-col justify-between ${
        visible ? visible : 'invisible'
      }`}
    >
      <CardHeader>
        <CardTitle>Log</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col divide-y divide-solid">
          {logs.map(({ text, timestamp }, index) => (
            <li key={timestamp + index}>
              <p className="text-xs text-muted-foreground mt-2">{timestamp}</p>
              <p className="mb-2">{text}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
