import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor() {
    console.log('constructor called...');
  }

  /**
   * https://angular.io/guide/lifecycle-hooks
   */
  ngAfterViewInit() {
    console.log("after the view initializes...");
  }
}
