import { Billing } from "../models/billing";

export class BillingDto {

    id: number;

    billingName: string;

    billingStreet1: string;

    billingStreet2: string;

    billingCity: string;

    billingState: string;

    billingCountry: string;

    billingZipcode: string;


    public to(billing: Billing): BillingDto {

        let dto: BillingDto = new BillingDto();
        dto.id = billing.id;
        dto.billingName = billing.billingName;
        dto.billingStreet1 = billing.billingStreet1;
        dto.billingStreet2 = billing.billingStreet2;
        dto.billingCity = billing.billingCity;
        dto.billingState = billing.billingState;
        dto.billingCountry = billing.billingCountry;
        dto.billingZipcode = billing.billingZipcode;
        return dto;
    }
}