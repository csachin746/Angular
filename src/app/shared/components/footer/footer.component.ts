import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:
  '<section class="banner"> <img src="https://avatars.githubusercontent.com/u/7092023?v=4" /> <div class="banner-content"> <h2>Hello</h2> <p> Im Gio, a talented frontend developer that loves creating immersive web experiences. </p> </div> </section> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" > <defs> <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /> </defs> <g class="waves"> <use xlink:href="#gentle-wave" x="50" y="0" fill="#03ffff" fill-opacity=".2" /> <use xlink:href="#gentle-wave" x="50" y="3" fill="#03ffff" fill-opacity=".5" /> <use xlink:href="#gentle-wave" x="50" y="6" fill="#03ffff" fill-opacity=".9" /> </g> </svg>',
  styles: ['.banner { display: flex; align-items: center; justify-content: center; flex-direction: column-reverse; gap: 50px; padding: 0 80px; text-align: center; height: 100vh; background: #050808; } .banner > img { width: 60vw; transition: 0.1s linear; }.banner h2 { font-weight: 500; font-size: 30px; margin: 0 0 10px; } '],
})
export class FooterComponent {}
