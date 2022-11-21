import { axiosPrivate } from "./axios";

export default async () => {
  const response = await axiosPrivate.get("/api/users/my-images");
  return response.data;
};
