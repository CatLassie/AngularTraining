import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SashaFront';

  public isOutputVisible = true;

  public toggleOutput() {
    this.isOutputVisible = !this.isOutputVisible;
  }
}
