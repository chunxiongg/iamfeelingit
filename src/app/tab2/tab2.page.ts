import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import { AppServeService } from '../app-serve.service';
import { NavController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor(private nativePageTransitions: NativePageTransitions, private navController: NavController, private appServe: AppServeService) {}

  @ViewChild('slides') slides: IonSlides;

  returnData = [];

  ngOnInit() {
    this.returnData = this.appServe.getQuizArr();
    this.slides.lockSwipes(true)
  }

  ansArr = [];
  sum = 0;

  progress = 0;
  selectAnswer(options) {
    console.log('Selected:', options.name)
    console.log('ID: ' + options.id)
    this.ansArr.push(options.id);
    console.log(this.ansArr);

    this.slides.lockSwipeToNext(false);
    this.slides.lockSwipeToPrev(true);
    this.slides.slideNext();
    this.progress += 0.1;
  }

  getArrSum() {
    this.sum = 0;
    for (var i = 0; i < this.ansArr.length; i++) {
      this.sum = this.sum + this.ansArr[i];
    }

    console.log(this.sum)

    if (this.sum > 0 && this.sum <= 10) {
      console.log('Score is between 0 to 10 -> First Practice')
      this.navController.navigateForward(['/first'])
    }

    else if (this.sum > 10 && this.sum <= 20) {
      console.log('Score is between 11 to 20 -> Second Practice')
      this.navController.navigateForward(['/second'])
    }

    else if (this.sum > 20 && this.sum <= 30) {
      console.log('Score is between 20 to 30 -> Third Practice')
      this.navController.navigateForward(['/third'])
    }
  }

  restartQuiz() {
    this.progress = 0;
    this.ansArr.length = 0;
    console.log(this.ansArr);
    this.slides.lockSwipeToPrev(false);
    this.slides.slideTo(this.slideOpts.initialSlide)
  }

  // viewResult() {
  //   this.navController.navigateForward('/first')
  // }

  goHome() {
    this.navController.navigateBack('/tabs/practices')
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  goBack() {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    
     this.nativePageTransitions.slide(options);
    this.navController.navigateBack(['/tabs/practices'])
  }

}
