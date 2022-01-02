import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useSelector, useDispatch } from "react-redux";

const style = makeStyles((theme) => ({
  item: {
    overflowWrap: "anywhere",
  },
}));

const SocialMedia = () => {
  const classes = style();
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  return (
    <Box sx={{ pb: 3 }}>
      <Typography variant="h6">Social Media</Typography>
      <List>
        {userDetails.githubLink.length !== 0 && (
          <ListItem
            component="a"
            href={userDetails.githubLink}
            className={classes.item}
            sx={{ padding: "4px 0px" }}
          >
            <ListItemIcon sx={{ minWidth: 0, pr: "8px" }}>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary={userDetails.githubLink} />
          </ListItem>
        )}

        {userDetails.linkdinLink.length !== 0 && (
          <ListItem
            component="a"
            href={userDetails.linkdinLink}
            className={classes.item}
            sx={{ padding: "4px 0px" }}
          >
            <ListItemIcon sx={{ minWidth: 0, pr: "8px" }}>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary={userDetails.linkdinLink} />
          </ListItem>
        )}

        {userDetails.facebookLink.length !== 0 && (
          <ListItem
            component="a"
            href={userDetails.facebookLink}
            className={classes.item}
            sx={{ padding: "4px 0px" }}
          >
            <ListItemIcon sx={{ minWidth: 0, pr: "8px" }}>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary={userDetails.facebookLink} />
          </ListItem>
        )}

        {userDetails.instagramLink.length !== 0 && (
          <ListItem
            component="a"
            href={userDetails.instagramLink}
            className={classes.item}
            sx={{ padding: "4px 0px" }}
          >
            <ListItemIcon sx={{ minWidth: 0, pr: "8px" }}>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary={userDetails.instagramLink} />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default SocialMedia;
