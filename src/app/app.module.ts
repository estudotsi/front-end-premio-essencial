import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCadastroComponent } from './componentes/form-cadastro/form-cadastro.component';
import { FormEscolhaComponent } from './componentes/form-escolha/form-escolha.component';
import { FormCpfComponent } from './componentes/form-cpf/form-cpf.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormCadastroComponent,
    FormEscolhaComponent,
    FormCpfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({}),
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideClientHydration(),
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
