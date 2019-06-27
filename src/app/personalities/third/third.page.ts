import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navController.navigateBack('/quiz')
  }

}
