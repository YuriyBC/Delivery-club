import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  firstName = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  ngOnInit(): void {
  }

  onSubmit ($event: any) {
    console.log('sdcscd')
  }
}
