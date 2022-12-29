import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const BlogPage = () => {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState([]);

  const instance = axios.create({
    baseURL: `https://dummyapi.io/data/v1/post/${id}`,
    headers: { "app-id": "636e0d6642c1f665f684f489" },
  });
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await instance.get("/");
        setPost(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPost();
  });
  console.log(post);
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "450px",
          position: "relative",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "450px",
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgba(0,0,0,0.2)",
            filter: "blur(8px)",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "450px",
            backgroundImage: `url(${post.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        ></Box>
      </Box>
    </div>
  );
};
