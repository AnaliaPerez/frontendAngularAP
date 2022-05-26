import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {


  public educaciones : Educacion []=[];

  public editEducacion : Educacion | undefined;

  public deleteEducacion : Educacion | undefined;

  constructor(private educacionService : EducacionService) { }

  ngOnInit(): void {
    this.getEducacion();
      
  }

 public getEducacion() : void{
    this.educacionService.getEducacion().subscribe({
    next: (response : Educacion[]) => {
      this.educaciones=response;
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    }
  })
}
 
 public onOpenModal(mode:String, educacion?:Educacion): void{
   const container= document.getElementById('main-container');
   const button= document.createElement('button');
   button.style.display="none";
   button.setAttribute('data-toggle', 'modal');
   if(mode === 'add' ){
     button.setAttribute('data-target', '#addEducacionModal');
   } else if(mode=== 'delete'){
     this.deleteEducacion=educacion;
     button.setAttribute('data-target', '#deleteEducacionModal');
   } else if(mode=== 'edit'){
    this.editEducacion=educacion;
    button.setAttribute('data-target', '#editEducacionModal');
  }
  container?.appendChild(button);
  button.click();

 }
 
 public onAddEducacion(addForm : NgForm){
   document.getElementById('add-educacion-form')?.click();
   this.educacionService.addEducacion(addForm.value).subscribe({
      next : (response:Educacion) => {
        console.log(response);
        this.getEducacion();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
      
   })
 }

 public onUpdateEducacion( educacion : Educacion ){
   this.editEducacion=educacion;
  document.getElementById('add-educacion-form')?.click();
  this.educacionService.updateEducacion(educacion).subscribe({
     next : (response:Educacion) => {
       console.log(response);
       this.getEducacion();
     },
     error: (error: HttpErrorResponse) => {
       alert(error.message);
     }
  })
} 

public onDeleteEducacion( IdEd : number ): void{
 this.educacionService.deleteEducacion(IdEd).subscribe({
    next : (response:void) => {
      console.log(response);
      this.getEducacion();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    }
 })
} 
}
    
 // }

/*
this.service.getEducacion().subscribe((data) =>
    this.educacion = data)

this.educacionService.getEducacion().subscribe({
  next: (response : Educacion) => {
  this.educacion=response;
  },
  error: (error: HttpErrorResponse) => {
    alert(error.message);
  }
})*/