import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Box } from "@mui/material";
import { useEffect } from "react";

function Giphy() {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState([]);
  const search = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=50CPPoh2Z9SJafhS42H0P2ymPbLsvj6a&q=${inputValue}&limit=25&offset=0&rating=g&lang=en`
    );
    setOutput(res);
  };

  useEffect(() => {
    const resInterceptor = (response) => {
      console.log(response);
      return response.data.data;
    };
    const interceptor = axios.interceptors.response.use(resInterceptor);
    return () => axios.interceptors.response.eject(interceptor);
  }, []);

  return (
    <div>
      <Box sx={{ marginBottom: "40px" }}></Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="standard-basic"
          label="Search all the GIFs"
          variant="standard"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && Giphy();
          }}
        />
        <Button
          onClick={() => {
            search();
          }}
          sx={{ mt: 2 }}
        >
          Enter
        </Button>
      </div>

      <Box sx={{ marginBottom: "50px" }}></Box>
      <container
        maxWidth="sm"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={6} lg={3} maxWidth="xl">
          {output.map((gip) => (
            <img
              key={gip.id}
              src={gip.images.fixed_height.url}
              alt="img"
              style={{ width: "250px", height: "250px" }}
            />
          ))}
        </Grid>
      </container>
    </div>
  );
}
export default Giphy;
