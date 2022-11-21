import axios from "./axios";

export default async function (email, password) {
  try {
    const response = await axios.post("/auth/login", { email, password });
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    alert("failed to login");
  }
}
