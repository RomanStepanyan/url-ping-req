import axios from "axios";
import { useState, useEffect } from "react";

import s from "./ContactsList.module.css";

const UrlList = () => {
  const [items, setItems] = useState([]);

  async function fetchUrl() {
    const response = await axios
      .get("http://localhost:3030/api/db-url_ping/url-list")
      .then(({ data: { data } }) => data);
    return response;
  }

  useEffect(() => {
    fetchUrl().then((data) => setItems(data));
  }, []);

  const deleteUrl = (urlId) => {
    console.log(urlId);
    axios
      .delete(`http://localhost:3030/api/db-url_ping/url-list/${urlId}`)
      .then((res) => console.log(res));
  };

  return (
    <div className={s.urlList}>
      <div className={s.contactListWrapper}>
        <h2 className={s.title}>List of urls</h2>
        <ul className={s.contactList}>
          {items.map((item) => (
            <li key={item._id} className={s.contact}>
              <span className={s.contact_span}>{item.url}</span>
              <button className={s.button} onClick={() => deleteUrl(item._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default UrlList;
