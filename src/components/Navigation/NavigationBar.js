import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import UrlNavigation from "./UrlNavigation";
import HomePage from "../HomePage/HomePage";
import PingButtons from "./PingButtons";

const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(1) },
  title: { flexGrow: 1 },
  homePageTitle: {
    position: "relative",
    color: theme.palette.common.black,
    marginTop: theme.spacing(10),
    textAlign: "center",
  },
}));

const NavigationBar = (props) => {
  const classes = useStyles();
  console.log(props.interval);
  console.log(props);

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <HomePage />
            <UrlNavigation />
            <PingButtons interval={props} />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavigationBar;
