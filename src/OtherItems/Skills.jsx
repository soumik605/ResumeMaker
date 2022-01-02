import {
  Button,
  Chip,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PercentIcon from "@mui/icons-material/Percent";
import React from "react";

const Skills = () => {
  const handleDelete = () => {};
  const handleSubmit = () => {};

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
        }}
        component="ul"
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <Chip
            color="info"
            onDelete={handleDelete}
            label={"data.label"}
            sx={{ m: 1 }}
          />
        ))}
      </Box>

      <Typography
        variant="h6"
        sx={{ color: "primary.main", textAlign: "right" }}
      >
       Add new skill
      </Typography>

      <Box
        sx={{ mt: 2, display: "flex" }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          label="Add Skill"
          id="skill"
          fullWidth
          size="small"
          sx={{ ml: 1 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NoteAddIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          required
          label="Skill percentage"
          id="skillper"
          fullWidth
          type="number"
          size="small"
          min="10"
          max="100"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PercentIcon />
              </InputAdornment>
            ),
          }}
          sx={{ ml: 1 }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ height: "min-content", alignItems: "center", ml: 2 }}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default Skills;
