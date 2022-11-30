import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { DetailsByIdResolver } from './resolvers/details.resolver';
import { HomeResolver } from './resolvers/home.resolver';
import { IngredientResolver } from './resolvers/ingredient.resolver';

const routes: Routes = [
  { path: 'home', redirectTo: '/home/A', pathMatch: 'full' },
  {
    path: 'home/:letter',
    component: HomeComponent,
    resolve: {
      drinks: HomeResolver,
    },
  },
  { path: 'search', component: SearchComponent },
  { path: 'search/:search', component: SearchComponent },
  {
    path: 'drink/:idDrink',
    component: DetailsComponent,
    resolve: {
      drink: DetailsByIdResolver,
    },
  },
  {
    path: 'ingredient/:nameIngredient',
    component: IngredientComponent,
    resolve: {
      drink: IngredientResolver,
    },
  },
  { path: '', redirectTo: 'home/A', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
