import React, { text, ReactNode } from "react";

interface Props {
  // text: ReactNode;
  // onclose: () => void;
}

const alert = ({ text, onclose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {text}

      <button
        type="button"
        className="btn-close"
        onClick={onclose}
        data-bs-dismiss="alert"
        aria-label="Close"
      />
    </div>
  );
};

export default alert;
