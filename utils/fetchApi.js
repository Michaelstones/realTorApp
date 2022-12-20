import axios from "axios";

const headers = {
  "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  "X-RapidAPI-Key": "798fa0f23fmsh4fb4dfd1b5fb975p1b1925jsn7d1329878a16",
};
export const baseUrl = "https://bayut.p.rapidapi.com";

export async function fetchApi(url) {
  const { data } = await axios.get(url, { headers });
  return data;
}
