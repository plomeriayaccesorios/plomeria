import {Component} from '@angular/core'

@Component ({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 /*  template: 
  `
  <nav class='navbar navbar-expand navbar-dark bg-dark'>
  <a class='navbar-brand' style="color:#007E33">{{pageTitle}}</a>
  <ul class='nav nav-pills'>
    <li><button class='nav-link btn btn-outline-success mr-1' margin=20px [routerLink]="['/welcome']">Home</button></li>
    <li><button class='nav-link btn btn-outline-success mr-1' [routerLink]="['/products']">Product List</button></li>
  </ul>

</nav>
<div class="container-bg">
<div class="container">
<router-outlet></router-outlet>
</div>
</div>

  ` */
})
export class AppComponent{
  pageTitle: string = "Plomeria y Accesorios";
}