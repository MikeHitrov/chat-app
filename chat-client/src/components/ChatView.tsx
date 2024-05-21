import React from "react";
import { ChatViewProps } from "../types";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
} from "@material-ui/core";
import Popup from "./Popup";
import useStyles from "./ChatView.style";

const ChatView: React.FC<ChatViewProps> = ({ messages, onSendMessage }) => {
  const classes = useStyles();
  const token = localStorage.getItem("token");
  const [input, setInput] = React.useState("");
  const [open, setOpen] = React.useState(false);

  if (!token) {
    window.location.replace("/login");
  }

  const handleSend = async () => {
    if (input.trim()) {
      setInput("");
      await onSendMessage(input);
      setOpen(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  return (
    <Container maxWidth="md" className={classes.chatView}>
      <Popup open={open} message={"New message from bot!"} />
      <Typography variant="h5" align="center" gutterBottom>
        Chat App
      </Typography>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
      <Paper className={classes.messages}>
        {messages.map((msg, index) => (
          <Paper
            key={index}
            className={`${classes.message} ${
              msg.sender === "user" ? classes.userMessage : ""
            }`}
            elevation={3}
          >
            <Typography>{msg.content}</Typography>
            <Typography variant="caption">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </Typography>
          </Paper>
        ))}
      </Paper>
      <div className={classes.input}>
        <TextField
          className={classes.inputField}
          label="Type a message"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <Button variant="contained" color="primary" onClick={handleSend}>
          Send
        </Button>
      </div>
    </Container>
  );
};

export default ChatView;
