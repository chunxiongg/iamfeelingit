import { Component, OnInit } from '@angular/core';
import { AppServeService } from '../app-serve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.page.html',
  styleUrls: ['./practices.page.scss'],
})
export class PracticesPage implements OnInit {

  galleryType = 'mvf';

  constructor(private appServe: AppServeService, private router: Router) {}

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

  handleSwipeLeft() {
    console.log('Page Swiped Left: Food')
    this.router.navigate(['/tabs/food'])
  }

  handleSwipeRight() {
    console.log('Page Swiped Right: Go Back To Previous')
    this.router.navigate(['/tabs/tab1'])
  }

}
