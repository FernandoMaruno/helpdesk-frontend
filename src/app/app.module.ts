import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Para trabalhar com FORMULÁRIOS no Angular 12
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Para realizar REQUISIÇÕES HTTP para o nosso Backend
import { HttpClientModule } from '@angular/common/http';

// Todos os Imports dos COMPONENTES do Angular Material que iremos utilizar
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// Componente Nav criado
import { NavComponent } from './components/nav/nav.component';
// Componente Home criado
import { HomeComponent } from './components/home/home.component';
// Componente Header criado
import { HeaderComponent } from './components/header/header.component';
// Componente TecnicoList criado
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
// Component Login criado
import { LoginComponent } from './components/login/login.component';
// ToastrModule importado
import { ToastrModule } from 'ngx-toastr';

// AuthInterceptorProvider
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';

import { TecnicoCreateComponent } from './components/tecnico/tecnico-create/tecnico-create.component';

import { NgxMaskModule } from 'ngx-mask';
import { TecnicoUpdateComponent } from './components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './components/tecnico/tecnico-delete/tecnico-delete.component';

import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

 
@NgModule({
  declarations: [
    AppComponent,
    // Componente Nav gerado
    NavComponent,
    // Componente Home gerado
    HomeComponent,
    // Componente Header gerado
    HeaderComponent,
    // Componente TecnicoList gerado
    TecnicoListComponent,
    // Componente Login gerado
    LoginComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteListComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FORMULÁRIOS
    FormsModule,
    ReactiveFormsModule,
    // REQUISIÇÕES http
    HttpClientModule,
    // COMPONENTES Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    // ToastrModule importado
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent] 
})
export class AppModule { }
