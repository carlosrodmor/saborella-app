import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
})
export class ContactoComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
      // Aquí iría la lógica para enviar el formulario
      this.contactForm.reset();
    } else {
      // Marcar todos los campos como touched para mostrar errores
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
