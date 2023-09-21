import {FormControl} from "@angular/forms";

export interface AddManager {
  restaurantId: string;
  body: AddManagerBody;
}

export interface AddManagerBody {
  email: string;
  password: string;
}

export interface AddManagerBodyForm {
  email: FormControl<string>;
  password: FormControl<string>;
}
