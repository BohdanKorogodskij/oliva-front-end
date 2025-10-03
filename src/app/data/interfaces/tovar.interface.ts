import { ITovarImg } from "./image.interface";

// данные, поля товара полученные от сервера
export interface ITovar {
    id: number,
    name: string,
    salePrice: number,
    description: string,
    imgPath: ITovarImg[]
}