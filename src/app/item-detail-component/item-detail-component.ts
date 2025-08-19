import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-item-detail',
  imports: [CommonModule],
  templateUrl: './item-detail-component.html',
  standalone: true,
})
export class ItemDetailComponent {
  @Output() itemAddEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    console.log('item added');
    this.itemAddEvent.emit(value);
  }
}
