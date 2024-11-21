import { Component } from '@angular/core';
import { RegistroService } from '../../servicios/registro/registro.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-doscampos',
  templateUrl: './doscampos.component.html',
  styleUrl: './doscampos.component.css'
})
export class DoscamposComponent {
  registros = [];
  datos_formulario:any;
  formularioForm;
  constructor(private formBuilder: FormBuilder,private registroSrv:RegistroService){
    this.formularioForm = this.formBuilder.group({
      campo1: '',
      campo2: ''
    });

  }
  ngOnInit(){
    /* this.crear() */
    this.registrosObtenidos()
  }

  enviarDatos(){
    this.datos_formulario = this.formularioForm.value;
    console.log(this.datos_formulario);

  }

  registrosObtenidos(){
    this.registroSrv.obtenerRegistros().subscribe(
      (response:any) =>{
        this.registros = response.registros
        console.log(this.registros)
      }
    )
  }

  crear(){
    this.registroSrv.crearRegistros({campo1:"furina",campo2: "islove"}).subscribe()
  }

}
