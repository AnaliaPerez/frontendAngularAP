import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  public educacion : any;

  //public editEducacion : Educacion | undefined;

  constructor(private service : EducacionService) { }

  ngOnInit(): void {
    this.service.getEducacion().subscribe((data) =>
    this.educacion = data)

  }

  //public getEducacion():void{
    
  //}

}

/*this.educacionService.getEducacion().subscribe({
  next: (response : Educacion) => {
  this.educacion=response;
  },
  error: (error: HttpErrorResponse) => {
    alert(error.message);
  }
})*/