import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupDto } from 'src/app/dtos/signup.dto';
import { Signup } from 'src/app/models/signup';
import { MyAccountService } from 'src/app/service/myaccount.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUp: Signup;
  dto: SignupDto = new SignupDto();
  signUpForm: FormGroup;


  constructor(
    private service: MyAccountService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.signUp = Object.assign({}, this.signUpForm.value);
      this.dto = this.dto.to(this.signUp);
      this.service.signup(this.dto).subscribe(response => {
        this.signUpForm.reset();
        this.route.navigateByUrl('/home');
        console.log(response);
      }, error => {
        console.log(error);
      });
    }
  }

}
