import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxCoolDialogsService } from 'ngx-cool-dialogs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pqe :string;
  listilla=[];
  peliuno=[];
  constructor(private PeliculasService: PeliculasService,
              private activatedRoute: ActivatedRoute,
              private navigate: Router,
              private modalService: NgbModal,
              private coolDialogs:NgxCoolDialogsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.pqe = params['pqe'];
      console.log(this.pqe);
      this.PeliculasService.getxName(this.pqe).subscribe(res =>{
        var largo = res['results'].length;
        if(largo === 0){
          this.coolDialogs.alert('No se encontraron coincidencias',{
            title:'Alerta'
          }).subscribe(res=>{
            if(res){
              this.navigate.navigate(['/']);
            }
          });
          console.log('vacio');
        }else{
          this.listilla=[];
          this.listilla= res['results'];
          console.log(this.listilla);
        } 
        
      });

    });
  }

  funcionmodal(content, id){
    this.PeliculasService.getUno(id).subscribe(answer =>{
      console.log(answer);
      this.peliuno =[];
      this.peliuno.push(answer);
      
    })
    this.modalService.open(content, { size: 'xl', scrollable: true });
  }

}
