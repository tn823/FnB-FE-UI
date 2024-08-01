import { PropTypes } from "prop-types";
import IdleTimeoutPopup from "../components/ui/IdleTimeoutPopup";

const PopupLayout = ({ children }) => {
  return (
    <>
      {children}
      <IdleTimeoutPopup />
    </>
  );
};
PopupLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PopupLayout;
