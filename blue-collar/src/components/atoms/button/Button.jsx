import React from "react";

const ButtonElement = ({
  // title,
  children,
  // buttonType,
  // buttonSize,
  // disabled = false,
  // ariaLabel,
  // textColor,

}) => {
  // const combineClasses = [
  //   buttonType !== "button-text" ? "button" : "",
  //   buttonType ? buttonType : "",
  //   buttonSize ? buttonSize : "",
  //   textColor ? textColor : ""
  // ];

  return (
    <button 
    // className={combineClasses.join(" ")} disabled={disabled} aria-label={ariaLabel ? ariaLabel : undefined}
    >
      {children}
    </button>
  );
};

export default ButtonElement;
