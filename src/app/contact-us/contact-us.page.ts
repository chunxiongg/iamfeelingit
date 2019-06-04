import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from '../parallax.directive';
import { Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  // footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  // headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 100 };

  constructor(private router: Router, private iab: InAppBrowser, private emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  isLoaded = false;

  ionViewWillEnter() {
    setTimeout(() => {
      this.isLoaded = true;
      console.log('yay, page loaded!')
    }, 1000);
  }

  openFacebook() {
    this.iab.create('https://www.facebook.com/project.stillyoung', '_blank');
  }

  openInstagram() {
    this.iab.create('https://www.instagram.com/project.stillyoung', '_blank');
  }

  openMail() {
    this.emailComposer.isAvailable()
      .then((available: boolean) =>{
        if (available) {
          //Now we know we can send
          console.log('Sending message...')
        }
     });
     
     let email = {
       to: 'connectwithstillyoung@gmail.com',
       isHtml: true
     }
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }

}
