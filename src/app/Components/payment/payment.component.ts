// import { AfterViewInit, Component, Input, ViewChild } from "@angular/core";
// import { StripePaymentService } from "src/app/services/payment/stripe-payment.service";
// // import { Http, Response, Headers, RequestOptions } from "@angular/http";
// // import "rxjs/add/operator/catch";
// // import "rxjs/add/operator/toPromise";

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.css']
// })
// export class PaymentComponent implements AfterViewInit {

//   @ViewChild('payElement') payElement:any;
//   @Input() amount: number|undefined;
//   @Input() label: string|undefined;
//   elements: any;
//   paymentRequest: any;
//   prButton: any;

//   constructor(private payServ:StripePaymentService){}

//   ngAfterViewInit(): void {
//     //1. Instantiate the Payment Object
//     this.paymentRequest = this.payServ.stripe.paymentRequest({
//       country: "US",
//       currency: 'usd',
//       total: {
//       amount: this.amount,
//       label: this.label
//       }
//     });

//     //2.Initialize elements
//     this.elements = this.payServ.stripe.elements();

//     //3.register event listener
//     this.paymentRequest.on('source', async (event:any) => {
//     console.log(event);
//     setTimeout(() => {
//     event.complete('success')
//     }, 1000)
//     });

//     //4.create the Button
//     this.prButton = this.elements.create('paymentRequestButton', {
//     paymentRequest: this.paymentRequest,
//     style: {
//     paymentrequestButton: {
//     type: 'buy',
//     theme: 'dark'//optional
//     }
//     }
//     });

//     //mount the button asynchronously
//     this.mountButton();

//   }

//   async mountButton() {
//     const result = await this.paymentRequest.canMakePayment();
//     if (result) {
//     this.prButton.mount(this.payElement.nativeElement)
//     } else {
//     console.error('Something went wrong')
//     }
//   }

// //   http: Http;

// //   takePaymentResult: string;

// //   constructor(http: Http) {
// //     this.http = http;
// //   }

// //   takePayment(productName: string, amount: number, token: any) {
// //     let body = {
// //       tokenId: token.id,
// //       productName: productName,
// //       amount: amount
// //     };
// //     let bodyString = JSON.stringify(body);
// //     let headers = new Headers({ "Content-Type": "application/json" });
// //     let options = new RequestOptions({ headers: headers });

// //     this.http
// //       .post("/api/stripepayment", bodyString, options)
// //       .toPromise()
// //       .then(res => {
// //         this.takePaymentResult = res.json().status;
// //       })
// //       .catch(error => {
// //         this.takePaymentResult = error.message;
// //       });
// //   }

// //   openCheckout(productName: string, amount: number, tokenCallback) {
// //     let handler = (<any>window).StripeCheckout.configure({
// //       key: "your_stripe_publishable_key",
// //       locale: "auto",
// //       token: tokenCallback
// //     });

// //     handler.open({
// //       name: "Our Shop",
// //       description: productName,
// //       zipCode: false,
// //       currency: "gbp",
// //       amount: amount,
// //       panelLabel: "Pay {{amount}}",
// //       allowRememberMe: false
// //     });
// //   }

// //   buyTShirt() {
// //     this.openCheckout("T-Shirt", 1000, (token: any) =>
// //       this.takePayment("T-Shirt", 1000, token)
// //     );
// //   }
// //   buyTrainers() {
// //     this.openCheckout("Trainers", 1500, (token: any) =>
// //       this.takePayment("Trainers", 1500, token)
// //     );
// //   }
// //   buyJeans() {
// //     this.openCheckout("Jeans", 2000, (token: any) =>
// //       this.takePayment("Jeans", 2000, token)
// //     );
// //   }

// }
