import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxCoolDialogsModule, NgxCoolDialogsService } from 'ngx-cool-dialogs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private r: Router,
              private coolDialogs: NgxCoolDialogsService) { }
  ngOnInit() {
  }

  cualquiera(busca) {
    if (busca !== '') {
  this.r.navigate(['/search', busca]);
    } else {
      this.coolDialogs.alert('Debe ingresar búsqueda');
    }
  }
  

}
