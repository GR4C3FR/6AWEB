import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Text Interpolation
  message = 'Welcome to Angular Data Binding!';
  description = 'This demonstrates various binding techniques';

  // Property Binding
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  altText = 'Angular Logo';
  w = 200;
  h = 200;

  // Style Binding
  textColor = 'red';

  // Class Binding
  isHighlighted = true;

  // Two-Way Data Binding
  yourName = '';

  // Event Binding
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  // Additional Examples
  studentName = 'John Doe';
  score = 85;

  imageUrl2 = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isDisabled = false;

  isPassing = true;

  boxColor = 'purple';
  boxSize = '150px';
}
