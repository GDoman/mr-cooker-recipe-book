import { Component, OnInit } from '@angular/core';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem(nameInput: string, amountInput: number) {
    this.shoppingListService.addIngredient({
      name: nameInput,
      amount: amountInput,
    });
  }
}
