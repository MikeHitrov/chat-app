import React from "react";
import { Snackbar } from "@material-ui/core";
import { PopupProps } from "../types";

const Popup: React.FC<PopupProps> = ({ message }) => {
  return (
    <Snackbar
      open={true}
      message={message}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    />
  );
};

export default Popup;
