import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentDto } from 'src/app/dtos/payment.dto';
import { Billing } from 'src/app/models/billing';
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
  billing: Billing = new Billing();
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
      type: ['', [Validators.required]],
      cardName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      expiryMonth: ['', [Validators.required]],
      expiryYear: ['', [Validators.required]],
      cvc: ['', [Validators.required]],
      holderName: ['', [Validators.required]],
      defaultPayment: ['true'],
      billingName: ['', [Validators.required]],
      billingStreet1: ['', [Validators.required]],
      billingStreet2: [''],
      billingCity: ['', [Validators.required]],
      billingState: ['', [Validators.required]],
      billingCountry: ['', [Validators.required]],
      billingZipcode: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      this.payment = Object.assign({}, this.paymentForm.value);

      this.payment.billing = this.getBilling();

      this.paymentDto = this.paymentDto.to(this.payment);
      this.myProfileService.newPayment(this.paymentDto).subscribe(response => {
        this.toastar.success('payment added successfully');
        this.paymentForm.reset();
        this.route.navigateByUrl('/my-profile/profile');
        console.log(response);
      }, error => {
        this.toastar.error('payment addition failed');
        console.log(error)
      });
    }
  }

  getBilling(): Billing {
    let billingName: any        = this.paymentForm.get('billingName').value;
    let billingStreet1: any     = this.paymentForm.get('billingStreet1').value;
    let billingStreet2: any     = this.paymentForm.get('billingStreet2').value;
    let billingCity: any        = this.paymentForm.get('billingCity').value;
    let billingState: any       = this.paymentForm.get('billingState').value;
    let billingCountry: any     = this.paymentForm.get('billingCountry').value;
    let billingZipcode: any     = this.paymentForm.get('billingZipcode').value;
    this.billing.billingName    = billingName;
    this.billing.billingStreet1 = billingStreet1;
    this.billing.billingStreet2 = billingStreet2;
    this.billing.billingCity    = billingCity;
    this.billing.billingState   = billingState;
    this.billing.billingCountry = billingCountry;
    this.billing.billingZipcode = billingZipcode;
    return this.billing;
  }

}
