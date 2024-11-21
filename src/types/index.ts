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
