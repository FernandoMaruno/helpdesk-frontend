import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  constructor(private service: TecnicoService,
    private toast: ToastrService,
    private route: Router,
    private actvRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.tecnico.id = this.actvRoute.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findByIdReq(this.tecnico.id).subscribe(resposta => {
      resposta.perfis = [];
      this.tecnico = resposta;
    })
  }
  
  delete(): void {
    this.service.deleteReq(this.tecnico.id).subscribe(() => {
      this.toast.success('Técnico deletado com sucesso', 'Delete');
      this.route.navigate(['tecnicos'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.array.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message)
      }
    })
  }

}


