/*
root component
manages content of <app-root> in the html document
takes responsibility for top level content presented to user
NB. No code in AppComponent class as root component exists just to manage content shown to user
*/

import { Component } from '@angular/core';

// decorator marking this class as an Angular component
@Component({
  selector: 'app-root',                  // location of component in html
  templateUrl: './app.component.html',   // component content definition
  styleUrls: ['./app.component.css']     // component style definition
})

export class AppComponent {
  title = 'ngNewSportStore';  // title accessible in component template
}
