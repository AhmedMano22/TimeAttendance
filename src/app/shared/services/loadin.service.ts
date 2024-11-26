import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadinService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  private requestsCount = 0; // Track active requests

  show() {
    this.requestsCount++;
    this.loadingSubject.next(true);
  }

  hide() {
    this.requestsCount--;
    if (this.requestsCount === 0) {
      this.loadingSubject.next(false);
    }
  }
}
