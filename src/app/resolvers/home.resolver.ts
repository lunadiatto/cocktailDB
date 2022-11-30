import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/_services/api.service';
import { RestApidrinksByName } from '../core/models';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<RestApidrinksByName[]> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<RestApidrinksByName[]> {
    return this.apiService.searchCocktailByFirstLetter(route.paramMap.get('letter')!);
  }
}
