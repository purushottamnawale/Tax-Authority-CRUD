export interface Country {
    pk: number;
    country: string;
}

export interface Tax {
    pk: number;
    name: string;
    country: number;
    taxtype: string;
    zone: string;
    ward: string;
    status: string;
}

export interface TaxAuthority {
    pk: number;
    name: string;
}

export interface TaxRatePK{
    pk:number;
    tax_rate_name:string;
}

export interface TaxRate {
    tax_rate_name: string;
    tax_authority_ref_id: number;
    tax_type_ref_id: string;
    is_active: string;
}

export interface TaxRateDetails {
    header_ref_id:number;
    hsn_sac_no: string;
    description: string;
    fromdate: Date;
    to_date:Date;
    taxrate: number;
    rcm_flag: boolean;
    cess:number;
}