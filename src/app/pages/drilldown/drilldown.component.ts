import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';


@Component({
  selector: 'app-drilldown',
  templateUrl: './drilldown.component.html'
})
export class DrilldownComponent implements OnInit {

  data = [
    {
      slno: '001',
      product: 'Product 1',
      description: 'Incentivize platforms Incentivize user-contributed...',
      quantity: 15,
      total: '$100'
    },
    {
      slno: '002',
      product: 'Product 2',
      description: 'Enable innovate leverage tagclouds Incentivize platforms.',
      quantity: 15,
      total: '$100'
    },
    {
      slno: '003',
      product: 'Product 3',
      description: 'E-business web services Enable innovate leverage tagclouds...',
      quantity: 15,
      total: '$100'
    },
    {
      slno: '004',
      product: 'Product 4',
      description: 'Enable innovate leverage tag...',
      quantity: 15,
      total: '$100'
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['dashboard']);
  }

  onExportClick() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true
    };

    new Angular2Csv(this.data, 'Report', options);

  }
}
