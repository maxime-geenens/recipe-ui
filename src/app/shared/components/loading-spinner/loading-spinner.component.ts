import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wb-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css'],
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
