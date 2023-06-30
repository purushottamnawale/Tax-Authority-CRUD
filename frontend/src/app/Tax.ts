export interface Country {
    pk: number;
    country: string;
}

export interface Tax {
    name: string;
    country: number;
    taxtype: string;
    zone: string;
    ward: string;
    status: string;
}


export interface TaxRate {
    taxratename: string;
    taxauthority: string;
    taxtype: string;
    status: string;
}

export interface TaxRateDetails {
    hsn_sac_no: string;
    description: string;
    fromdate: number;
    taxrate: number;
    rcmflag: string;
}