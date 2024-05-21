import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from "@material-ui/core";
import Popup from "./Popup";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/signup", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.access_token);
      window.location.replace("/chat");
    } catch (error) {
      setOpen(true);
      console.error("Register failed", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Popup open={open} message={"Register failed!"} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleRegister}
          style={{ marginTop: "16px" }}
        >
          Register
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.replace("/login")}
          style={{ marginLeft: "16px", marginTop: "16px" }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
