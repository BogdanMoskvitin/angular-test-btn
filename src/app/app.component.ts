import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isActive1: boolean = false;
  isActive2: boolean = false;
  isActive3: boolean = false;
  value: string = "1";

  clickBtn(){
    this.isActive1 = true;
    this.isActive2 = true;
    this.isActive3 = true;
  }
  clickBtn1(){
    this.value = "1";
    this.isActive1 = false;
  }
  clickBtn2(){
    this.value = "2";
    this.isActive2 = false;
  }
  clickBtn3(){
    this.value = "3";
    this.isActive3 = false;
  }
}
