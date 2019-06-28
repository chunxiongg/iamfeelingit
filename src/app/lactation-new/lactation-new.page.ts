import { Component, OnInit } from '@angular/core';
import { Tab3Page } from '../tab3/tab3.page';
import { ModalController, NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs/ngx';
import { LactationBgInfoPage } from '../pop-over/lactation-bg-info/lactation-bg-info.page';

@Component({
  selector: 'app-lactation-new',
  templateUrl: './lactation-new.page.html',
  styleUrls: ['./lactation-new.page.scss'],
})
export class LactationNewPage implements OnInit {

  constructor(private coloredBrowserTabs: ColoredBrowserTabs, private modalController: ModalController, private navController: NavController ) { }

  ngOnInit() {
  }

  openLactation() {
    this.navController.navigateForward(['/tab3'])
  }

  before() {
    this.navController.navigateForward(['/breastfeeding-before'])
  }

  while() {
    Swal.fire({
      type: 'info',
      text: 'Coming soon!',
    })
  }

  openNewLink() {
    this.coloredBrowserTabs.openTab('http://breastfeeding.org.sg/', '#ffffff' )
        .subscribe();
  }

  async presentPopover() {
    const modal = await this.modalController.create({
      component: LactationBgInfoPage
    });
    return await modal.present();
  }

}
