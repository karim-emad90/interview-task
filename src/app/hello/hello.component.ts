import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css',
})
export class HelloComponent {
  enteredName: string = '';

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  userNames = ['Ahmed', 'Mohamed', 'Hesham', 'Omnya'];

  onDelete(index: number) {
    this.userNames.splice(index, 1);
  }
}
