export type TUser = {
  name: string;
  email: string;
  role: "admin";
  phone: string;
};

export type TQueryParam = {
  name: string;
  value: number | string | React.Key;
};
export type TTechnology = {
  value: string;
  label: string;
};

export type TProject = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  live: string;
  frontendCode: string;
  backendCode: string;
  technology: TTechnology[];
  focused: string;
};
