import { useState, useEffect } from "react";
import axios from "axios";
import Input from "@mui/material/core/Input";

const PostList = (props) => {
  const { title, description } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

function App() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postPulisher = async () => {
    try {
      const data = await axios.get("http://localhost:8000/posts");
      setList(data.data.postPulisher);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Input placeholder="Title" variant="outlined" />
      <Input placeholder="Description" variant="outlined" />
    </div>
  );
}
