import axios from "axios";
import { BASE_URL } from "../BASE_URL";

type GetProps = {
  amount: number;
  category: string;
  difficulty: string;
};

export async function get({ amount, category, difficulty }: GetProps) {
  const response = await axios.get(
    `${BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}`
  );
  return response.data;
}
