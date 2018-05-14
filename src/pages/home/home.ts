import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScanPage } from '../scan/scan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  qrText = "http://ryans-log.tistory.com";
  confirmedQR = null;

  constructor(public navCtrl: NavController) {
  }

  openQRScanner() {
    this.navCtrl.push(ScanPage);
  }

  createQR() {
    this.confirmedQR = this.qrText;
  }

}
