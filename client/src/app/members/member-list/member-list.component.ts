import { AccountService } from './../../_services/account.service';
import { UserParams } from './../../_models/userParams';
import { Member } from 'src/app/_models/member';
import { MembersService } from '../../_services/members.service';
import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Pagination } from 'src/app/_models/pagination';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  // members$: Observable<Member[]> | undefined;
  members: Member[] = [];
  pagination: Pagination | undefined;
  userParams: UserParams | undefined;
  genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' },]

  constructor(private membersService: MembersService) {
    this.userParams = membersService.getUserParams();
  }

  ngOnInit(): void {
    // this.members$ = this.membersService.getMembers();
    this.loadMembers();
  }

  loadMembers() {
    if (this.userParams) {
      this.membersService.setUserParams(this.userParams);
      this.membersService.getMembers(this.userParams).subscribe({
        next: response => {
          if (response.result && response.pagination) {
            this.members = response.result;
            this.pagination = response.pagination;
          }
        }
      })
    }
  }

  resetFilters() {
    this.userParams = this.membersService.resetUserParams();
    this.loadMembers();
  }

  pageChanged(event: any) {
    if (this.userParams && this.userParams?.pageNumber !== event.page) {
      this.userParams.pageNumber = event.page;
      this.membersService.setUserParams(this.userParams);
      this.loadMembers();
    }
  }
}
