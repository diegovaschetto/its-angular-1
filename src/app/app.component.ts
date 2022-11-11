import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @BlockUI('hero-section') blockUI: NgBlockUI | undefined;
  constructor(){
    this.blockUI?.start('Loading...'); // Start blocking element only
      this.blockUI?.stop(); // Stop blocking
  }
}
