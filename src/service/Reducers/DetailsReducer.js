import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "aa",
  lastName: "bb",
  photo: "",
  //gender: "male",
  email: "",
  phone: "",
  address: "",
  githubLink: "",
  facebookLink: "",
  instagramLink: "",
  linkdinLink: "",
  /*  DOB: {
    day: "1",
    month: "1",
    year: "2000",
  }, */
  position: "",
  //country: "india",
  about:
    "",
  skills: [],
  education: [],
  //internships: [],
  //jobs: [],
  // hobbies: [],
  //communicationLanguages: [],
  //otherSkills: [],
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    changeFirstName: (state, action) => {
      return {
        ...state,
        firstName: action.payload.trim(),
      };
    },
    changeLastName: (state, action) => {
      return {
        ...state,
        lastName: action.payload.trim(),
      };
    },
    changeEmail: (state, action) => {
      return {
        ...state,
        email: action.payload.trim(),
      };
    },
    changePhone: (state, action) => {
      return {
        ...state,
        phone: action.payload.trim(),
      };
    },
    changeAddress: (state, action) => {
      return {
        ...state,
        address: action.payload.trim(),
      };
    },
    changeAbout: (state, action) => {
      return {
        ...state,
        about: action.payload.trim(),
      };
    },
    changeFbLink: (state, action) => {
      return {
        ...state,
        facebookLink: action.payload.trim(),
      };
    },
    changeGithubLink: (state, action) => {
      return {
        ...state,
        githubLink: action.payload.trim(),
      };
    },
    changeInstaLink: (state, action) => {
      return {
        ...state,
        instagramLink: action.payload.trim(),
      };
    },
    changeLinkdinLink: (state, action) => {
      return {
        ...state,
        linkdinLink: action.payload.trim(),
      };
    },


  },
});

export const {
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhone,
  changeAddress,
  changeAbout,
  changeFbLink,
  changeGithubLink,
  changeInstaLink,
  changeLinkdinLink,
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
