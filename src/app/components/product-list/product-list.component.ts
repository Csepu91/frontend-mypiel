import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../shared/interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public products: Product[] = [
    {
      nombre: "OILY SKIN ACNIBEN ON THE SPOT",
      marca: "ISDIN",
      empresa: "ISDIN CHILE LTDA.",
      pActivo: ["niacinamida", "ácido salicílico", "ácido mandélico"],
      usos: ["acne", "piel grasa"],
      urlImagen: "https://www.isdin.com/sites/default/files/productos/imagenes/es_thumbnails_22_jul_acniben_onthespot_00.png?v=1658851996"
    },
    {
      nombre: "ERYFOTONA AK-NMSC CREMA CON FOTOLIASA EN LIPOSOMAS Y FILTROS UV FPS-50+ PROTECTOR SOLAR",
      marca: "ISDIN",
      empresa: "ISDIN CHILE LTDA.",
      pActivo: ["DNA Repairsomes", "complejo de filtros UVA/UVB", "extracto de pláncton"],
      usos: ["protector solar"],
      urlImagen: "https://dam.isdin.com/transform/1_1/a7b53916-b279-456b-b96a-baa916e1277e/CL_0834_TH_ERYFOTONAAK-NMSCFLUIDSPF10050ML_MAIN_IMAGE_0"
    },
    {
      nombre: "OILY SKIN ACNIBEN NIGHT CONCENTRATE ANTI-IMPERFECCIONES",
      marca: "ISDIN",
      empresa: "ISDIN CHILE LTDA.",
      pActivo: ["retinaldehido", "zinc PCA", "niacinamida"],
      usos: ["acne", "piel grasa"],
      urlImagen: "https://dam.isdin.com/transform/1_1/802f560a-c34f-4f3b-bfe4-61aa8441d986/ES_4145_TH_ACNIBENANTI-BLEMISHNIGHTCONC27ML_MAIN_IMAGE_0"
    },
    {
      nombre: "ISDINCEUTICS RETINAL INTENSE-SERUM FACIAL RENOVADOR NOCTURNO",
      marca: "ISDIN",
      empresa: "ISDIN CHILE LTDA.",
      pActivo: ["retinaldehído", "bakuchiol", "vit-A-Tech", "melatonina", "niacinamida"],
      usos: ["arrugas", "líneas de expresión", "perdida de firmeza", "piel deshidratada"],
      urlImagen: "https://dam.isdin.com/transform/1_1/1f0849b7-c30f-4480-b429-bc8f390d9b78/CL_4140_TH_ISDINCEUTICSRETINALINTENSE50ML_MAIN_IMAGE_0"
    }
  ]


}
