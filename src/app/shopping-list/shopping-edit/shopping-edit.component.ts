import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem(nameInput: string, amountInput: number) {
    this.ingredientAdded.emit({ name: nameInput, amount: amountInput });
  }
}
