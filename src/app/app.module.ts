import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { QRScanner } from '@ionic-native/qr-scanner'

import { NgxQRCodeModule } from 'ngx-qrcode2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScanPage } from '../pages/scan/scan';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScanPage
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
