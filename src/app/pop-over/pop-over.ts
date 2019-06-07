import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { PopoverController } from '@ionic/angular';

@Component({
    styleUrls: ['./pop-over.scss'],
    template: `
        <br>
        <ion-list>          
                <ion-grid>
                    <ion-row>
                        <ion-col align-self-center>
                        <ion-buttons>
                            <ion-button (click)='loveThis()'>
                                <ion-icon color='primary' slot="icon-only" ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon> &nbsp; 
                                &nbsp; <ion-label>I like this</ion-label>
                            </ion-button>
                            </ion-buttons>
                        </ion-col>
                
                        <ion-col align-self-center>
                            <ion-buttons>
                                <ion-button (click)='dislikeThis()'>
                                <ion-icon color='warning' slot="icon-only" ios="ios-thumbs-down" md="md-thumbs-down"></ion-icon> &nbsp; 
                                &nbsp; <ion-label>I dislike this</ion-label>
                                </ion-button>
                            </ion-buttons>
                        
                        </ion-col>
                    </ion-row>
                </ion-grid>  
        </ion-list>
    `
})

export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  loveThis() {
    Swal.fire({
      width: 600,
      padding: '8em',
      timer: 1000,
      showConfirmButton: false,
      background: '#fff url(/assets/tenor.gif)',
    })
  }

  dislikeThis() {
    Swal.fire({
      width: 600,
      padding: '8em',
      timer: 1000,
      showConfirmButton: false,
      background: '#fff url(/assets/pika.gif)',
    })
  }

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
