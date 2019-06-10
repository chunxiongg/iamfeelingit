import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private http: HTTP) {}

  ngOnInit() {

  }

  getData() {
    this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot', {}, {})
      .then((data) => {
         console.log(data)
      })
  }

}
