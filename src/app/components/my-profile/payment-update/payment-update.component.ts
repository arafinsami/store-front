import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PaymentDto } from 'src/app/dtos/payment.dto';
import { Billing } from 'src/app/models/billing';
import { Payment } from 'src/app/models/payment';
import { MyProfileService } from 'src/app/service/my-profile.service';
import { ToastarService } from 'src/app/service/toastar.service';

@Component({
  selector: 'app-payment-update',
  templateUrl: './payment-update.component.html',
  styleUrls: ['./payment-update.component.css']
})
export class PaymentUpdateComponent implements OnInit {

  payment: Payment;
  billing: Billing = new Billing();
  paymentDto: PaymentDto = new PaymentDto();
  paymentDtos: PaymentDto[];
  payments: Payment[];
  paymentForm: FormGroup;
  paymentId: any;


  constructor(
    private myProfileService: MyProfileService,
    private fb: FormBuilder,
    private toastar: ToastarService,
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getById();
  }

  formInit() {
    this.paymentForm = this.fb.group({
      id: [''],
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
      this.paymentDto = this.paymentDto.from(this.payment);
      this.myProfileService.updatePayment(this.paymentDto).subscribe(response => {
        this.spinner.show();
        this.toastar.success('payment updated successfully');
        this.spinner.hide();
        this.paymentForm.reset();
        this.route.navigateByUrl('/my-profile/profile');
        console.log(response);
      }, error => {
        this.toastar.error('payment updating failed');
        console.log(error)
      });
    }
  }

  getBilling(): Billing {
    let billingName: any = this.paymentForm.get('billingName').value;
    let billingStreet1: any = this.paymentForm.get('billingStreet1').value;
    let billingStreet2: any = this.paymentForm.get('billingStreet2').value;
    let billingCity: any = this.paymentForm.get('billingCity').value;
    let billingState: any = this.paymentForm.get('billingState').value;
    let billingCountry: any = this.paymentForm.get('billingCountry').value;
    let billingZipcode: any = this.paymentForm.get('billingZipcode').value;
    this.billing.billingName = billingName;
    this.billing.billingStreet1 = billingStreet1;
    this.billing.billingStreet2 = billingStreet2;
    this.billing.billingCity = billingCity;
    this.billing.billingState = billingState;
    this.billing.billingCountry = billingCountry;
    this.billing.billingZipcode = billingZipcode;
    return this.billing;
  }

  getById() {
    this.paymentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.myProfileService.findByPaymentId(this.paymentId).subscribe(response => {
      this.payment = response.data;
      this.paymentForm.reset(this.paymentDto.from(this.payment));
    }, error => {
      this.toastar.error(error);
    });
  }

}
