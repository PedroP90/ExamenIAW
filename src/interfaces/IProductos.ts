// Generated by https://quicktype.io

import { IGama } from "./IGamas";

export interface IProducto {
  codigo:      string;
  nombre:      string;
  codgama:     string;
  descripcion: string;
  proveedor:   string;
  stock:       number;
  pvp:         number;
  pcoste:      number;
  imagen:      string;
  gama?:        IGama;
}

