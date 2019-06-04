import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { AppServeService } from '../app-serve.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor(private appServe: AppServeService) {}

  returnData = [];

  ngOnInit() {
    this.returnData = this.appServe.getQuizArr();
  }

  submittedAns = [];

  submitBtn() {
    this.appServe.submitBtn();
  }

  selectAnswer(options) {
    this.appServe.getSelected(options);
    console.log('Selected:', options.name)
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    }
  };
}
