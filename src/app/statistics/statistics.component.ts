import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dateRange = []; // [ new Date(), addDays(new Date(), 3) ];

  graphTypeSelectData = [ 'Histrogram', 'Bar Chart', 'Pie Chart' ];
  graphTypeSelectChange(value: string): void {

  }

  filterByCancerSelectData = [ 'All', 'Breast Cancer', 'Leukemia' ];
  filterByCancerSelected = this.filterByCancerSelectData[1];
  filterByCancerSelectChange(value: string): void {
    this.filterByCancerSelected = value;

  }

  filterByPatientSelectData = [ 'All', 'Age', 'Gender' ];
  filterByPatientSelectChange(value: string): void {

  }

  filterByDoctorSelectData = [ 'All', 'Breast Cancer', 'Leukemia' ];
  filterByDoctorSelectChange(value: string): void {

  }

  onDateChange(result: Date): void {
    console.log('onDelayUploadDateTimePickerChange: ', result);
  }


}
