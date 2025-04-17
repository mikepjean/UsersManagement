import { Component } from '@angular/core';
import { UserDetailService } from 'src/app/shared/user-detail.service';
import { NgForm } from '@angular/forms';
import { UserDetail } from 'src/app/shared/user-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent {

  constructor(public service: UserDetailService, private toastr: ToastrService) { }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      if (this.service.formData.Id == 0) {
        this.insertRecord(form);
      } else {
        this.updateRecord(form);
      }
    }
  }

    insertRecord(form: NgForm) {
      this.service.postUserDetail().subscribe({
        next: res => {
          this.service.list = res as UserDetail[];
          this.service.resetForm(form);
          this.toastr.success('Submitted successfully', 'User Detail Register');
        },
        error: err => { console.log(err) }
      })
    }

    updateRecord(form: NgForm) {
      this.service.putUserDetail().subscribe({
        next: res => {
          this.service.list = res as UserDetail[];
          this.service.resetForm(form);
          this.toastr.info('Updated successfully', 'User Detail Register');
        },
        error: err => { console.log(err) }
      })
    }
}

