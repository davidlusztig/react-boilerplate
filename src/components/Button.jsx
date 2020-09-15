import React from "react";
import { Button } from "reactstrap";

const MyButton = ({ children, onClick }) => {
  return (
    <Button onClick={onClick} color="primary">
      {children}
    </Button>
  );
};

export default MyButton;