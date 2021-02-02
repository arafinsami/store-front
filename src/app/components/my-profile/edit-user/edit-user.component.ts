import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  profileForm: FormGroup;
  id: any;


  constructor(
    private myProfileService: MyProfileService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastar: ToastarService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.profileForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    });
  }

}
