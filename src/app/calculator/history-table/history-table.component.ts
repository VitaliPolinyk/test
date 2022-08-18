import { Component, Input } from "@angular/core";
import { ICalculator } from "../../models/calculator.interface";

@Component({
  selector: "app-history-table",
  templateUrl: 'history-table.component.html',
  styleUrls: ['history-table.component.scss']
})
export class HistoryTableComponent {
  @Input() history: ICalculator[] = [];
}
