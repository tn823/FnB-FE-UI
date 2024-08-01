import PropTypes from "prop-types";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { menu_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SideBar = ({ category, setCategory }) => {
  const navigate = useNavigate();

  const handleClick = (menuName) => {
    setCategory(menuName);
    navigate("/home");
  };

  return (
    <div className="explore-menu">
      <div className="logo-container">
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => handleClick(item.categoryName)}
              key={index}
              className={`explore-menu-list-item ${
                category === item.categoryName ? "active" : ""
              }`}
            >
              <img
                className={category === item.categoryName ? "active" : ""}
                src={item.menu_image}
                alt={item.categoryName}
              />
              <p>{item.categoryName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default SideBar;
