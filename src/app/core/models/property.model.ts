export interface IProperty {
  id: string;

  title: string;
  description: string;

  type: PropertyType;        // apartment | villa | office | land
  status: PropertyStatus;    // for-sale | for-rent | sold

  price: number;
  currency: 'EGP' | 'USD';

  area: number;              // بالمتر
  bedrooms?: number;
  bathrooms?: number;
  floor?: number;

  location: ILocation;

  amenities: string[];       // ['parking', 'pool', 'elevator']
  images: string[];

  isFeatured: boolean;

  createdAt: string;
  updatedAt: string;
}
export interface ILocation {
  country: string;
  city: string;
  district: string;
  address?: string;

  lat?: number;
  lng?: number;
}
export type PropertyType =
  | 'apartment'
  | 'villa'
  | 'office'
  | 'land';

export type PropertyStatus =
  | 'for-sale'
  | 'for-rent'
  | 'sold';

