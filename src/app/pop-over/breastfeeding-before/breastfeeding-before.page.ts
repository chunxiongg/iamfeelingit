import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-breastfeeding-before',
  templateUrl: './breastfeeding-before.page.html',
  styleUrls: ['./breastfeeding-before.page.scss'],
})
export class BreastfeedingBeforePage implements OnInit {

  constructor(private navController: NavController ) { }

  ngOnInit() {
  }

  goBack() {
    this.navController.navigateBack(['/tabs/lactation'])
  }

}
