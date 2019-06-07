import { Component } from '@angular/core';
import { AppServeService } from '../app-serve.service';
import { Router } from '@angular/router';
import { ScrollHideConfig } from '../parallax.directive';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private datePicker: DatePicker, private nativeAudio: NativeAudio, private appServe: AppServeService, private router: Router) { }

  footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 44 };

  doRefresh(event) {
    this.appServe.doRefresh(event);
  }
  
  returnData = [];
  returnQuote;
  randomQuote = [];

  ngOnInit() {
    this.returnData = this.appServe.getQuizArr();
    this.returnQuote = this.appServe.getArrQuote();
    this.randomQuote = this.appServe.returnChosen();
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullets',
    //   hideOnClick: true
    // }
  };

}
