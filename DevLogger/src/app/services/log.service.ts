import { Injectable } from '@angular/core';
import { Log } from '..//Models/Log';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

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

  getLogs(): Observable<Log[]>{
    return of(this.logs);
  }

  setFormLog(log : Log) {
    this.logSource.next(log);
  }

}
