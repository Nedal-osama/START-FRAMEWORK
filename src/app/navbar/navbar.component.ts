import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  myscrol:number=0;
  myscroll(x:any):void{
  this.myscrol=  x.target.scrollingElement.scrollTop;
}
}
