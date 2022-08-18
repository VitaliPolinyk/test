import { NgModule } from "@angular/core";
import { CalculatorComponent } from "./calculator.component";
import { RouterModule, Routes } from "@angular/router";
import { CurrencyPipe, DatePipe, LowerCasePipe, NgForOf, SlicePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HistoryTableComponent } from "./history-table/history-table.component";

const routes: Routes = [
  {
    path: '',
    component: CalculatorComponent
  }
];

@NgModule({
  declarations: [CalculatorComponent, HistoryTableComponent],
  imports: [
    RouterModule.forChild(routes),
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    CurrencyPipe,
    LowerCasePipe,
    DatePipe,
    SlicePipe
  ],
  providers: []
})
export class CalculatorModule {}
