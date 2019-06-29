import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

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
