import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  label = ['January 2019', 'February 2019', 'March 2019', 'April 2019'];
  data = [10, 50, 0, 74];
  type:string = 'line';

  actionChart(type:string):void{
    this.type = type;    
  }
}
