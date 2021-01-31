import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPasswordDto } from 'src/app/dtos/forgetpassword.dto';
import { ForgetPassword } from 'src/app/models/forgetpassword';
import { MyAccountService } from 'src/app/service/myaccount.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  password: ForgetPassword;
  dto: ForgetPasswordDto = new ForgetPasswordDto();
  passwordForm: FormGroup;

  constructor(
    private service: MyAccountService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.passwordForm = this.fb.group({
      email: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      this.password = Object.assign({}, this.passwordForm.value);
      this.dto = this.dto.to(this.password);
      this.service.forgetPassword(this.dto).subscribe(response => {
        this.passwordForm.reset();
        this.route.navigateByUrl('/home');
        console.log(response);
      }, error => {
        console.log(error);
      });
    }
  }
}
