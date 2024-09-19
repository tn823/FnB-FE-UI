import PropTypes from "prop-types";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { MENU_LIST } from "../../constants/common";
import { Link } from "react-router-dom";

const SideBar = ({ category, setCategory }) => {
  const handleClick = (menuName, categoryId) => {
    setCategory({ name: menuName, id: categoryId });
  };

  return (
    <div className="explore-menu">
      <div className="logo-container">
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
      </div>
      <div className="explore-menu-list">
        {MENU_LIST.map((item, index) => (
          <div
            onClick={() => handleClick(item.categoryName, item.categoryId)}
            key={index}
            className={`explore-menu-list-item ${
              category.name === item.categoryName ? "active" : ""
            }`}
          >
            <img
              className={category.name === item.categoryName ? "active" : ""}
              src={item.menu_image}
              alt={item.categoryName}
            />
            <p>{item.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

SideBar.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default SideBar;
