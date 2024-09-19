import { useOutletContext } from "react-router-dom";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home = () => {
  const { selectedCategory, products, loading, error } = useOutletContext();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div>
      <FoodDisplay category={selectedCategory.name} products={products} />
    </div>
  );
};

export default Home;
