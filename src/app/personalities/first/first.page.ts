import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

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
