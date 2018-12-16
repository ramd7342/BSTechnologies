import { Component, ViewChild } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('wrapper') wrapper;
  title = 'IMGProject';
  sidenavActive = false;
  toggleMenu() {
    this.sidenavActive = !this.sidenavActive;
  }
}
