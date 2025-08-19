// app.ts
import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Signal } from '@angular/core';
// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ItemDetailComponent } from './item-detail-component/item-detail-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // RouterLink,
    FormsModule, // 👈 Needed for [(ngModel)]
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    ItemDetailComponent,
    CommonModule,
  ],
  templateUrl: './app.html',
})
export class AppComponent {
  private router = inject(Router);

  routeNewName = 'New Name';

  // Bound to the input
  routeName = 'about';

  currentItem = 'Television';
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

  disabled: Signal<boolean> = signal(false);

  myHeroes = ['Wonderful Woman', 'Batty Boy', 'Captain Cats'];

  // Navigates to whatever is typed in routeName
  goToRoute() {
    if (this.routeName.trim()) {
      this.router.navigateByUrl('/' + this.routeName.trim());
    }
  }

  goNewName() {
    if (this.routeNewName.trim()) {
      this.router.navigateByUrl('/' + this.routeNewName.trim());
    }
  }
}
