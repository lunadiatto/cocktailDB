import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_services/api.service';
import { CocktailByName, RestApidrinksByName } from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class IngredientResolver implements Resolve<CocktailByName[]> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<CocktailByName[]> {
    return this.apiService.getDrinksOfSameIngr(
      route.paramMap.get('nameIngredient')!
    );
  }
}
