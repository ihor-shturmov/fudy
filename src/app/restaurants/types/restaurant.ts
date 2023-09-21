// Partial model
export interface Restaurant {
  id: string;
  name: string;
  status: RestaurantStatus;
  address: RestaurantAddress;
  website: string;
}

export type Restaurants = Array<Restaurant>;

export type RestaurantStatus = 'ACTIVE' | 'INACTIVE';

export interface RestaurantAddress {
  formattedAddress: string,
}
