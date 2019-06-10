import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tab1-pop',
  templateUrl: './tab1-pop.page.html',
  styleUrls: ['./tab1-pop.page.scss'],
})
export class Tab1PopPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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

}
