import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ParticipanteService } from '../../services/participante.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-cpf',
  templateUrl: './form-cpf.component.html',
  styleUrl: './form-cpf.component.scss'
})
export class FormCpfComponent {

  public formCpf!: FormGroup;
  public retorno: any;
  public cpf?: string;

  constructor(private service: ParticipanteService,
              private spinner: NgxSpinnerService,
              private router: Router,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.formCpf = new FormGroup({
      cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)])
    })
  }

  public conferirCpf(): void{
    this.spinner.show();
    this.cpf = this.formCpf.value.cpf;
    this.service.conferirCpf(this.cpf!).subscribe({
      next: (data: any) => {
        this.retorno = data;
        console.log("Aqui error: ", this.retorno);
        this.spinner.hide();
      },
      error: (error: any) => {
        console.log("Aqui error: ", error.error.text);
        this.spinner.hide();
        if(error.error.text == "Não existe esse cpf cadastrado"){
          console.log("Caiu aqui");
        }
        else{
          this.toastr.error(error.error.text);
        }
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }

}
