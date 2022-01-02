import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Contacts from "./Contacts";
import SocialMedia from "./SocialMedia";

const style = makeStyles((theme) => ({
  container: {
    minHeight: "100px",
  },
  field: {
    color: theme.palette.info.main,
    paddingTop: theme.spacing(1),
  },
  item: {
    overflowWrap: "anywhere",
  },
}));

const LeftBar = () => {
  const classes = style();
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  return (
    <Container className={classes.container}>
      <Box sx={{ pb: 3 }}>
        <Typography variant="h6">Personal Details</Typography>

        <Typography variant="h6" className={classes.field}>
          Birth Date
        </Typography>
        <p>14/04/2000</p>

        <Typography variant="h6" className={classes.field}>
          Country
        </Typography>
        <p>India</p>

        {userDetails.address.length !== 0 && (
          <>
            <Typography variant="h6" className={classes.field}>
              Address
            </Typography>
            <p>{userDetails.address}</p>
          </>
        )}
      </Box>

      {(userDetails.githubLink.length !== 0 ||
        userDetails.linkdinLink.length !== 0 ||
        userDetails.facebookLink.length !== 0 ||
        userDetails.instagramLink.length !== 0) && (
        <>
          <hr />
          <SocialMedia />
        </>
      )}

      {(userDetails.email.length !== 0 || userDetails.phone.length !== 0) && (
        <>
          <hr />
          <Contacts />
        </>
      )}
    </Container>
  );
};

export default LeftBar;
