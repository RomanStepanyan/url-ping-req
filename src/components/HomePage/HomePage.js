import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: { flexGrow: 1 },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        URL ping app
      </Typography>
    </>
  );
};
export default HomePage;
