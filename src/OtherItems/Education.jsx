import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import {
  Button,
  InputAdornment,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
} from "@mui/material";

const Education = () => {
  const handleSubmit = () => {};

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ color: "primary.main", textAlign: "right" }}
      >
        My Education
      </Typography>
      {[1, 2, 3].map((item, index) => (
        <Accordion key={item}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion {index + 1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box component="form"  onSubmit={handleSubmit} >
        <Grid container sx={{ mt: 2 }} spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{ color: "primary.main", textAlign: "right" }}
            >
              Add new education
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Add Institute"
              id="institute"
              fullWidth
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Degree"
              id="degree"
              fullWidth
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              required
              label="Start Year"
              id="startYear"
              fullWidth
              size="small"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              required
              label="Final Year"
              id="finalYear"
              fullWidth
              size="small"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
            type="submit"
              variant="contained"
              sx={{ height: "min-content", alignItems: "center", ml: 2 }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Education;
