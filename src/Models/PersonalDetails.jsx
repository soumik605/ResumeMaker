import { AccountCircle } from "@mui/icons-material";
import {
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "date-fns";
import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import {
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhone,
  changeAddress,
  changeAbout,
} from "../service/Reducers/DetailsReducer";
import {  useSelector, useDispatch } from "react-redux";

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

const PersonalDetails = (props) => {
  const userDetails = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  return (
    <Modal
      open={props.open}
      onClose={() => props.setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container sx={style} spacing={2}>
        <Grid item xs={12} sx={{ textAlign: "center", color: "primary.main" }}>
          <Typography variant="h6">Personal Details</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="First Name"
            id="firstName"
            fullWidth
            value={userDetails.firstName}
            onChange={(e) => dispatch(changeFirstName(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Last Name"
            id="lastName"
            fullWidth
            value={userDetails.lastName}
            onChange={(e) => dispatch(changeLastName(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Email"
            id="email"
            fullWidth
            value={userDetails.email}
            onChange={(e) => dispatch(changeEmail(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Phone"
            id="phone"
            type="number"
            fullWidth
            value={userDetails.phone}
            onChange={(e) => dispatch(changePhone(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Address"
            id="address"
            fullWidth
            multiline
            maxRows={2}
            value={userDetails.address}
            onChange={(e) => dispatch(changeAddress(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="About me"
            id="about"
            fullWidth
            multiline
            maxRows={4}
            value={userDetails.about}
            onChange={(e) => dispatch(changeAbout(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default PersonalDetails;
