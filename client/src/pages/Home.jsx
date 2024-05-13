import About from '../components/landing/about';
import HowToPlay from '../components/landing/howtoplay';
import Nav from '../components/landing/nav';
const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Your Tomodachi</h1>
      <About />
      <HowToPlay />
      <Nav />
    </div>
  );
};

export default Home;
