import { Component, OnInit } from '@angular/core';
import { GeneratedFile } from '@angular/compiler';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: {
    id: string,
    text: string,
    date: any
  }[];

  constructor() { }

  ngOnInit(): void {
    this.logs = [
      {
        id: '1', text: "GeneratedFile", date: new Date('12/26/2017 12:54:23')
      },
      {
        id:'2', text: "Added Bootstrap", date: new Date('12/26/2017 12:54:23')
      },
      {
        id:'3', text: "Screwed up Log-form", date: new Date('12/26/2017 12:54:23')
      }
    ]
  }

}
