import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailByName, DrinkById, homeInputs } from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  drinks: CocktailByName[] = [];
  cartList: CocktailByName[] = [];
  //TODO: interface ingredients
  ingredients: any[] = [];
 
  numOfDrinks: number | null = 0;

  jsonIn: homeInputs = {
    inputDrink: '',
    inputIngr: '',
  };

  handleSearchDrinksByIngr = () => {
    this.apiService
      .getDrinksOfSameIngr(this.jsonIn.inputIngr)
      .subscribe((response: any) => {
        this.drinks = response;
       
        console.log(this.drinks);
        console.log(this.drinks[0].image);
      });
  };

  handleSearchDrinksByName = () => {
    this.apiService.getDrinksByName(this.jsonIn.inputDrink).subscribe((res) => {
      this.drinks = res; //casting
      console.log(this.drinks);
      if (this.drinks.length !== 0) {
        this.numOfDrinks = res.length;
      }
      this.drinks.forEach((drink) => this.checkTheList(drink));
      /*   localStorage.setItem('search', this.jsonIn.searchInput); */
    });
  };

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    /*    const search = localStorage.getItem('search');
    if (!!search) {
      this.jsonIn.searchInput = search;
      this.handleSearchDrinksByName();
    } */

    this.route.paramMap.subscribe((res) => {
      const search = res.get('search');
      if (!!search) {
        this.jsonIn.inputDrink = search;
        this.handleSearchDrinksByName();
      }
    });

    this.apiService.getListOfIngr().subscribe((res: any) => {
      this.ingredients = res.drinks;
      this.ingredients.sort((a, b) =>
        a.strIngredient1.localeCompare(b.strIngredient1)
      );
    });
  }

  handleCartParent = (drink: CocktailByName, $event: boolean) => {
    if ($event) {
      if (this.cartList.length >= 5) {
        alert('Sorry! You can only add 5 drinks to the cart!');
      } else {
        this.cartList.push(drink);
      }
    } else {
      this.cartList = this.cartList.filter((el) => el.name !== drink.name);
    }
    drink.selected = $event;
  };

  checkTheList = (drink: CocktailByName) => {
    for (let i = 0; i <= this.cartList.length; i++) {
      if (drink.id === this.cartList[i].id) {
        drink.selected = true;
      }
    }
  };
}
