import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileDto } from 'src/app/dtos/profile.dto';
import { Profile } from 'src/app/models/profile';
import { MyProfileService } from 'src/app/service/my-profile.service';
import { ToastarService } from 'src/app/service/toastar.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  profile: Profile;
  dto: ProfileDto = new ProfileDto();
  editProfileForm: FormGroup;


  constructor(
    private myProfileService: MyProfileService,
    private fb: FormBuilder,
    private toastar: ToastarService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
    this.getUserInfo();
  }

  formInit() {
    this.editProfileForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: [''],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      //confirmpassword: ['', [Validators.required]]
    });
  }

  getUserInfo() {
    this.myProfileService.viewProfile(localStorage.getItem('username')).subscribe(response => {
      this.profile = response.data;
      this.dto = this.dto.from(this.profile);
      this.editProfileForm.reset(this.dto);
    }, error => {
      this.toastar.error('data not found !!!')
    });
  }

  onSubmit() {
    if (this.editProfileForm.valid) {
      this.profile = Object.assign({}, this.editProfileForm.value);
      this.dto = this.dto.from(this.profile);
      this.myProfileService.updateProfile(this.dto).subscribe(response => {
        this.toastar.success('profile editd successfully');
        this.route.navigateByUrl('/my-profile/profile');
        console.log(response);
      }, error => {
        this.toastar.error('signup failed');
      });
    }
  }

}
