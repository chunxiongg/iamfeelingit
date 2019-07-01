import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-article-pop3',
  templateUrl: './article-pop3.page.html',
  styleUrls: ['./article-pop3.page.scss'],
})
export class ArticlePop3Page implements OnInit {

  public platform: any;
  constructor(private myPlatform: Platform, private navController: NavController) {
    this.platform = myPlatform;
   }

  ngOnInit() {
  }

  cancel() {
    this.navController.navigateBack(['/tabs/practices'])
   }

}
