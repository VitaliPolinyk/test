import { Injectable } from "@angular/core";
import { ICalculator } from "../models/calculator.interface";

export enum HistoryKeys {
  storage = "storage"
}

@Injectable({providedIn: "root"})
export class HistoryService {
  saveHistory(items: ICalculator[]) {
    localStorage.setItem(HistoryKeys.storage, JSON.stringify(items));
  }

  getHistory(): ICalculator[]  {
    return JSON.parse(localStorage.getItem(HistoryKeys.storage) || '') || [];
  }
}
