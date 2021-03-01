import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PaymentDto } from 'src/app/dtos/payment.dto';
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
  paymentDto: PaymentDto = new PaymentDto();
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
      billing: this.fb.group({
        id: [''],
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
