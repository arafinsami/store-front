import { Component, OnInit } from '@angular/core';
import { MyAccountService } from 'src/app/service/myaccount.service';
import { ToastarService } from 'src/app/service/toastar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    public myAccountService: MyAccountService,
    private toastar: ToastarService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.myAccountService.logout();
    this.toastar.success('you have successfully logged out !!!');
  }
}
