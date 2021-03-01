import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ShippingDto } from 'src/app/dtos/shipping.dto';
import { Shipping } from 'src/app/models/shipping';
import { MyProfileService } from 'src/app/service/my-profile.service';
import { ToastarService } from 'src/app/service/toastar.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shipping: Shipping;
  shippingDto: ShippingDto = new ShippingDto();
  shippingDtos: ShippingDto[];
  shippingForm: FormGroup;

  constructor(
    private myProfileService: MyProfileService,
    private fb: FormBuilder,
    private toastar: ToastarService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.viewShippingListByAppUser();
  }

  formInit() {
    this.shippingForm = this.fb.group({
      shippingName: [''],
      defaultshipping: ['true'],
      shippingStreet1: [''],
      shippingStreet2: [''],
      shippingCity: [''],
      shippingState: [''],
      shippingCountry: [''],
      shippingZipcode: ['']
    });
  }

  onSubmit() {
    if (this.shippingForm.valid) {
      this.shipping = Object.assign({}, this.shippingForm.value);
      this.shippingDto = this.shippingDto.to(this.shipping);
      this.myProfileService.saveShipping(this.shippingDto).subscribe(response => {
        this.toastar.success('shipping added successfully');
        this.shippingForm.reset();
        this.route.navigateByUrl('/my-profile/profile');
        console.log(response);
      }, error => {
        this.toastar.error('shipping addition failed');
        console.log(error)
      });
    }
  }

  viewShippingListByAppUser() {
    this.myProfileService.viewShippingListByAppUser(localStorage.getItem('username')).subscribe(response => {
      this.shippingDtos = response.data;
    }, error => {
      this.toastar.error('shipping list not found !!!')
    });
  }

}
