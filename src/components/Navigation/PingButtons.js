import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: { marginRight: theme.spacing(1) },
}));

const PingButtons = (props) => {
  const classes = useStyles();

  const [sendRequest, setSendRequest] = useState(false);

  const startPing = async () => {
    const response = await axios
      .get("http://localhost:3030/api/db-url_ping/url-list")
      .then(({ data: { data } }) => data);
    return response;
  };

  useEffect(() => {
    if (sendRequest) {
      const intervalCall = setInterval(() => {
        startPing();
      }, props.interval.interval);
      return () => {
        clearInterval(intervalCall);
      };
    }
  }, [sendRequest]);

  return (
    <>
      <NavLink to="/startPing" exact>
        <Box className={classes.menuButton}>
          <Button
            onClick={() => setSendRequest(true)}
            color="secondary"
            variant="outlined"
          >
            Start ping
          </Button>
        </Box>
      </NavLink>
      <NavLink to="/stopPing" exact>
        <Box className={classes.menuButton}>
          <Button
            onClick={() => setSendRequest(false)}
            color="secondary"
            variant="contained"
          >
            Stop ping
          </Button>
        </Box>
      </NavLink>
    </>
  );
};

export default PingButtons;
