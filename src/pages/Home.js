import Footer from "../Components/Footer";
import Herosection from "../Components/Herosection";
import Navbar from "../Components/Navbar";
import Quizes from "../Components/Quizes";
import Team from "../Components/Team";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Quizes />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
