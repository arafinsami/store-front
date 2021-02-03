import { Component, OnInit } from '@angular/core';
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

  id: any;
  profile: Profile;
  dto: ProfileDto = new ProfileDto;
  username: string;

  constructor(
    private service: MyProfileService,
    private toastar: ToastarService,
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.service.viewProfile(localStorage.getItem('username')).subscribe(response => {
      this.profile = response.data;
      this.dto = this.dto.from(this.profile);
    }, error => {
      this.toastar.error('profile not found !!!')
    });
  }
}
