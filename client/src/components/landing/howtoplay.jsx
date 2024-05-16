import { EMOTION, getEmoji } from '../../lib/petStatus';
import Block from './Block';
import Lottie from 'lottie-react';
import Food from '@/components/game/status/Food';
import Happiness from '@/components/game/status/Happiness';
import Energy from '@/components/game/status/Energy';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';

const HowToPlay = () => {
  const [{ food, happiness, energy }, setBars] = useState({
    food: 100,
    happiness: 100,
    energy: 100,
  });

  const [{ foodOne, happinessOne, energyOne }, setBarsOne] = useState({
    foodOne: 0,
    happinessOne: 10,
    energyOne: 20,
  });
  const [{ foodTwo, happinessTwo, energyTwo }, setBarsTwo] = useState({
    foodTwo: 10,
    happinessTwo: 10,
    energyTwo: 10,
  });

  const [killOpen, setKillOpen] = useState(false);
  const [timer, setTimer] = useState(0);
  const [enableTimer, setEnableTimer] = useState(true);

  useEffect(() => {
    function getRandom() {
      return Math.floor(Math.random() * 100);
    }

    const interval = setInterval(() => {
      setBars({
        food: getRandom(),
        happiness: getRandom(),
        energy: getRandom(),
      });

      setBarsOne(({ foodOne, happinessOne, energyOne }) => ({
        foodOne: foodOne > 50 ? 0 : foodOne + 5,
        happinessOne: happinessOne === 10 ? 12 : 10,
        energyOne: energyOne === 20 ? 17 : 20,
      }));

      setBarsTwo(({ foodTwo, happinessTwo, energyTwo }) => {
        const barsTwoValue = getRandom();
        return {
          foodTwo: foodTwo === 0 ? barsTwoValue : 0,
          happinessTwo: happinessTwo === 0 ? barsTwoValue : 0,
          energyTwo: energyTwo === 0 ? barsTwoValue : 0,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (enableTimer) {
      const interval = setInterval(() => {
        // console.log(enableTimer);

        setTimer((prev) => (prev >= 1000 ? 0 : prev + 1));
      }, 1000);

      return () => clearInterval(interval);
    }

    const timeout = setTimeout(() => {
      setEnableTimer(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [enableTimer]);

  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 my-8">
        How to Play
      </h2>
      <div className="container mx-auto">
        <div className="mx:8 md:mx-16 lg:mx-32 grid grid-cols-12 gap-4">
          <Block className="text-3xl font-bold col-span-12 lg:col-span-12">
            Objective
          </Block>
          <Block className="col-span-12 lg:col-span-6 row-span-1">
            Keep your &quot;Tomodachi&quot; alive for as long as possible.
          </Block>
          <Block className="col-span-12 lg:col-span-6 row-span-2">
            <Lottie animationData={getEmoji(EMOTION.HAPPY)} />
          </Block>
          <Block className="col-span-12 lg:col-span-6 row-span-1">
            <div className="w-full">
              <h3 className="text-3xl font-bold mb-8">Status</h3>
              <div className="flex flex-col gap-2">
                <Food food={food} />
                <Happiness happiness={happiness} />
                <Energy energy={energy} />
              </div>
            </div>
          </Block>
          <Block className="text-3xl font-bold col-span-12 lg:col-span-4 row-span-1">
            Bars
          </Block>
          <Block className="col-span-12 lg:col-span-8">
            There are three bars representing different aspects of your
            Tomodachi&apos;s life which are food, happiness, and energy.
          </Block>

          <Block className="col-span-12 lg:col-span-6">
            If any bar reaches or goes below 0, you lose.
          </Block>
          <Block className="col-span-12 lg:col-span-6 row-span-2">
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <Food food={foodOne} />
                <Happiness happiness={happinessOne} />
                <Energy energy={energyOne} />
              </div>
            </div>
          </Block>
          <Block className="col-span-12 lg:col-span-6">
            If the highest bar is more than 20 points greater than the sum of
            the other two bars, that bar will be reset and you&apos;ll lose a
            lot of points.
          </Block>
          <Block className="col-span-12 lg:col-span-8 row-span-3">
            <Lottie animationData={getEmoji(EMOTION.SAD)} />
          </Block>
          <Block className="text-3xl font-bold col-span-12 lg:col-span-4">
            Perfection
          </Block>
          <Block className="col-span-12 lg:col-span-4 row-span-1">
            <div className="w-full">
              <div className="flex flex-col gap-2">
                <Food food={foodTwo} />
                <Happiness happiness={happinessTwo} />
                <Energy energy={energyTwo} />
              </div>
            </div>
          </Block>
          <Block className="col-span-12 lg:col-span-4 text-pretty">
            If all three bars are equal, your Tomodachi dies due to perfection.
          </Block>
          <Block className="text-3xl font-bold col-span-12 lg:col-span-6 row-span-1">
            Time
          </Block>
          <Block className="col-span-12 font-bold lg:col-span-6 row-span-3 justify-center text-8xl">
            {timer}
          </Block>
          <Block className="col-span-12 lg:col-span-6">
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => setEnableTimer(false)}
            >
              Click Me!
            </Button>
          </Block>
          <Block className="col-span-12 lg:col-span-6">
            Time only moves forward when you&apos;re not clicking any buttons.
            You can&apos;t just click rapidly.
          </Block>
          <Block className="text-3xl font-bold col-span-12 lg:col-span-3 row-span-1">
            Scoring
          </Block>
          <Block className="col-span-12 lg:col-span-5">
            Your score is based on how long you keep your Tomodachi alive and
            well.
          </Block>
          <Block className="col-span-12 lg:col-span-4">
            <Dialog open={killOpen}>
              <DialogTrigger asChild>
                <Button className="w-full" onClick={setKillOpen}>
                  Try Kill
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Guinea Pig has died!</DialogTitle>
                  <DialogDescription>
                    <p className="text-foreground">
                      How could you let this happen!
                    </p>
                    <p className="my-2">
                      Would you like to bring them back to life?
                    </p>
                    <p className="my-2 text-foreground/90">Score: {timer}</p>
                  </DialogDescription>
                </DialogHeader>
                <AlertDialog>
                  <div className="text-right">
                    <AlertDialogTrigger asChild>
                      <Button className="mx-2 bg-primary">Resurrect</Button>
                    </AlertDialogTrigger>
                    <Button variant="outline">Cancel</Button>
                  </div>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        <p className="text-red-300">
                          This action cannot be undone!
                        </p>
                        <p>
                          This will permanently delete your current progess,
                          affect your leaderboard standing and your Tomodachi
                          will be reset!
                        </p>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => {
                          setTimer(0);
                          setKillOpen(false);
                        }}
                      >
                        Confirm
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DialogContent>
            </Dialog>
          </Block>
          <Block className="col-span-12 lg:col-span-4">
            <Lottie animationData={getEmoji(EMOTION.TIRED)} />
          </Block>
          <Block className="col-span-12 lg:col-span-4">
            <Lottie animationData={getEmoji(EMOTION.UPSET)} />
          </Block>
          <Block className="col-span-12 lg:col-span-4">
            <Lottie animationData={getEmoji(EMOTION.HUNGRY)} />
          </Block>
          <Block className="text-3xl font-bold col-span-12 lg:col-span-6">
            Limits
          </Block>
          <Block className="col-span-12 lg:col-span-6">
            You&apos;re limited to three Tomodachis at a time.
          </Block>
          <div className="text-3xl col-span-12 lg:col-span-12 text-balance font-extrabold tracking-tight lg:text-6xl mb-16 mt-8 bg-gradient-to-r from-violet-600 to-rose-400 text-transparent bg-clip-text">
            That&apos;s the gist of it! Keep those bars up, balance their needs,
            and keep an eye on the time!
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToPlay;
