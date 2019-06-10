import { Component } from '@angular/core';
import { AppServeService } from '../app-serve.service';
import { Router } from '@angular/router';
import { ScrollHideConfig } from '../parallax.directive';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { PopoverController, NavController } from '@ionic/angular';
import { Tab1PopPage } from '../pop-over/tab1-pop/tab1-pop.page';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navController: NavController, private popoverController: PopoverController, 
              private datePicker: DatePicker, private nativeAudio: NativeAudio, private appServe: AppServeService, 
              private router: Router, private actionSheetController: ActionSheetController,
              private socialSharing: SocialSharing ) { }

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 44 };

  doRefresh(event) {
    this.appServe.doRefresh(event);
  }

  today: number = Date.now();
  
  returnData = [];
  returnQuote;
  randomQuote = [];


  ngOnInit() {
    this.returnData = this.appServe.getQuizArr();
    this.returnQuote = this.appServe.getArrQuote();
    this.randomQuote = this.appServe.returnChosen();
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1.3,
    centeredSlides: true
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   hideOnClick: true
    // }
  };

  text = ''
  day = new Date();
  TimeHour = this.day.getHours()

  ionViewWillEnter() {

    console.log(this.TimeHour)

    if (this.TimeHour >= 0 && this.TimeHour < 12) {
      this.text = 'Good Morning'
    }

    else if (this.TimeHour >= 12 && this.TimeHour < 17) {
      this.text = 'Good Afternoon'
    }

    else {
      this.text = 'Good Evening'
    }
  }


  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //   component: Tab1PopPage,
  //   event: ev,
  //   translucent: false,
  //   animated: true,
  //   backdropDismiss: true
  //   });
  //   return await popover.present();
  // }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'More',
      buttons: [ 
      
        {
        text: 'Share',
        handler: () => {
          console.log('Share clicked');
        }
      }, 
      
      {
        text: 'Favourite',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, 
      
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }  

}
