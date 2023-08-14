import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      subjectTitle: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.sendContactForm(this.contactForm.value).subscribe(() => {
        this.submitted = true;
      });
    }
  }
}
