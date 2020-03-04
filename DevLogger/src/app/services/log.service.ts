import { Injectable } from '@angular/core';
import { Log } from '..//Models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  constructor() { 
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

  getLogs(){
    return this.logs;
  }

}
