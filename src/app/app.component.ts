import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  borderStyle = '1px solid black';
  alertStyle = {
    color: 'red',
    fontWeight: 'bold',
    borderBottom: this.borderStyle
  };

  style: any;

  setStyle(style: any): void {
    this.style = style;
  }

  ngOnInit(): void {
    this.setStyle(this.alertStyle);
  }
}
