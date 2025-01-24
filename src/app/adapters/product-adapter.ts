import { Product } from "../models/product.model";


export const productsAdapter = (products: Product[]) =>
    products.map((p) => ({ ...p, nombre: p.nombre.toLowerCase() }));