import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from '../parallax.directive';
import { Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { AppServeService } from '../app-serve.service';
import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs/ngx';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  // footerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-bottom', maxValue: undefined };
  // headerScrollConfig: ScrollHideConfig = { cssProperty: 'margin-top', maxValue: 100 };

  constructor(private navController: NavController, private nativePageTransitions: NativePageTransitions, private appServe: AppServeService, private router: Router,
              private emailComposer: EmailComposer, private coloredBrowserTabs: ColoredBrowserTabs) { }

  ngOnInit() {
  }

  isLoaded = false;

  ionViewWillEnter() {
    setTimeout(() => {
      this.isLoaded = true;
      console.log('yay, page loaded!')
    }, 1000);
  }

  goToAbout() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    
     this.nativePageTransitions.slide(options);
     this.navController.navigateForward(['/about'])
  }


  goToContact() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    
     this.nativePageTransitions.slide(options);
     this.navController.navigateForward(['/message'])
  }

  
  openFacebook() {
    this.coloredBrowserTabs.openTab('https://www.facebook.com/project.stillyoung', '#ffffff' )
        .subscribe();
  }

  openInstagram() {
    this.coloredBrowserTabs.openTab('https://www.instagram.com/project.stillyoung', '#ffffff' )
        .subscribe();
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
