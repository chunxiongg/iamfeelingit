import { Component, OnInit } from '@angular/core';
import { AppServeService } from '../app-serve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-quote',
  templateUrl: './splash-quote.page.html',
  styleUrls: ['./splash-quote.page.scss'],
})
export class SplashQuotePage implements OnInit {

  constructor(private appServe: AppServeService, private router: Router) { }

  returnQuote;
  randomQuote = [];

  ngOnInit() {
    this.returnQuote = this.appServe.getArrQuote();
    this.randomQuote = this.appServe.returnChosen();
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.router.navigate(['/tabs/tab1'])
      console.log('Quote Page Loaded!')
    }, 3000);
  }

  onEnter() {
    this.router.navigate(['/tabs/tab1'])
  }

}
