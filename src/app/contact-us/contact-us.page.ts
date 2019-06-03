import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from '../parallax.directive';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  // footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  // headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 100 };

  constructor(private router: Router, private iab: InAppBrowser) { }

  ngOnInit() {
  }

  isLoaded = false;

  ionViewWillEnter() {
    setTimeout(() => {
      this.isLoaded = true;
      console.log('yay, page loaded!')
    }, 1000);
  }

  handleSwipeRight() {
    console.log('Page Swiped Right: Go Back To Previous')
    this.router.navigate(['/tabs/tab3'])
  }

  openFacebook() {
    this.iab.create('https://www.facebook.com/project.stillyoung', '_blank');
  }

  openInstagram() {
    this.iab.create('https://www.instagram.com/project.stillyoung', '_blank');
  }

  openMail() {
    this.iab.create('mailto:connectwithstillyoung@gmail.com', '_self');
  }

}
