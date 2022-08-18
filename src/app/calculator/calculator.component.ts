import { Component, OnInit } from "@angular/core";
import { CurrencyApiService } from "../services/currency-api.service";
import { ICurrency } from "../models/currency.interface";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HistoryService } from "../services/history.service";
import { ICalculator } from "../models/calculator.interface";

@Component({
  templateUrl: 'calculator.component.html',
  styleUrls: ['calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  currencies: ICurrency[] = [];

  currencyForm!: FormGroup;

  result = 0;

  history: ICalculator[] = [];

  constructor(
    private readonly currencyApiService: CurrencyApiService,
    private readonly formBuilder: FormBuilder,
    private readonly historyService: HistoryService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.getCurrencies();
    this.getHistory();
  }

  private buildForm(): void {
    this.currencyForm = this.formBuilder.group({
      from: '',
      to: '',
      amount: 1
    });
  }

  /**
   * Event for getting result
   *
   */
  submit(): void {
    const formValue = this.currencyForm.value;
    if(!!formValue.from && !!formValue.to && !!formValue.amount) {
      this.result = ((Number(formValue.amount) * Number(formValue.to.rate)) / formValue.from.rate);

      this.history.unshift({from: formValue.from, amount: formValue.amount, to: formValue.to, time: Date.now(), result: this.result});
      this.saveHistory(this.history);
    }
  }

  /**
   * Event for getting cc value from form field value
   *
   * @param type
   */
  getFlag(type: 'from' | 'to'): string {
    if(this.currencyForm && this.currencyForm?.value[type]) {
      const value = this.currencyForm.value[type];
      return !!value ? value.cc : '';
    }

    return '';
  }

  /**
   * Event for saving new items as history
   *
   * @param items as ICalculator[]
   */
  private saveHistory(items: ICalculator[]) {
   this.historyService.saveHistory(items);
  }

  /**
   * Event for getting saved hostory
   *
   */
  private getHistory() {
    this.history = this.historyService.getHistory();
  }


  /**
   * Event for getting currencies from API
   *
   */
  private getCurrencies(): void {
    this.currencyApiService.getCurrencies().subscribe(val => this.currencies = val);
  }
}
