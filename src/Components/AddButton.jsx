import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PersonalDetails from "../Models/PersonalDetails";
import SocialMedia from "../Models/SocialMedia";
import EducationService from "../Models/EducationService";
import Other from "../Models/Other";

const AddButton = () => {
  const [openPDetails, setOpenPDetails] = useState(false);
  const [openSDetails, setOpenSDetails] = useState(false);
  const [openEDetails, setOpenEDetails] = useState(false);
  const [openODetails, setOpenODetails] = useState(false);

  return (
    <>
      <PersonalDetails open={openPDetails} setOpen={setOpenPDetails} />
      <SocialMedia open={openSDetails} setOpen={setOpenSDetails} />
      <EducationService open={openEDetails} setOpen={setOpenEDetails} />
      <Other open={openODetails} setOpen={setOpenODetails} />

      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "static", bottom: 0, right: 0, width: "fit-content" }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        <SpeedDialAction
          icon={<PersonIcon />}
          tooltipTitle="Personal Details"
          onClick={() => setOpenPDetails(true)}
        />

        <SpeedDialAction
          icon={<PublicIcon />}
          tooltipTitle="Social Media"
          onClick={() => setOpenSDetails(true)}
        />

        <SpeedDialAction
          icon={<AssuredWorkloadIcon />}
          tooltipTitle="Education & Services"
          onClick={() => setOpenEDetails(true)}
        />

        <SpeedDialAction
          icon={<SportsEsportsIcon />}
          tooltipTitle="Other"
          onClick={() => setOpenODetails(true)}
        />
      </SpeedDial>
    </>
  );
};

export default AddButton;
