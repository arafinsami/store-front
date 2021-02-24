import { Billing } from "../models/billing";
import { Payment } from "../models/payment";

export class PaymentDto {

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

    public to(payment: Payment): PaymentDto {

        let dto: PaymentDto        = new PaymentDto();
        dto.type                   = payment.type;
        dto.cardName               = payment.cardName;
        dto.cardNumber             = payment.cardNumber;
        dto.expiryMonth            = payment.expiryMonth;
        dto.expiryYear             = payment.expiryYear;
        dto.cvc                    = payment.cvc;
        dto.holderName             = payment.holderName;
        dto.defaultPayment         = payment.defaultPayment;
        dto.billing.billingName    = payment.billing.billingName;
        dto.billing.billingStreet1 = payment.billing.billingStreet1;
        dto.billing.billingStreet2 = payment.billing.billingStreet2;
        dto.billing.billingCity    = payment.billing.billingCity;
        dto.billing.billingState   = payment.billing.billingState;
        dto.billing.billingCountry = payment.billing.billingCountry;
        dto.billing.billingZipcode = payment.billing.billingZipcode;
        return dto;
    }

    public from(payment: Payment): PaymentDto {

        let dto: PaymentDto        = new PaymentDto();
        dto.id                     = payment.id
        dto.type                   = payment.type;
        dto.cardName               = payment.cardName;
        dto.cardNumber             = payment.cardNumber;
        dto.expiryMonth            = payment.expiryMonth;
        dto.expiryYear             = payment.expiryYear;
        dto.cvc                    = payment.cvc;
        dto.holderName             = payment.holderName;
        dto.defaultPayment         = payment.defaultPayment;
        dto.billing.billingName    = payment.billing.billingName;
        dto.billing.billingStreet1 = payment.billing.billingStreet1;
        dto.billing.billingStreet2 = payment.billing.billingStreet2;
        dto.billing.billingCity    = payment.billing.billingCity;
        dto.billing.billingState   = payment.billing.billingState;
        dto.billing.billingCountry = payment.billing.billingCountry;
        dto.billing.billingZipcode = payment.billing.billingZipcode;
        return dto;
    }

}