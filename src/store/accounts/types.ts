export interface AccountSliceState {
  personalInfo: {
    name?: string;
    email?: string;
    password?: string;
    confirm_password?: string;
    verficationCode?: string;
    oldPassword?: string;
  };

  personalInfoErrors: {
    name: string;
    email?: string;
    password: string;
    confirm_password: string;
    verficationCode: string;
    oldPassword: string;
  };

  updatePersonalInfo: (key: string, value: string) => void;
  updateErrors: (key: string, value: string) => void;

  validateEmail: () => boolean;
  validatePassword: () => boolean;

  resetpersonalInfoErrors: () => void;
  resetpersonalInfo: () => void;
}
