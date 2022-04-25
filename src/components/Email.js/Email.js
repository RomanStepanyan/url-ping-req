import axios from "axios";
import { useState, useEffect } from "react";

import s from "./ContactsList.module.css";

const Email = () => {
  const [items, setItems] = useState([]);
  const [newEmail, setNewEmail] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/api/db-url_ping/email")
      .then(({ data: { data } }) => setItems(data));
  }, []);

  const handleChangeForm = ({ target }) => {
    setNewEmail(target.value);
  };

  const changeEmail = (newEmail) => {
    axios
      .patch("http://localhost:3030/api/db-url_ping/email/", newEmail)
      .then((res) => console.log(res));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    changeEmail({ email: newEmail });
  };

  return (
    <div className={s.contactListWrapper}>
      <h2 className={s.title}>Email for ping messages</h2>
      <h3 className={s.currentInterval}>{items}</h3>

      <form className={s.form} onSubmit={handleFormSubmit}>
        <input
          className={s.formInput}
          type="text"
          name="email"
          required
          placeholder="Enter email"
          onChange={handleChangeForm}
        />
        <button type="submit" className={s.button}>
          Change email
        </button>
      </form>
    </div>
  );
};
export default Email;
