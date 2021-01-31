import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupDto } from 'src/app/dtos/signup.dto';
import { Signup } from 'src/app/models/signup';
import { MyAccountService } from 'src/app/service/myaccount.service';
import { ToastarService } from 'src/app/service/toastar.service';

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
    private toastr: ToastarService,
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
        this.toastr.success('signup successfully');
        this.route.navigateByUrl('/my-account/account');
        console.log(response);
      }, error => {
        this.toastr.error('signup failed');
      });
    }
  }

}
