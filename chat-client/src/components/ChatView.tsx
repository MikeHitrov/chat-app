import React from "react";
import { ChatViewProps } from "../types";
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import Popup from "./Popup";

const useStyles = makeStyles((theme) => ({
  chatView: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: theme.spacing(2),
  },
  message: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    maxWidth: "70%",
    alignSelf: "flex-start",
  },
  userMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  input: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  inputField: {
    flex: 1,
    marginRight: theme.spacing(2),
  },
}));

const ChatView: React.FC<ChatViewProps> = ({ messages, onSendMessage }) => {
  const classes = useStyles();
  const [input, setInput] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      setInput("");
      await onSendMessage(input);
      setOpen(true);
    }
  };

  return (
    <Container maxWidth="md" className={classes.chatView}>
      <Popup open={open} message={"New message from bot!"} />
      <Typography variant="h5" align="center" gutterBottom>
        Chat App
      </Typography>
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
