import Action from './action/Action';
import Emoji from './Emoji';
import Status from './Status';
import { useEffect, useState } from 'react';
import { useGameContext } from '../../context/GameContext';
import useGameLoop from '../../lib/useGameLoop';
import TabContainer from './tab/TabContainer';
import { useMutation } from '@apollo/client';
import { UPDATE_GAMEDATA } from '../../utils/mutations';
import useGameHook from '../../lib/useGameHook';
import { getEmoji, getEmotion } from '../../lib/petStatus';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import createPet from '../../lib/Pet';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { checkDead } from '../../lib/Game';
import { useParams } from 'react-router-dom';

export default function GameDashboard({ gameData, user }) {
  const { gameId } = useParams();
  const {
    petState,
    gameState: { isDead, name },
    setGameState,
  } = useGameContext();
  const { timeAlive, food, happiness, energy } = petState;
  // const { isDead, name } = gameState;
  const { gameTick } = useGameLoop();
  const { changeGame } = useGameHook();
  const [updateGameData] = useMutation(UPDATE_GAMEDATA);

  const [open, setOpen] = useState(false);

  //Download data
  useEffect(() => {
    // const gamesArray = data.me.gameData;
    // const gameData = gamesArray.filter(({ _id }) => _id === gameId)[0];
    // console.log('GameData updated');
    changeGame(gameData);
  }, [gameId]);

  //Update data
  useEffect(() => {
    // if (loading) return;
    const data = {
      userId: user._id,
      gameId: gameData._id,
      food,
      energy,
      happiness,
      timeAlive,
    };
    updateGameData({ variables: data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeAlive]);

  //Game Tick
  useEffect(() => {
    if (checkDead({ food, happiness, energy })) {
      setOpen(true);
      setGameState((prev) => {
        return { ...prev, isDead: true };
      });
      return;
    } //If pet is dead, dont progress time
    const timeout = setTimeout(() => {
      gameTick();
    }, 1000);

    return () => clearTimeout(timeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeAlive, food, happiness, energy]);

  // if (loading) return <h2>Loading</h2>;

  function resurrect() {
    setOpen(false);
    changeGame({ _id: gameData._id, name, ...createPet() });
  }

  function closeBox() {
    setOpen(false);
  }

  return (
    <div className="w-fit mx-auto gap-4 mt-32 md:mt-0 md:flex md:items-center md:h-screen">
      <div className="flex flex-col md:flex-row gap-4 mx-8 md:mx-0">
        <TabContainer className="block md:hidden" />
        <Emoji
          emoji={getEmoji(getEmotion(petState))}
          petState={petState}
          isDead={isDead}
        />
        <div className="flex flex-col gap-4">
          <TabContainer className="hidden md:block" />
          <Status />
          <Action isDead={isDead} />
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{name} has died!</DialogTitle>
            <DialogDescription>
              <p className="text-foreground">How could you let this happen!</p>
              <p className="my-2">Would you like to bring them back to life?</p>
              <p className="my-2 text-foreground/90">Score: {timeAlive}</p>
            </DialogDescription>
          </DialogHeader>
          <AlertDialog>
            <div className="text-right">
              <AlertDialogTrigger asChild>
                <Button className="mx-2 bg-primary">Resurrect</Button>
              </AlertDialogTrigger>
              <Button variant="outline" onClick={closeBox}>
                Cancel
              </Button>
            </div>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  <p className="text-red-300">This action cannot be undone!</p>
                  <p>
                    This will permanently delete your current progess, affect
                    your leaderboard standing and your Tomodachi will be reset!
                  </p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={resurrect}>
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DialogContent>
      </Dialog>
    </div>
  );
}
