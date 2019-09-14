import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ViewEncapsulation} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { getNumberOfCurrencyDigits } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private x: PeliculasService, private f: FormBuilder,private modalService: NgbModal) { }
  formulario: FormGroup;
  peliculas=[];
  peliuno=[];

  ngOnInit() {
    this.Popular();
    this.formulario= this.f.group({
      formularito: ['']
    });
  }
  Popular(){
    this.x.getPopulars().subscribe(rest => {
      console.log(rest);
      this.peliculas = [];
      this.peliculas = rest['results'];
    });

  }

  Peliteatro(){
    this.x.getPeliTeatro().subscribe(res =>{
      console.log(res);
      this.peliculas = [];
      this.peliculas = res['results'];
    });
  }

  PeliKid(){
    this.x.getKid().subscribe(resp =>{
      console.log(resp);
      this.peliculas=[];
      this.peliculas = resp['results'];
    });
  }

  Opcion(){
    let escribeunavariablecualquiera = this.formulario.controls['formularito'].value;
    this.x.getAnio(escribeunavariablecualquiera).subscribe( respuesta =>{
      console.log(respuesta);
      this.peliculas=[];
      this.peliculas = respuesta['results'];
    })
  }
funcionmodal(content, id){
  this.x.getUno(id).subscribe(answer =>{
    console.log(answer);
    this.peliuno =[];
    this.peliuno.push(answer);
    
  })
  this.modalService.open(content, { size: 'xl', scrollable: true });
}
}