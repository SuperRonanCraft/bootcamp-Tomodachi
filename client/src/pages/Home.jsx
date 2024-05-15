import About from '../components/landing/about';
import HowToPlay from '../components/landing/howtoplay';
const Home = () => {
  return (
    <div className="container mx-auto mt-32">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl text-center my-8 bg-gradient-to-r from-violet-600 to-rose-400 text-transparent bg-clip-text">
        Welcome to Your Tomodachi
      </h1>
      <About />
      <HowToPlay />
    </div>
  );
};

export default Home;
