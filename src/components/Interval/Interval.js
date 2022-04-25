import axios from "axios";
import { useState, useEffect } from "react";

import s from "./ContactsList.module.css";

const Interval = (props) => {
  console.log(props.interval);
  const [items, setItems] = useState([]);
  const [newInterval, setNewInterval] = useState([]);

  useEffect(() => {
    setItems(props.interval);
  }, []);

  const handleChangeNameForm = ({ target }) => {
    setNewInterval(target.value);
  };

  const changeInterval = (patchInterval) => {
    axios
      .patch("http://localhost:3030/api/db-url_ping/interval/", patchInterval)
      .then((res) => console.log(res));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    changeInterval({ interval: newInterval });
  };

  return (
    <div className={s.contactListWrapper}>
      <h2 className={s.title}>Ping interval</h2>
      <h3 className={s.currentInterval}>{items}</h3>
      <form className={s.form} onSubmit={handleFormSubmit}>
        <input
          className={s.formInput}
          type="text"
          name="interval"
          required
          placeholder="Enter interval"
          onChange={handleChangeNameForm}
        />

        <button type="submit" className={s.button}>
          Change interval
        </button>
      </form>
    </div>
  );
};
export default Interval;
