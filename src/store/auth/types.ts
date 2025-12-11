

export interface AuthSliceTypes {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
   
}
 
export type AuthSliceState=AuthSliceTypes;