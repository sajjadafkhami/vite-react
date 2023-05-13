import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary";
  onclick: () => void;
}

const Button = ({ children, color = "secondary", onclick }: Props) => {
  return (
    <button color="secondary" className={"btn btn-secondary"} onClick={onclick}>
      my Button
    </button>
  );
};

export default Button;
