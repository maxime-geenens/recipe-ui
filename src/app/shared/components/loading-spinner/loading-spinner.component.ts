import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css'],
  inputs: ['loading'],
})
export class LoadingSpinnerComponent implements OnInit {
  loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
