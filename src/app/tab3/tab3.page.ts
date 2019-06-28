import { Component, ViewChild } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { AppServeService } from '../app-serve.service';
import { ModalController, NavController } from '@ionic/angular';
import { LactationPopPage } from '../pop-over/lactation-pop/lactation-pop.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private modalController: ModalController, private navController: NavController, private http: HTTP, private appServe: AppServeService) {}

  LactationArr = [];

  ngOnInit() {
    this.LactationArr = this.appServe.getLactation();
    console.log(this.LactationArr)
  }

  getData() {
    this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot', {}, {})
      .then((data) => {
         console.log(data)
      })
  }

  async presentModal(data) {
    console.log(data.Card_id);
    const modal = await this.modalController.create({
    component: LactationPopPage,
    componentProps: { value: [{ cardID: data.Card_id, cardName: data.Card, cardInfo: data.info }] }
    });
    return await modal.present();
  }

  goBack() {
    this.navController.navigateBack(['/tabs/lactation'])
}


}
