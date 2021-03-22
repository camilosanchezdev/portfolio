import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  progressSpinner: boolean = false;
  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}
  private baseUrl = 'http://localhost/portfolio/public/api/contact';
  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      subject: [null, Validators.required],
      bodymessage: [null, Validators.required],
    });
  }
  onSubmit() {
    this.progressSpinner = true;
    return this.http.post(this.baseUrl, this.checkoutForm.value).subscribe(
      (data) => {
        this.progressSpinner = false;
        this.toastr.success('Thank you!', 'Message Sent');
      },
      (error) => {
        this.progressSpinner = false;
        this.toastr.success('Thank you!', 'Message Sent');
      }
    );
  }
}
