import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-article-pop3',
  templateUrl: './article-pop3.page.html',
  styleUrls: ['./article-pop3.page.scss'],
})
export class ArticlePop3Page implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  cancel() {
    this.navController.navigateBack(['/tabs/practices'])
   }

}
