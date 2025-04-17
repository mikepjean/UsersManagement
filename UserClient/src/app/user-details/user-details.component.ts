import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from '../shared/user-detail.model';
import { UserDetailService } from '../shared/user-detail.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(public service: UserDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(userDetail: UserDetail) {
    this.service.formData = Object.assign({}, userDetail);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteUserDetail(id).subscribe({
        next: res => {
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'User Detail Register');
        },
        error: err => { console.log(err) }
      })
    }
  }

}
