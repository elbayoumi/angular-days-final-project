import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hisName: string ='mohamed';
name : string = 'two way binding forms';
search : string = 'search';
}
