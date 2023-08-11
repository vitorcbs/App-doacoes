import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
    });
  }

  enviar() {
    let nome = this.form.get('nome').value;
    let endereco = this.form.get('endereco').value;

    window
      .open(
        `https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%20me%20chamo%20${nome}%20moro%20em%20${endereco}%20e%20vim%20atraves%20do%20seu%20App%20%20.%20Gostaria%20de%20receber%20doacoes`
      )
      .focus();
  }
}

//https://api.whatsapp.com/send?phone=555194904309&text=Ol%C3%A1%20vim%20atraves%20do%20seu%20App%20Gostaria%20de%20receber%20doacoes
