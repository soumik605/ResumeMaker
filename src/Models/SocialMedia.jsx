import {
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFbLink,
  changeGithubLink,
  changeInstaLink,
  changeLinkdinLink,
} from "../service/Reducers/DetailsReducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxWidth: "100%",
  maxHeight: {
    xs: "80vh",
    md: "70vh",
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
  overflow: "auto",
};
const SocialMedia = (props) => {
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  return (
    <Modal
      open={props.open}
      onClose={() => props.setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container sx={style} spacing={2} maxWidth="md">
        <Grid item xs={12} md={6}>
          <TextField
            label="Facebook"
            id="facebook"
            fullWidth
            type="url"
            value={userDetails.facebookLink}
            onChange={(e) => dispatch(changeFbLink(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FacebookIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Linkdin"
            id="linkdin"
            fullWidth
            type="url"
            validate
            value={userDetails.linkdinLink}
            onChange={(e) => dispatch(changeLinkdinLink(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkedInIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Github"
            id="github"
            fullWidth
            type="url"
            value={userDetails.githubLink}
            onChange={(e) => dispatch(changeGithubLink(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GitHubIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Instagram"
            id="instagram"
            fullWidth
            type="url"
            value={userDetails.instaLink}
            onChange={(e) => dispatch(changeInstaLink(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InstagramIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default SocialMedia;
