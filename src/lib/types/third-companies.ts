type THelpIcon = {
    title: string;
    url: string;
}

type TFeature = {
    icon: string;
    title: string;
    newRelease: boolean;
    description: string;
}

type TBusinessProperty = {
    icon: string | null;
    type: string;
    color: string;
    title: string;
    enabled: boolean;
    primary: boolean;
    description: string;
}

type TInstallmentItem = {
    percent: number;
    month: number;
}

type TInstallment = {
    enable: boolean;
    enableForSellers: boolean;
    underInstallmentLimitPrice: boolean;
    installments: TInstallmentItem[];
    title: string;
    label: string;
    description: string;
    credit: boolean;
    type: number;
    default: boolean;
}

export interface IThirdCompanies {
    id: number;
    title: string;
    satisfaction: number;
    wealthLevel: number;
    complaintResponseTime: number;
    branchNumber: number;
    enable: boolean;
    marketerEnable: boolean;
    available: boolean;
    maxBranchDiscount: number;
    branchDiscountPercent: number;
    maxCompanyDiscount: number;
    companyDiscountPercent: number;
    maxBimitoDiscount: number;
    bimitoDiscountPercent: number;
    maxMarketerDiscount: number;
    marketerDiscountPercent: number;
    bimitoDiscountTitle: string;
    azkiDiscountTitle: string;
    hideDiscount: boolean;
    description: string;
    productDescription: string;
    giftTitle: string;
    hasGift: boolean;
    onlineDamage: boolean;
    features: TFeature[];
    dynamicBadges: unknown[];
    businessProperties: TBusinessProperty[];
    installments: TInstallment[];
    icon: string;
    helpIcons: THelpIcon[];
    companyFloat: number;
    companyCommission: number;
    oldVehicleAge: number;
    oldVehiclePercent: number;
    oldVehiclePenaltyPercent: number;
    extraPercent: number;
    extraPenaltyPercent: number;
    damagedShortTermEnable: boolean;
    maxDayOfPenalty: number;
    forgivenessDescription: string;
    enableExpireDatePayment: boolean;
    shortPenaltyForgiveness: boolean;
    longPenaltyForgiveness: boolean;
    cashPayment: boolean;
    azkiPenaltyDiscountEnable: boolean;
    maxAzkiPenaltyDiscount: number;
}