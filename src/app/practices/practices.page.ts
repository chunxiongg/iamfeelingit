import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.page.html',
  styleUrls: ['./practices.page.scss'],
})
export class PracticesPage implements OnInit {

  galleryType = 'mvf';
  
  constructor() { }

  ngOnInit() {
  }

}
