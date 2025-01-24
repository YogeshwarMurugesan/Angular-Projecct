import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterService } from '../../Services/register.service';
import { Router, RouterLink } from '@angular/router';

export class formDataModel {
  firstName = '';
  surName = '';
  selectedMonth!: number;
  selectedDate!: number;
  selectedYear!: number;
  gender = '';
  emailOrNumber = '';
  password = '';
}

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private RegisterService: RegisterService, private router : Router) {}

  formData: formDataModel = new formDataModel();

  months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];

  dates: number[] = [];
  years: number[] = [];

  ngOnInit() {
    this.dates = Array.from({ length: 31 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    this.years = Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i);
  }

  onSubmit(form: NgForm) {
    console.log('Form Submitted:', form.value);

    if (form.valid && form.errors === null) {
      this.RegisterService.postData(form.value).subscribe(
          (response) => {
            console.log('Success:', response);
            alert(response.message);
            form.resetForm()
            this.router.navigate(['/login'])

          },
          (error) => {
            console.error('Error during subscription:', error);
            alert(error.error.message || 'An unexpected error occurred.');
          }
        );
    }
  }
}
