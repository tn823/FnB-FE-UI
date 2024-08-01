import { useOutletContext } from "react-router-dom";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const { category } = useOutletContext();

  return (
    <div>
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
