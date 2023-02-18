import Herosection from "../components/Herosection";
import Navbar from "../components/Navbar";
import Quizes from "../components/Quizes";
import Team from "../components/Team";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Quizes />
      <Team />
    </div>
  );
};

export default Home;
