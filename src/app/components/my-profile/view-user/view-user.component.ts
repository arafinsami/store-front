import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProfileDto } from 'src/app/dtos/profile.dto';
import { Profile } from 'src/app/models/profile';
import { MyProfileService } from 'src/app/service/my-profile.service';
import { ToastarService } from 'src/app/service/toastar.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  profile: Profile;
  dto: ProfileDto = new ProfileDto;
  username: string;

  constructor(
    private myProfileService: MyProfileService,
    private toastar: ToastarService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.spinner.show();
    this.myProfileService.viewProfile(localStorage.getItem('username')).subscribe(response => {
      this.profile = response.data;
      this.dto = this.dto.from(this.profile);
      this.spinner.hide();
    }, error => {
      this.toastar.error('profile not found !!!')
    });
  }
}
