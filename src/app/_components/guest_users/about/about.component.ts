import { Component, OnInit} from '@angular/core';
import * as Aos from 'aos';
// import {Aos} from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  constructor (){}

  ngOnInit() {
    Aos.init()
  }

}
