import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-message-us',
  templateUrl: './message-us.page.html',
  styleUrls: ['./message-us.page.scss'],
})
export class MessageUsPage implements OnInit {

  public platform: any;
  constructor(private myPlatform: Platform, private emailComposer: EmailComposer, private coloredBrowserTabs: ColoredBrowserTabs,
              private navController: NavController, private nativePageTransitions: NativePageTransitions) { 
                this.platform = myPlatform;
              }

  ngOnInit() {
  }

  goBack() {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    
     this.nativePageTransitions.slide(options);
    this.navController.navigateBack(['/tabs/contact-us'])
  }

  isLoaded = false;

  ionViewWillEnter() {
    setTimeout(() => {
      this.isLoaded = true;
      console.log('yay, page loaded!')
    }, 1000);
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
