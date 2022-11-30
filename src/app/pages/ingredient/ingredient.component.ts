import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailByName } from 'src/app/core/models';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ingredientImage: string = '';
  sameIngrDrinks: CocktailByName[] = [];
  clickedIngr: string = '';

  ngOnInit(): void {
    this.clickedIngr = this.route.snapshot.paramMap.get('nameIngredient')!;
    this.route.data.subscribe(({ drink }) => {
      this.sameIngrDrinks = drink;
      this.ingredientImage = `https://www.thecocktaildb.com/images/ingredients/${this.clickedIngr}-Medium.png`;
    });
  }
}
