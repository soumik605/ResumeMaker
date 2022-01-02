import {
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Education from "../OtherItems/Education";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Skills from "../OtherItems/Skills";

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

const EducationService = (props) => {
  const [activeField, setActiveField] = useState(0);

  const changeField = (index) => {
    setActiveField(index);
  };

  return (
    <Modal
      open={props.open}
      onClose={() => props.setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container sx={style} spacing={0}>
        <Grid item xs={12} md={3}>
          <ButtonGroup
            aria-label="vertical contained button group"
            variant="text"
            sx={{
              display: "flex",
              flexDirection: {
                xs: "row",
                md: "column",
              },
              margin : {
                xs : "8px 0",
                md : "0 8px",
              }
            }}
          >
            <Button
              key="one"
              variant={activeField === 0 ? "contained" : "text"}
              onClick={() => changeField(0)}
            >
              Education
            </Button>

            <Button
              key="two"
              variant={activeField === 1 ? "contained" : "text"}
              onClick={() => changeField(1)}
            >
              Skills
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs={12} md={9}>
          {activeField === 0 && <Education />}
          {activeField === 1 && <Skills />}
        </Grid>
      </Grid>
    </Modal>
  );
};

export default EducationService;
