import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private currentUser = {
    name: 'Neville Longbottom',
    passportNumber: 'CT789012'
  };

  getCurrentUser() {
    return this.currentUser;
  }
}