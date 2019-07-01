import { Component, Input, OnInit} from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AppServeService } from '../../app-serve.service';
import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-article-pop2',
  templateUrl: './article-pop2.page.html',
  styleUrls: ['./article-pop2.page.scss'],
})
export class ArticlePop2Page implements OnInit {

  public platform: any;
  constructor(private myPlatform: Platform, private navController: NavController) {
    this.platform = myPlatform;
   }

     ngOnInit() { }

     cancel() {
      this.navController.navigateBack(['/tabs/practices'])
     }
  
}
