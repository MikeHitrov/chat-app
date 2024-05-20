import React, { useState, useEffect } from "react";
import { Snackbar } from "@material-ui/core";

interface PopupProps {
  open: boolean;
  message: string;
}

const Popup: React.FC<PopupProps> = ({ open, message }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar
      open={isOpen}
      message={message}
      onClose={handleClose}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    />
  );
};

export default Popup;
