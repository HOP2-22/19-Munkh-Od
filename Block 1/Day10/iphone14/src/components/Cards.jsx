import * as React from "react";
import { useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid, Avatar, Box } from "@mui/material";
import axios from "axios";
import { DarkModeContext } from "./DarkModeContext";
import { Link } from "react-router-dom";

const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post",
  headers: { "app-id": "636e0d6642c1f665f684f489" },
});

export default function MultiActionAreaCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await instance.get("/");
        setPosts(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPosts();
  }, []);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Grid container spacing={5}>
      {posts?.map((post, index) => (
        <Grid
          item
          xs={4}
        >
          <Link to={`/${post.id}`}>
            <Card sx={{ background: darkMode ? "black" : "white" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={post.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Box sx={{ display: "flex", fontFamily: "sans-serif" }}>
                    <Typography
                      color={darkMode ? "white" : "black"}
                      margin={"3px"}
                      fontSize={"20px"}
                    >
                      {post.tags[0]},
                    </Typography>
                    <Typography
                      color={darkMode ? "white" : "black"}
                      margin={"3px"}
                      fontSize={"20px"}
                    >
                      {post.tags[1]},
                    </Typography>
                    <Typography
                      color={darkMode ? "white" : "black"}
                      margin={"3px"}
                      fontSize={"20px"}
                    >
                      {post.tags[2]}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color={darkMode ? "grey" : "text.secondary"}
                    height={"100px"}
                    fontFamily={"sans-serif"}
                    fontSize={"15px"}
                  >
                    {post.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Avatar alt="Remy Sharp" src={post.owner.picture} />
                <Typography
                  color="#6D7D8B"
                  sx={{ fontSize: "0.8rem", marginLeft: "15px" }}
                >
                  {post.owner.firstName}, {post.owner.lastName}
                </Typography>
              </CardActions>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}   
