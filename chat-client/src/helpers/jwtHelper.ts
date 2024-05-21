import { jwtDecode } from "jwt-decode";

const parseJWT = (): number => {
  const token = localStorage.getItem("token");

  if (token) {
    const decoded: { id: number } = jwtDecode(token);
    const userID = decoded.id;

    return userID;
  }

  return -1;
};

export { parseJWT };
