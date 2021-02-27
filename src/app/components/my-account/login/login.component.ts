import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginDto } from 'src/app/dtos/login.dto';
import { Login } from 'src/app/models/login';
import { MyAccountService } from 'src/app/service/myaccount.service';
import { ToastarService } from 'src/app/service/toastar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;
  dto: LoginDto = new LoginDto();
  loginForm: FormGroup;

  constructor(
    private service: MyAccountService,
    private fb: FormBuilder,
    private toastr: ToastarService,
    private route: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login = Object.assign({}, this.loginForm.value);
      this.dto = this.dto.to(this.login);
      this.spinner.show();
      this.service.login(this.dto).subscribe(response => {
        this.loginForm.reset();
        this.toastr.success('login successfully');
        this.spinner.hide();
        this.route.navigateByUrl('/my-profile/profile');
      }, error => {
        this.toastr.error('login failed');
      });
    }
  }

}
