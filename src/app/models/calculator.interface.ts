import { ICurrency } from "./currency.interface";

export interface ICalculator {
  from: ICurrency;
  to: ICurrency;
  amount: number;
  time?: string | number;
  result?: number;
}
