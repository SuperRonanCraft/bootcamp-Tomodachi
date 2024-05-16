const HowToPlay = () => {
  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 my-8">
        How to Play
      </h2>
      <div className="container mx-auto">
        <ul className="mx-32 text-left mt-8 list-decimal">
          <li className="mt-2 text-pretty">
            Objective: Keep your &quot;Tomodachi&quot; alive for as long as
            possible.
          </li>
          <li className="mt-2 text-pretty">
            Bars: There are three bars representing different aspects of your
            Tomodachi&apos;s life which are food, happiness, and energy.
          </li>
          <div className="ml-2 list-disc">
            <li className="mt-2 text-pretty">
              If any bar reaches or goes below 0, you lose.
            </li>
            <li className="mt-2 text-pretty">
              If the highest bar is more than 20 points greater than the sum of
              the other two bars, that bar will be reset and you&apos;ll lose a
              lot of points.
            </li>
          </div>

          <li className="mt-2 text-pretty">
            Perfection: If all three bars are equal, your Tomodachi dies due to
            perfection.
          </li>
          <li className="mt-2 text-pretty">
            Time: Time only moves forward when you&apos;re not clicking any
            buttons. You can&apos;t just click rapidly.
          </li>
          <li className="mt-2 text-pretty">
            Online Progress: Your Tomodachi&apos;s age increases only when
            you&apos;re online and active.
          </li>
          <li className="mt-2 text-pretty">
            Limits: You&apos;re limited to three Tomodachis at a time.
          </li>
          <li className="mt-2 text-pretty">
            Scoring: Your score is based on how long you keep your Tomodachi
            alive and well.
          </li>
          <li className="mt-2 text-pretty">
            That&apos;s the gist of it! Keep those bars up, balance their needs,
            and keep an eye on the time!
          </li>
        </ul>
      </div>
    </>
  );
};

export default HowToPlay;
