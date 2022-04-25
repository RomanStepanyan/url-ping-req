import { useState, useEffect, Suspense, lazy } from "react";
import { Route } from "react-router-dom";

import { Switch } from "react-router-dom";
import axios from "axios";

const LogList = lazy(() => import("./components/Logs/LogList"));
const Interval = lazy(() => import("./components/Interval/Interval"));
const UrlList = lazy(() => import("./components/URL/UrlList"));
const Email = lazy(() => import("./components/Email.js/Email"));
const AddUrlForm = lazy(() => import("./components/AddUrlForm/AddUrlForm"));
const NavigationBar = lazy(() =>
  import("./components/Navigation/NavigationBar")
);

export const App = () => {
  const [mainInterval, setMainInterval] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/api/db-url_ping/interval")
      .then(({ data: { data } }) =>
        setMainInterval(data.map((item) => item.interval))
      );
  }, []);
  console.log(mainInterval);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavigationBar interval={mainInterval} setInterval={setMainInterval} />
        <Switch>
          <Route path="/logList" exact>
            <LogList />
          </Route>
          <Route path="/" exact>
            <NavigationBar
              interval={mainInterval}
              setInterval={setMainInterval}
            />
          </Route>
          <Route path="/urlList">
            <UrlList />
          </Route>
          <Route path="/addUrl">
            <AddUrlForm />
          </Route>
          <Route path="/interval">
            <Interval interval={mainInterval} setInterval={setMainInterval} />
          </Route>
          <Route path="/email">
            <Email />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
