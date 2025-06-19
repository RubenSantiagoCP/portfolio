import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { init } from 'emailjs-com';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }


  sendEmail() {
    emailjs.init('KOfgA14dj___RdTdn');
    emailjs.send("service_hjk0ibd", "template_gf6bal6", {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message : this.contactForm.value.message,
    })
    .then(() =>{
      console.log("Email enviado con éxito");
      this.contactForm.reset();
    })
    .catch((error) => {
      console.log(error);
    });
  }

}

