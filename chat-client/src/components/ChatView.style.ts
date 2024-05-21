import { makeStyles } from "@material-ui/core/styles";

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

export default useStyles;
