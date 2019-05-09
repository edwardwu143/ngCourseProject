import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe ', 'Testing', 
  'https://cdn.shopify.com/s/files/1/0662/0785/products/recipe_cover_grande.jpg?v=1493774901'),
  new Recipe('Another Test', 'Testing 1 2 3', 
  'https://cdn.shopify.com/s/files/1/0662/0785/products/recipe_cover_grande.jpg?v=1493774901')];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
