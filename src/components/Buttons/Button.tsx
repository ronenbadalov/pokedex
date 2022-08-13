import React from "react";
import classes from "./Button.module.scss";

type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
};

const Button = (props: Props) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes["btn"]}
    >
      {props.children}
    </button>
  );
};

export default Button;
