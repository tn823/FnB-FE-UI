import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import SideBar from "./../components/SideBar/SideBar";
import "./BaseLayout.css";

const BaseLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    name: "All",
    id: "all",
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = "https://fnb-be-api.vercel.app/api/products";

        if (selectedCategory.id !== "all") {
          url = `https://fnb-be-api.vercel.app/api/products/category/${selectedCategory.id}`;
        }

        const response = await axios.get(url);
        setProducts(response.data.products || response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <main className="page-wrapper">
      <div className="sidebar">
        <SideBar
          category={selectedCategory}
          setCategory={setSelectedCategory}
        />
      </div>
      <div className="content-wrapper">
        <Outlet context={{ selectedCategory, products, loading, error }} />
      </div>
    </main>
  );
};

export default BaseLayout;
