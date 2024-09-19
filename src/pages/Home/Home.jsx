import { useOutletContext } from "react-router-dom";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Loading from './../../components/loading/Loading';
import Error from './../../components/error/Error';

const Home = () => {
  const { selectedCategory, products, loading, error } = useOutletContext();

  if (loading) return <Loading/>;
  if (error) return <Error message={error} />;

  return (
    <div>
      <FoodDisplay category={selectedCategory.name} products={products} />
    </div>
  );
};

export default Home;
