import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-form',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {

}
