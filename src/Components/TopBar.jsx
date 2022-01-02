import { Avatar, Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";

const style = makeStyles((theme) => ({
  container: {
    minHeight: "100px",
    alignItems: "center",
    paddingBottom: "20px",
  },
  avatar: {
    width: 150,
    height: 150,
  },
  name: {
    color: theme.palette.info.main,
  },
}));

const TopBar = (props) => {
  const classes = style();
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  return (
    <Stack direction="row" className={classes.container}>
      <Avatar
        src={userDetails.photo}
        alt="avatar"
        className={classes.avatar}
        sx={{
          width: {
            xs: 120,
            md: 150,
          },
          height: {
            xs: 120,
            md: 150,
          },
        }}
      />
      <Box>
        <Typography
          variant="h3"
          className={classes.name}
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: 30,
              md: 40,
            },
          }}
        >
         { `${userDetails.firstName} ${userDetails.lastName}`}
        </Typography>
        <Typography variant="h6">Position</Typography>
      </Box>
    </Stack>
  );
};

export default TopBar;
