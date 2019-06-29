import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  public platform: any;
  constructor(private myPlatform: Platform, private navController: NavController) {
    this.platform = myPlatform;
   }

  ngOnInit() {
  }

  goBack() {
    this.navController.navigateBack('/quiz')
  }

}
