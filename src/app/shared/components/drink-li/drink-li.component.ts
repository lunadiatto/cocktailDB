import { Component, Input, OnInit, Output } from '@angular/core';
import { CocktailByName } from 'src/app/core/models';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drink-li',
  templateUrl: './drink-li.component.html',
  styleUrls: ['./drink-li.component.scss'],
})
export class DrinkLiComponent implements OnInit {
  @Input() drink: CocktailByName = {
    id: '',
    name: '',
    category: '',
    image: '',
    selected: false,
  };
  @Input() showButton: boolean = false;
  @Input() numOfDrinks: number = 0;

  @Output() handleEvent: EventEmitter<boolean> = new EventEmitter(); //evento!!!
  constructor() {}

  ngOnInit(): void {}

  handleCart = (handler: boolean) => {
    this.handleEvent.emit(handler);
  };
}
