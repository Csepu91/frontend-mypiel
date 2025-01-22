import { ProductPrueba } from "../models";

export const productsPruebaAdapter = (productsPrueba: ProductPrueba[]) =>
    productsPrueba.map((p) => ({ ...p, nombre: p.nombre.toLowerCase() }));