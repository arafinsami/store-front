import { Shipping } from "../models/shipping";

export class ShippingDto {

    id: number;

    shippingName: string;

    shippingStreet1: string;

    shippingStreet2: string;

    shippingCity: string;

    shippingState: string;

    shippingCountry: string;

    shippingZipcode: string;

    public to(shipping: Shipping): ShippingDto {

        let dto: ShippingDto = new ShippingDto();
        dto.id = shipping.id;
        dto.shippingName = shipping.shippingName;
        dto.shippingStreet1 = shipping.shippingStreet1;
        dto.shippingStreet2 = shipping.shippingStreet2;
        dto.shippingCity = shipping.shippingCity;
        dto.shippingState = shipping.shippingState;
        dto.shippingCountry = shipping.shippingCountry;
        dto.shippingZipcode = shipping.shippingZipcode;
        return dto;
    }
}