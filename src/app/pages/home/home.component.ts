import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  drinks: any[] = []; //le variabili di classe sono prima del costruttore, qua sono sicura che drinks esiste quando è stato creato il componente
  //meglio sopra perchè così il costruttore è sempre vuoto (se c'è qualcosa dentro è perchè è fondamentale, usually never)
  searchedDrinks: any[] = [];
  randomDrink: any = {};
  numOfDrinks: number | null = 0;

  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  active: string = 'A';

  handleResByLetter = (letter: string) => {
    this.route.data.subscribe(
      (drinks) => {
        this.drinks = drinks['drinks'];
        if ( drinks['drinks'].length !== 0) {
          this.numOfDrinks =  drinks['drinks'].length;
        }
        this.drinks.sort((a, b) =>
          a.strDrink.localeCompare(b.strDrink, 'en', { sensitivity: 'base' })
        );
      }
    );
    this.active = letter;
  };

  randomCocktail = () => {
    this.ApiService.randomGet().subscribe((response: any) => {
      this.randomDrink = response.drinks[0];
    });
  };

  constructor(private ApiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeLett = this.route.snapshot.paramMap.get('letter')!;
    this.handleResByLetter(routeLett);
    this.randomCocktail();
  }
}
