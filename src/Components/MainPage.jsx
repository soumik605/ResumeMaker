import { Container, Fab, Grid, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { makeStyles } from "@mui/styles";
import React from "react";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import TopBar from "./TopBar";
import AddButton from "./AddButton";

const style = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
  },
  addIcon: {
    bottom: 20,
    right: 20,
  },
  bottomCont: {
    position: "fixed",
    flexDirection: "row",
    justifyContent: "flex-end",
    right: "20px",
    bottom: "20px",
    //transform: "translate(-50%,-100%)",
  },
}));

const MainPage = () => {
  const classes = style();

  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <TopBar />
          </Grid>
          <Grid item xs={12} md={4}>
            <LeftBar />
          </Grid>
          <Grid item xs={12} md={8}>
            <RightBar />
          </Grid>
        </Grid>
      </Container>
      <Container
        className={classes.bottomCont}
        sx={{
          p: 2,
          display: "flex",
          width: "min-content",
        }}
      >
        <AddButton />
      </Container>
    </>
  );
};

export default MainPage;
