import { NavLink } from "react-router-dom";

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import s from "./ContactsNavigation.module.css";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(10),
  },
}));

const UrlNavigation = () => {
  const classes = useStyles();
  return (
    <>
      <NavLink to="/urlList" exact>
        <Box className={classes.title}>
          <Typography variant="h6" color="secondary" className={s.title}>
            Urls
          </Typography>
        </Box>
      </NavLink>
      <NavLink to="/addUrl" exact>
        <Box className={classes.title}>
          <Typography variant="h6" color="secondary" className={s.title}>
            Add url
          </Typography>
        </Box>
      </NavLink>
      <NavLink to="/interval" exact>
        <Box className={classes.title}>
          <Typography variant="h6" color="secondary" className={s.title}>
            Interval
          </Typography>
        </Box>
      </NavLink>
      <NavLink to="/email" exact>
        <Box className={classes.title}>
          <Typography variant="h6" color="secondary" className={s.title}>
            Email
          </Typography>
        </Box>
      </NavLink>
      <NavLink to="/logList" exact>
        <Box className={classes.title}>
          <Typography variant="h6" color="secondary" className={s.title}>
            Logs
          </Typography>
        </Box>
      </NavLink>
    </>
  );
};

export default UrlNavigation;
