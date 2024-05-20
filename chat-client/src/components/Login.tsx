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

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.access_token);
      window.location.replace("/chat");
    } catch (error) {
      setOpen(true);
      console.error("Login failed", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Popup open={open} message={"Login failed!"} />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" gutterBottom>
          Login
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
          onClick={handleLogin}
          style={{ marginTop: "16px" }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.replace("/register")}
          style={{ marginLeft: "16px", marginTop: "16px" }}
        >
          Regiser
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
