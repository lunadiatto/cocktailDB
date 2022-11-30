import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { sortingDrinkByName } from '../core/logicFunctions';
import {
  RestApiCocktailByName,
  RestApidrinksByName,
  CocktailByName,
  RestApiCocktailById,
  RestApiDrinkById,
  DrinkById,
} from '../core/models';
import { handleMapping } from '../core/logicFunctions';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getDrinksByName = (query: string) => {
    return this.httpClient
      .get<RestApiCocktailByName>(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}` //mapping che da un observable
      )
      .pipe(
        map((res: RestApiCocktailByName) => {
          const drinkAPI: RestApidrinksByName[] = sortingDrinkByName(
            res.drinks
          );
          const drink: CocktailByName[] = drinkAPI.map(
            (el: RestApidrinksByName) => ({
              //mapping per la UI
              id: el.idDrink,
              name: el.strDrink,
              category: el.strCategory,
              image: el.strDrinkThumb,
              selected: false,
            })
          );
          return drink;
        })
      );
  };

  getDrinksOfSameIngr(nameIngr: string) {
    return this.httpClient
      .get<RestApiCocktailByName>(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nameIngr}`
      )
      .pipe(
        map((res: any) => {
          const drinkAPI: RestApidrinksByName[] = sortingDrinkByName(
            res.drinks
          );
          const drink: CocktailByName[] = drinkAPI.map(
            (el: RestApidrinksByName) => ({
              //mapping per la UI
              id: el.idDrink,
              name: el.strDrink,
              category: el.strCategory,
              image: el.strDrinkThumb,
              selected: false,
            })
          );
          return drink;
        })
      );
  }

  getCocktailByID = (id: string) => {
    return this.httpClient
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .pipe(
        map((res: any) => {
          const resDrink: DrinkById = res.drinks[0] as DrinkById;
          const drink: DrinkById = handleMapping(resDrink);
          return drink;
        })
      );
  };

  randomGet() {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
  }

  getListOfIngr() {
    return this.httpClient.get(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
    );
  }

  searchCocktailByFirstLetter(firstLetter: string | null) {
    return this.httpClient
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`
      )
      .pipe(
        map((res: any) => {
          const drinks: RestApidrinksByName[] =
            res.drinks as RestApidrinksByName[];
          return drinks;
        })
      );
  }
}
