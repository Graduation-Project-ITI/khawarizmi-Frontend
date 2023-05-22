import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripePaymentService {

  stripe = Stripe("pk_test_51NATErELaD9VyYUFtojsIfstjial8hsYOgLojrOdvYCcaKXWUnD9Ps8Vr2cswJP0880nqOv1cOeJVt8FVcVZMu0n00oWSJJ4t4");

  constructor() { }
}
