import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}

  handleSwipeLeft() {
    console.log('Page Swiped Left: Contact')
    this.router.navigate(['/tabs/contact-us'])
  }

  handleSwipeRight() {
    console.log('Page Swiped Right: Go Back To Previous')
    this.router.navigate(['/tabs/food'])
  }

}
