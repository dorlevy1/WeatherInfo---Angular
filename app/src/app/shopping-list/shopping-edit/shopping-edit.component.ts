import { Component, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subcription: Subscription;
  editMode = false;
  editedItem: Ingredient;
  itemIndex: number;
  @Input() ingredients: Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subcription = this.slService.startedEditing.subscribe((index: number) => {
      this.itemIndex = index
      this.editMode = true;
      this.editedItem = this.slService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }
  onAddItem(form: NgForm) {
    {
      const value = form.value;
      const newIngredient = new Ingredient(value.name, value.amount);
      if (this.editMode) {
        this.slService.updateIngredient(this.itemIndex, newIngredient)
      } else {
        this.slService.addIngredient(newIngredient);
      }
      form.reset();
      this.editMode = false;
    }
  }
  clearForm() {
    this.slForm.reset();
    this.editMode = false;
  }
  deleteForm() {

    this.slService.deleteIngredient(this.itemIndex);
    this.clearForm();
  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
