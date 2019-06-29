import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-breastfeeding-before',
  templateUrl: './breastfeeding-before.page.html',
  styleUrls: ['./breastfeeding-before.page.scss'],
})
export class BreastfeedingBeforePage implements OnInit {

  public platform: any;
  constructor(private myPlatform: Platform, private navController: NavController ) { 
    this.platform = myPlatform;
  }

  ngOnInit() {
  }

  goBack() {
    this.navController.navigateBack(['/tabs/lactation'])
  }

}
