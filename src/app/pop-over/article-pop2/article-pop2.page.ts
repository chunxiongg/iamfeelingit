import { Component, Input, OnInit} from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AppServeService } from '../../app-serve.service';
import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs/ngx';

@Component({
  selector: 'app-article-pop2',
  templateUrl: './article-pop2.page.html',
  styleUrls: ['./article-pop2.page.scss'],
})
export class ArticlePop2Page implements OnInit {

     constructor(private navController: NavController) { }

     ngOnInit() { }

     cancel() {
      this.navController.navigateBack(['/tabs/practices'])
     }
  
}
