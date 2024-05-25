import axios from "axios";
import { BASE_URL } from "../BASE_URL";

export async function get( amount:number, category:string, difficulty:string) {
  const response = await axios.get(
    `${BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}`
  );
  return response.data;
}
