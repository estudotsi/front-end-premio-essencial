import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCpfComponent } from './componentes/form-cpf/form-cpf.component';

const routes: Routes = [
  { path: '', redirectTo: 'form-cpf', pathMatch: 'full' },
  { path: 'form-cpf', component: FormCpfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
