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
  const API_URL = "http://localhost:3000";

  const handleRegister = async () => {
    try {
      const response = await axios.post(API_URL + "/auth/signup", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.access_token);
      window.location.replace("/chat");
    } catch (error) {
      setOpen(true);
      setTimeout(() => setOpen(false), 2000);
      console.error("Register failed", error);
    }
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {open ? <Popup message={"Register failed!"} /> : <></>}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        style={{ textAlign: "center" }}
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
