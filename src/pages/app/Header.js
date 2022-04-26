import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </div>
  );
};

// default prop
Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;