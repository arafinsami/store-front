import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BillingDto } from 'src/app/dtos/billing.dto';
import { PaymentDto } from 'src/app/dtos/payment.dto';
import { Billing } from 'src/app/models/billing';
import { Payment } from 'src/app/models/payment';
import { MyProfileService } from 'src/app/service/my-profile.service';
import { MyAccountService } from 'src/app/service/myaccount.service';
import { ToastarService } from 'src/app/service/toastar.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: Payment;
  billing: Billing;
  billingDto: BillingDto = new BillingDto();
  paymentDto: PaymentDto = new PaymentDto();
  paymentForm: FormGroup;
  selectedBillingTab = 0;


  constructor(
    private myProfileService: MyProfileService,
    private fb: FormBuilder,
    private toastar: ToastarService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.paymentForm = this.fb.group({
      type          : ['', [Validators.required]],
      cardName      : ['', [Validators.required]],
      cardNumber    : ['', [Validators.required]],
      expiryMonth   : ['', [Validators.required]],
      expiryYear    : ['', [Validators.required]],
      cvc           : ['', [Validators.required]],
      holderName    : ['', [Validators.required]],
      defaultPayment: ['0'],
      billingName   : ['', [Validators.required]],
      billingStreet1: ['', [Validators.required]],
      billingStreet2: [''],
      billingCity   : ['', [Validators.required]],
      billingState  : ['', [Validators.required]],
      billingCountry: ['', [Validators.required]],
      billingZipcode: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.payment = Object.assign({}, this.paymentForm.value);
      this.paymentDto = this.paymentDto.to(this.payment);
      this.myProfileService.newPayment(this.paymentDto).subscribe(response => {
        this.toastar.success('payment added successfully');
        this.route.navigateByUrl('/my-profile/profile');
        console.log(response);
      }, error => {
        this.toastar.error('payment addition failed');
      });
    }
  }

}
