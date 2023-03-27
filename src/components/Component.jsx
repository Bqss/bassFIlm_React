import axios from "axios";
import { useEffect, useState } from "react";

const Component = (props) => {
  const [data, setData ]= useState([]);

  const addNote = async() => {
    await axios.post("API ENDPOINT"+ parameter);
    // refreshing data
  }
  return (
    <button onClick={addNote}>
      Tambahkan data 
    </button>
  );
};

export default Component;
