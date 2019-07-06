import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import * as Hammer from 'hammerjs';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ThemeableBrowser } from '@ionic-native/themeable-browser/ngx';
import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Shake } from '@ionic-native/shake/ngx';

import { ConfinementFoodPageModule } from './pop-over/confinement-food/confinement-food.module';
import { PracticesPopPageModule } from './pop-over/practices-pop/practices-pop.module';
import { LactationBgInfoPageModule } from './pop-over/lactation-bg-info/lactation-bg-info.module';
import { LactationPopPageModule } from './pop-over/lactation-pop/lactation-pop.module';
import { BreastfeedingBeforePageModule } from './pop-over/breastfeeding-before/breastfeeding-before.module';
import { TimerPageModule } from './pop-over/timer/timer.module';


export class CustomeHammerConfig extends HammerGestureConfig {
  overrides = {
    'swipe': {
      direction: Hammer.DIRECTION_ALL
    }
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    LactationBgInfoPageModule, BreastfeedingBeforePageModule, LactationPopPageModule, TimerPageModule,
    PracticesPopPageModule, ConfinementFoodPageModule],
  providers: [
    StatusBar,
    InAppBrowser,
    EmailComposer,
    DatePicker,
    Vibration,
    HTTP,
    Shake,
    ThemeableBrowser,
    SocialSharing,
    NativeAudio,
    ColoredBrowserTabs,
    SplashScreen,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomeHammerConfig }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
