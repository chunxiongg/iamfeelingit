import { Component, OnInit } from '@angular/core';
import { RoundProgressEase } from 'angular-svg-round-progressbar';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton } from '@ionic/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  constructor(private pickerCtrl: PickerController, private modalController: ModalController) { }
  
  ngOnInit() {
  }

  interval;
  timeLeft: number = 10;
  max: number = 10;
  stroke: number = 15;
  radius: number = 125;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = false;
  color: string = '#faddd8';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  realCurrent: number = 0;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } 
    },1000)

  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  }

  cancel() {
    this.modalController.dismiss();
  }

  // timings = '';
  // selected = ['','',''];

  // async showBasicPicker() {
  //   let opts: PickerOptions = {
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       },
  //       {
  //         text: 'Done'
  //       }
  //     ],
  //     columns: [
  //       {
  //         name: 'timings',
  //         options: [
  //           { text: 'Angular', value: 'A' },
  //           { text: 'Vue', value: 'B' },
  //           { text: 'React', value: 'C' }
  //         ]
  //       }
  //     ]
  //   };
  //   let picker = await this.pickerCtrl.create(opts);
  //   picker.present();
  //   picker.onDidDismiss().then(async data => {
  //     let col = await picker.getColumn('timings');
  //     this.timings = col.options[col.selectedIndex].text;
  //   });
  // }
  

}
