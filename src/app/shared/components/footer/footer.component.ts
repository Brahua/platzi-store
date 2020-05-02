import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailInput: FormControl;

  constructor() {
    this.emailInput = new FormControl(
      '',
      [
        Validators.maxLength(8),
        Validators.minLength(4),
        Validators.required
      ]
    );
    /*this.emailInput.valueChanges.subscribe(
      value => {
        console.log(value);
        console.log(this.emailInput.valid);
      }
    );*/
  }

  ngOnInit() {
  }

  registerMail() {
    if (this.emailInput.valid) {
      console.log('Email enviado');
    }
  }
}
