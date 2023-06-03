import React from "react";

interface Props {
  text: string;
  color?: "primary" | "secondary";
  onclick: () => void;
}

const Button = ({ text, color = "secondary", onclick }: Props) => {
  return (
    <button color="secondary" className={"btn btn-secondary"} onClick={onclick}>
      my Button
    </button>
  );
};

export default Button;
