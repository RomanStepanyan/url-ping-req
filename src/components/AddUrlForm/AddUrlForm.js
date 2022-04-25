import axios from "axios";
import { useState, useEffect } from "react";

import s from "./ContactsList.module.css";

const AddUrlForm = () => {
  const [newUrl, setNewUrl] = useState([]);

  const handleChangeNameForm = ({ target }) => {
    setNewUrl(target.value);
  };
  console.log(newUrl);

  const addUrl = (url) => {
    console.log(url);
    axios
      .post("http://localhost:3030/api/db-url_ping/url-list", url)
      .then((res) => console.log(res));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const currentStateUrl = newUrl;
    addUrl({ url: currentStateUrl });
    setNewUrl("");
  };

  return (
    <div className={s.urlList}>
      <div className={s.contactListWrapper}>
        <h2 className={s.title}>Add url</h2>
        <form className={s.form} onSubmit={handleFormSubmit}>
          <input
            className={s.formInput}
            type="text"
            name="url"
            required
            placeholder="Enter url"
            value={newUrl}
            onChange={handleChangeNameForm}
          />
          <button type="submit">Add url</button>
        </form>
      </div>
    </div>
  );
};
export default AddUrlForm;
