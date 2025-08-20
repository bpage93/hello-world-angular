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
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet, RouterModule } from '@angular/router';


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
    MatToolbar,
    CommonModule,
    MatToolbarModule,
    RouterOutlet,
    RouterModule
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  private router = inject(Router);

  routeNewName = 'New Name';

  myHeroes = ['Wonderful Woman', 'Batty Boy', 'Captain Cats'];

  // Bound to the input
  routeName = 'about';

  currentItem = 'Television';
  

  disabled: Signal<boolean> = signal(false);

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
