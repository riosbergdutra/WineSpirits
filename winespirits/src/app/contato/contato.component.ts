import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  contactForm: FormGroup = this.formBuilder.group({
    subjectTitle: ['', Validators.required],
    userEmail: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitted = true;
    }
  }
}
