import { PresenceService } from './../../_services/presence.service';
import { MembersService } from './../../_services/members.service';
import { Member } from './../../_models/member';
import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent {

  constructor(private membersService: MembersService, private toastr: ToastrService, public presenceService: PresenceService) { }
  @Input() member: Member | undefined;

  addLike(member: Member) {
    this.membersService.addLike(member.userName).subscribe({
      next: _ => this.toastr.success('You have liked ' + member.knownAs)
    })
  }
}
