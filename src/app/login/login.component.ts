import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  public handleLogin() {
    // redirect to dashboardD
    this.document.location.href="http://localhost:60028/";
  }

  ngOnInit() {
  }

}
