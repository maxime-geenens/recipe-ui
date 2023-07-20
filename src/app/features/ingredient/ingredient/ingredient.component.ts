import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input()
  ingredient!: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

}
