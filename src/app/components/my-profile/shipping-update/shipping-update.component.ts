import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShippingDto } from 'src/app/dtos/shipping.dto';
import { Shipping } from 'src/app/models/shipping';
import { MyProfileService } from 'src/app/service/my-profile.service';
import { ToastarService } from 'src/app/service/toastar.service';

@Component({
  selector: 'app-shipping-update',
  templateUrl: './shipping-update.component.html',
  styleUrls: ['./shipping-update.component.css']
})
export class ShippingUpdateComponent implements OnInit {

  shipping: Shipping;
  shippingDto: ShippingDto = new ShippingDto();
  shippingForm: FormGroup;
  shippingId: any;

  constructor(
    private myProfileService: MyProfileService,
    private fb: FormBuilder,
    private toastar: ToastarService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getById();
  }

  formInit() {
    this.shippingForm = this.fb.group({
      id: [''],
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
      this.shippingDto = this.shippingDto.from(this.shipping);
      this.myProfileService.updateShipping(this.shippingDto).subscribe(response => {
        this.toastar.success('shipping updated successfully');
        this.shippingForm.reset();
        this.route.navigateByUrl('/my-profile/profile');
        console.log(response);
      }, error => {
        this.toastar.error('shipping updating failed');
        console.log(error)
      });
    }
  }

  getById() {
    this.shippingId = this.activatedRoute.snapshot.paramMap.get('id');
    this.myProfileService.findByShippingId(this.shippingId).subscribe(response => {
      this.shipping = response.data;
      this.shippingForm.reset(this.shippingDto.from(this.shipping));
    }, error => {
      this.toastar.error(error);
    });
  }

}
