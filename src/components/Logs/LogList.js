import axios from "axios";
import { useState, useEffect } from "react";

import s from "./ContactsList.module.css";

const LogList = () => {
  const [items, setItems] = useState([]);

  async function fetchLogs() {
    const response = await axios
      .get("http://localhost:3030/api/db-url_ping/log")
      .then(({ data: { data } }) => data);
    return response;
  }

  useEffect(() => {
    fetchLogs().then((data) => setItems(data));
  }, []);

  const deleteLog = (logId) => {
    console.log(logId);
    axios
      .delete(`http://localhost:3030/api/db-url_ping/log/${logId}`)
      .then((res) => console.log(res));
  };

  console.log(items);
  return (
    <>
      <div className={s.contactListWrapper}>
        <h2 className={s.title}>List of logs</h2>
        <ul className={s.contactList}>
          {items.map((item) => (
            <li key={item._id} className={s.contact}>
              <span className={s.contact_span}>{item.service_URL}</span>
              <span className={s.contact_span}>{item.ping_timestamp}</span>
              <span className={s.contact_span}>{item.HTTP_status}</span>
              <button className={s.button} onClick={() => deleteLog(item._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default LogList;
