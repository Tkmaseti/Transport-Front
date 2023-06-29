import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  ngOnInit() {
    Aos.init()
  }

}
