import { Box, Container, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Education from "./Education";
import React from "react";
import Skills from "./Skills";
import { connect, useSelector, useDispatch } from "react-redux";

const style = makeStyles((theme) => ({
  container: {
    minHeight: "100px",
  },
}));
const RightBar = () => {
  const classes = style();
  const userDetails = useSelector((state) => state.userDetails);

  return (
    <Container className={classes.container}>
      {userDetails.about.length !== 0 && (
        <Box sx={{ pb: 3 }}>
          <Typography variant="h6" sx={{ color: "primary.main" }}>
            About me
          </Typography>
          <Typography variant="p">{userDetails.about}</Typography>
        </Box>
      )}

      <Box sx={{ pb: 3 }}>
        <Education />
      </Box>

      <Box sx={{ pb: 3 }}>
        <Typography variant="h6" sx={{ color: "primary.main" }}>
          Skills
        </Typography>
        <Grid container sx={{ display: "flex" }}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item xs={6} sm={4} key={item} sx={{ p: "8px 0" }}>
              <Skills />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default RightBar;
