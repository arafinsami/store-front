import { Billing } from "./billing";

export class Payment {

     id: number;

     type: string;

     cardName: string;

     cardNumber: string;

     expiryMonth: string;

     expiryYear: string;

     cvc: number;

     holderName: string;

     defaultPayment: boolean;

     billing: Billing;
}