const About = () => {
  return (
    <>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 my-8">
        About Tomodachi
      </h2>
      <div className="container mx-auto">
        <div className="mx:8 md:mx-16 lg:mx-32 text-pretty">
          {/* This game is called Tomodachi because you will have a new friend/companion who you will take care of and come to share a strong bond with. 
        We taken the concept of Tamagotchis and created our own virtual pet which incorporates nostaliginess and 21st century using emojis. 
        The concept remains the same in terms of learning to care and nuturing your emoji. The goal is to raise a happy and healthy emoki by feeding it, playing with it and letting it sleep.
        You need to monitor the emoji level and take the correct acctions to keep it alive and happy.
        Your Tomodachi will go through different stages of life and the ultimate goal is to raise the pet and keep it alive.*/}
          Welcome to &quot;<span className="font-bold">Tomodachi</span>&quot;!
          <p className="mt-2">
            In this game, you&apos;ll embark on a journey to nurture and
            befriend your very own virtual companion. Inspired by the timeless
            charm of Tamagotchis, our creation blends nostalgia with modern
            flair, bringing you a delightful experience filled with emojis.
          </p>
          <p className="mt-2">
            Just like its predecessors, the essence of Tomodachi lies in caring
            for and nurturing your emoji friend. Your{' '}
            <span className="font-bold">goal</span> is simple yet profound: to
            foster a bond of happiness and health by tending to your
            emoji&apos;s needs.
          </p>
          <p className="mt-2">
            Whether it&apos;s{' '}
            <span className="italic">
              feeding, playing, or ensuring a good night&apos;s rest
            </span>
            , every action you take shapes the course of your Tomodachi&apos;s
            life.
          </p>
          <p className="mt-2">
            As you embark on this heartwarming adventure, remember to keep a
            close eye on your emoji&apos;s well-being. By attentively monitoring
            its levels and responding with care, you&apos;ll witness your
            Tomodachi thrive through different stages of life. Together,
            let&apos;s embark on this journey of friendship and discovery, where
            every moment spent with your Tomodachi is a cherished memory in the
            making.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
