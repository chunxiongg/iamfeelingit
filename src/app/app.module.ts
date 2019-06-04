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

// import { ParallaxDirective } from './parallax.directive';

// import { MyStyleDirective } from './my-style.directive';

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
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    InAppBrowser,
    EmailComposer,
    ThemeableBrowser,
    ColoredBrowserTabs,
    SplashScreen,
    NativePageTransitions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomeHammerConfig }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
