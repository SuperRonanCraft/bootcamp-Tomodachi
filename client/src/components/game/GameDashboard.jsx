import Action from './action/Action';
import Emoji from './Emoji';
import Status from './Status';
import { useEffect, useState } from 'react';
import { useGameContext } from '../../context/GameContext';
import useGameLoop from '../../lib/useGameLoop';
import TabContainer from './tab/TabContainer';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_GAMEDATA } from '../../utils/mutations';
import { QUERY_USER } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import auth from '../../utils/auth';
import useGameHook from '../../lib/useGameHook';
import { getEmoji } from '../../lib/petStatus';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import createPet from '../../lib/Pet';

export default function GameDashboard() {
  const { petState, gameState, setGameState } = useGameContext();
  const { timeAlive } = petState;
  const { isDead, name } = gameState;
  const { gameTick } = useGameLoop();
  const { changeGame } = useGameHook();
  const { gameId } = useParams();
  const [updateGameData] = useMutation(UPDATE_GAMEDATA);
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { userId: auth.getProfile().data._id },
  });
  const [open, setOpen] = useState(false);

  //Download data
  useEffect(() => {
    if (loading) return;
    const gamesArray = data.me.gameData;
    const gameData = gamesArray.filter(({ _id }) => _id === gameId)[0];
    changeGame(gameData);
  }, [loading, gameId]);

  //Update data
  useEffect(() => {
    if (loading) return;
    const data = {
      userId: auth.getProfile().data._id,
      gameId,
      food: petState.food,
      energy: petState.energy,
      happiness: petState.happiness,
      timeAlive,
    };
    updateGameData({ variables: data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeAlive]);

  //Game Tick
  useEffect(() => {
    if (petState.food <= 0 || petState.happiness <= 0 || petState.energy <= 0) {
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
  }, [timeAlive, petState]);

  if (loading) return <h2>Loading</h2>;

  function resurrect() {
    changeGame({ _id: gameId, name, ...createPet() });
  }

  return (
    <div className="flex flex-row w-fit mx-auto gap-4 mt-24">
      <div className="flex flex-col gap-4 mx-8 md:mx-0">
        <TabContainer />
        {timeAlive}
        <Emoji emoji={getEmoji(petState)} petState={petState} isDead={isDead} />
        <div className="grid grid-cols-3 gap-4 w-full">
          <Status />
          <Action />
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{name} has died!</DialogTitle>
            <DialogDescription>
              How could you let this happen!
            </DialogDescription>
          </DialogHeader>
          <Button onClick={resurrect}>Resurrect</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
