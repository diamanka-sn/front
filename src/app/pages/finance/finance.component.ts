import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
// import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { FinanceService } from '../../service/finance.service';




// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "./variables/charts";
@Component({
  selector: 'ngx-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./argon.scss']
})

export class FinanceComponent implements OnInit, AfterViewInit, OnDestroy {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
 

  themeSubscription: any;
  constructor(private theme: NbThemeService,private fn:FinanceService) { }
  
  ngAfterViewInit(): void {
      this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
        this.ngOnInit();
      })
    }
  
  ngOnInit() {
        this.datasets = [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ];
        this.data = this.datasets[0];


        var chartOrders = document.getElementById('chart-orders');

        parseOptions(Chart, chartOptions());


        var ordersChart = new Chart(chartOrders, {
          type: 'bar',
          options: chartExample2.options,
          data: chartExample2.data
        });

        var chartSales = document.getElementById('chart-sales');

        this.salesChart = new Chart(chartSales, {
          type: 'line',
          options: chartExample1.options,
          data: chartExample1.data
        });
    
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}

