import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-chamado-create',
  templateUrl: './chamado-create.component.html',
  styleUrls: ['./chamado-create.component.css']
})
export class ChamadoCreateComponent implements OnInit {

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
    private router: Router) { }

  ngOnInit(): void {
    this.findAllTecnico();
    this.findAllCliente();
  }

  create(): void {
    this.chamadoService.createReq(this.chamado).subscribe(() => {
      this.toast.success('Chamado criado com sucesso', 'Novo Chamado');
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

}
