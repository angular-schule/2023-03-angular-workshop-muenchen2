import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    description: new FormControl('', {
      nonNullable: true
    })
  });

  c = this.bookForm.controls;

  constructor() {
    this.bookForm.statusChanges.subscribe(formControlStatus => {
      if (formControlStatus === 'INVALID') {
        navigator.vibrate([500]);
        console.log('Es hat vibriert!')
      }
    })
  }

  submitForm() {
    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    }

    // 1. Erstelle eine Event mit dem namen 'create'
    // 2. Versende das neue Book per Event
    // 3. Subscribe dich auf das Event im Dashboard
    // 4. Füge das Buch dem Array hinzu

    this.bookForm.reset();
  }

  hasError(control: FormControl): boolean {
    return control.touched && control.invalid;
  }
}
