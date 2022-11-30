import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkById } from 'src/app/core/models';
import { ApiService } from 'src/app/_services/api.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  drink!: DrinkById;
  language: string = 'EN';
  instructionsLang: string[] = [];

  @BlockUI() blockUI!: NgBlockUI;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ drink }) => {
      this.drink = drink;
      console.log(drink);
      let instructions = Object.keys(this.drink.instructions);
      instructions.forEach((instruction) => {
        if (this.drink.instructions[instruction]) {
          this.instructionsLang.push(instruction);
          console.log(this.instructionsLang);
        }
      });
    });
  }
}
