import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import { makeStyles } from "@mui/styles";
import { connect, useSelector, useDispatch } from "react-redux";

const style = makeStyles((theme) => ({
  container: {
    minHeight: "100px",
  },
}));

const Contacts = () => {
  const classes = style();
  const userDetails = useSelector((state) => state.userDetails);

  return (
    <Box sx={{ pb: 3 }}>
      <Typography variant="h6">Contacts</Typography>
      <List>
        {userDetails.email.length !== 0 && (
          <ListItem
            component="a"
            href={userDetails.email}
            className={classes.item}
            sx={{ padding: "4px 0px" }}
          >
            <ListItemIcon sx={{ minWidth: 0, pr: "8px" }}>
              <AlternateEmailIcon />
            </ListItemIcon>
            <ListItemText primary={userDetails.email} />
          </ListItem>
        )}

        {userDetails.phone.length !== 0 && (
          <ListItem
            component="a"
            href={userDetails.phone}
            className={classes.item}
            sx={{ padding: "4px 0px" }}
          >
            <ListItemIcon sx={{ minWidth: 0, pr: "8px" }}>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={userDetails.phone} />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default Contacts;
