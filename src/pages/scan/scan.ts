import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  constructor(public navCtrl: NavController,
    public qrScanner: QRScanner,
    public platform: Platform,
    public alertCtrl: AlertController,
    public navParams: NavParams) {

    platform.ready().then(() => {
      this.openScanner();
    });
  }

  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }

  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }

  openScanner() {
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          // this.vibration.vibrate(500);
          this.scanned(text);
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
          this.hideCamera();
          this.navCtrl.pop();
        });
        this.qrScanner.resumePreview();
        this.showCamera();
        // show camera preview
        this.qrScanner.show();
      }
    })
    .catch((err: any) => {
      if(err.code == 1){
        this.alertCtrl.create({
          title: "Camera Permission",
          message: "QR 스캔을 위한 카메라 권한이 거부되었습니다. 설정에서 허용해 주세요.",
          buttons: [{
            text:'확인',
            handler: () => {
              this.navCtrl.pop();
              this.qrScanner.openSettings();
            }
          }]
        }).present();
      }
    });
  }

  scanned(data: any) {
    window.open(data, '_blank');
  }

}
