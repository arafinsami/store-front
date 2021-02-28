import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PaymentDto } from 'src/app/dtos/payment.dto';
import { Payment } from 'src/app/models/payment';
import { MyProfileService } from 'src/app/service/my-profile.service';
import { ToastarService } from 'src/app/service/toastar.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: Payment;
  paymentDto: PaymentDto = new PaymentDto();
  paymentDtos: PaymentDto[];
  payments: Payment[];
  paymentForm: FormGroup;
  selectedBillingTab = 0;


  constructor(
    private myProfileService: MyProfileService,
    private fb: FormBuilder,
    private toastar: ToastarService,
    private spinner: NgxSpinnerService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.viewPaymentsByAppUser();
  }

  formInit() {
    this.paymentForm = this.fb.group({
      type: ['', [Validators.required]],
      cardName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      expiryMonth: ['', [Validators.required]],
      expiryYear: ['', [Validators.required]],
      cvc: ['', [Validators.required]],
      holderName: ['', [Validators.required]],
      defaultPayment: ['true'],
      billing: this.fb.group({
        billingName: [''],
        billingStreet1: [''],
        billingStreet2: [''],
        billingCity: [''],
        billingState: [''],
        billingCountry: [''],
        billingZipcode: ['']
      })
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.payment = Object.assign({}, this.paymentForm.value);
      this.paymentDto = this.paymentDto.to(this.payment);
      this.myProfileService.newPayment(this.paymentDto).subscribe(response => {
        this.spinner.show();
        this.toastar.success('payment added successfully');
        this.spinner.hide();
        this.paymentForm.reset();
        this.route.navigateByUrl('/my-profile/profile');
        console.log(response);
      }, error => {
        this.toastar.error('payment addition failed');
        console.log(error)
      });
    }
  }

  viewPaymentsByAppUser() {
    this.spinner.show();
    this.myProfileService.viewPaymentsByAppUser(localStorage.getItem('username')).subscribe(response => {
      this.paymentDtos = response.data;
      this.spinner.hide();
    }, error => {
      this.toastar.error('payment list not found !!!')
    });
  }

}
