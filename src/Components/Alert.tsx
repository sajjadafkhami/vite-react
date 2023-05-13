import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onclose: () => void;
}

const alert = ({ children, onclose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}

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
