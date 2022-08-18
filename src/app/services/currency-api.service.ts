import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICurrency } from "../models/currency.interface";

@Injectable({providedIn: "root"})
export class CurrencyApiService {
  constructor(private readonly httpClient: HttpClient) {}

  getCurrencies(): Observable<ICurrency[]> {
    return this.httpClient.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json') as Observable<ICurrency[]>;
  }
}
