import type { StateCreator } from "zustand";
import type { AccountSliceState } from "./types";

export const createAccountSlice: StateCreator<AccountSliceState> = (
  set,
  get
) => ({
  personalInfo: {
    name: "",
    email: "",
    password: "",
    verficationCode: "",
    confirm_password: "",
    oldPassword: "",
  },

  personalInfoErrors: {
    name: "",
    email: "",
    password: "",
    verficationCode: "",
    confirm_password: "",
    oldPassword: "",
  },

  updateErrors: (key, value) =>
    set((state) => ({
      personalInfoErrors: {
        ...state.personalInfoErrors,
        [key]: value,
      },
    })),

  updatePersonalInfo: (key, value) =>
    set((state) => ({
      personalInfo: {
        ...state.personalInfo,
        [key]: value,
      },
      personalInfoErrors: {
        ...state.personalInfoErrors,
        [key]: "",
      },
    })),

 
  // EMAIL VALIDATION
 
  validateEmail: () => {
    const { email } = get().personalInfo;

    if (!email) {
      set((state) => ({
        personalInfoErrors: {
          ...state.personalInfoErrors,
          email: "Email is required",
        },
      }));
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      set((state) => ({
        personalInfoErrors: {
          ...state.personalInfoErrors,
          email: "Enter a valid email address",
        },
      }));
      return false;
    }

    set((state) => ({
      personalInfoErrors: {
        ...state.personalInfoErrors,
        email: "",
      },
    }));

    return true;
  },

 
  // PASSWORD VALIDATION
 
  validatePassword: () => {
    const { password, confirm_password } = get().personalInfo;

    if (!password) {
      set((state) => ({
        personalInfoErrors: {
          ...state.personalInfoErrors,
          password: "Password is required",
        },
      }));
      return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!passwordRegex.test(password)) {
      set((state) => ({
        personalInfoErrors: {
          ...state.personalInfoErrors,
          password:
            "Password must be 8+ chars, include uppercase, lowercase & number",
        },
      }));
      return false;
    }

    if (!confirm_password) {
      set((state) => ({
        personalInfoErrors: {
          ...state.personalInfoErrors,
          confirm_password: "Confirm Password is required",
        },
      }));
      return false;
    }

    if (password !== confirm_password) {
      set((state) => ({
        personalInfoErrors: {
          ...state.personalInfoErrors,
          confirm_password: "Passwords do not match",
        },
      }));
      return false;
    }

    set((state) => ({
      personalInfoErrors: {
        ...state.personalInfoErrors,
        password: "",
        confirm_password: "",
      },
    }));

    return true;
  },

  resetpersonalInfoErrors: () =>
    set({
      personalInfoErrors: {
        name: "",
        email: "",
        password: "",
        verficationCode: "",
        confirm_password: "",
        oldPassword: "",
      },
    }),

  resetpersonalInfo: () =>
    set({
      personalInfo: {
        name: "",
        email: "",
        password: "",
        verficationCode: "",
        confirm_password: "",
        oldPassword:""
      },
    }),
});
