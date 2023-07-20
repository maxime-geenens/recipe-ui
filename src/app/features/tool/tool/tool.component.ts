import { Component, Input, OnInit } from '@angular/core';
import { Tool } from 'src/app/models/tool.model';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  @Input()
  tool!: Tool;

  constructor() { }

  ngOnInit(): void {
  }

}
