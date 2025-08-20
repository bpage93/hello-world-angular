import { Component } from '@angular/core';
import { ItemDetailComponent } from '../item-detail-component/item-detail-component';

@Component({
  selector: 'app-hero-list',
  imports: [ItemDetailComponent],
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {
  items = ['apple ', 'banana', 'orange'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  deleteItems() {
    this.items = [];
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
