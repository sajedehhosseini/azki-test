export interface IVehicleCategory {
    id: number;
    title: string;
    usages: {
        id: number;
        title: string;
    }[];
}
