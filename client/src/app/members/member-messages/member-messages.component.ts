import { CommonModule } from '@angular/common';
import { MessageService } from './../../_services/message.service';
import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/_models/message';
import { TimeagoModule } from 'ngx-timeago';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css'],
  standalone: true,
  imports: [CommonModule, TimeagoModule]
})
export class MemberMessagesComponent implements OnInit {

  @Input() username?: string;
  @Input() messages: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }


}
