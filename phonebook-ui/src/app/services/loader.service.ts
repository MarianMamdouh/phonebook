import { Injectable } from '@angular/core';

@Injectable()
export class Loader {

  constructor() {}

  animationsCount: number = 0;

  animate() {
      console.log("animate");
    let element = document.getElementById('loader');
    if(element) {
      element.setAttribute('style', 'display:block');
    }
    this.animationsCount++;
  }

  stop() {
    this.animationsCount--;
    if(this.animationsCount == 0){
      let element = document.getElementById('loader');
      if(element) {
        element.setAttribute('style', 'display:none');
      }
    }
  }
}
