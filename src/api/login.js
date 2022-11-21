import { axiosPrivate } from "./axios";

export default async function (email, password) {
  try {
    const response = await axiosPrivate.post("/auth/login", {
      email,
      password,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    alert("failed to login");
  }
}
