import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.css']
})
export class ChamadoUpdateComponent implements OnInit {

  chamado: Chamado = {
    prioridade: '', 
    status: '',
    titulo: '',
    observacoes: '', 
    tecnico: '', 
    cliente: '', 
    nomeCliente: '',
    nomeTecnico: '',
}

  tecnicos: Tecnico[] = []
  clientes: Cliente[] = []

  prioridade: FormControl = new FormControl(null, [Validators.required]);
  status: FormControl = new FormControl(null, [Validators.required]);
  titulo: FormControl = new FormControl(null, [Validators.required]);
  observacoes: FormControl = new FormControl(null, [Validators.required]);
  tecnico: FormControl = new FormControl(null, [Validators.required]);
  cliente: FormControl = new FormControl(null, [Validators.required]);

  constructor(private tecnicoService: TecnicoService,
    private clienteService: ClienteService,
    private chamadoService: ChamadoService,
    private toast: ToastrService,
    private router: Router,
    private actvRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.chamado.id = this.actvRoute.snapshot.paramMap.get('id');
    this.findById();
    this.findAllTecnico();
    this.findAllCliente();
  }

  findById(): void {
    this.chamadoService.findByIdReq(this.chamado.id).subscribe(resposta => {
      this.chamado = resposta;
    }, ex => {
      this.toast.error(ex.error.error);
    })
  }

  update(): void {
    this.chamadoService.updateReq(this.chamado).subscribe(() => {
      this.toast.success('Chamado atualizado com sucesso', 'Update');
      this.router.navigate(['chamados']);
    }), ex => {
      this.toast.error(ex.error.error);
    }
  }

  findAllTecnico(): void {
    this.tecnicoService.findAllReq().subscribe(resposta => {
      this.tecnicos = resposta;
    })
  }

  findAllCliente(): void {
    this.clienteService.findAllReq().subscribe(resposta => {
      this.clientes = resposta;
    })
  }

  validaCampos(): boolean {
    return this.prioridade.valid && this.status.valid &&
    this.titulo.valid && this.observacoes.valid &&
    this.tecnico.valid && this.cliente.valid
  }

retornaPrioridade(prioridade: any): string {
  if(prioridade == '0'){
    return 'BAIXA'
  } else if(prioridade == '1'){
    return 'MÉDIA'
  }else {
    return 'ALTA'
  }
}

retornaStatus(status: any): string {
  if(status == '0'){
    return 'ABERTO'
  } else if(status == '1'){
    return 'EM ANDAMENTO'
  }else {
    return 'ENCERRADO'
  }
}

}