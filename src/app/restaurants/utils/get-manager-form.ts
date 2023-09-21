import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddManagerBodyForm} from "../types/restaurant-manager";
import {passwordValidator} from "../validators/password-validator";

export const getManagerForm = (): FormGroup<AddManagerBodyForm> => {
  return new FormGroup<AddManagerBodyForm>({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, passwordValidator()]
    })
  })
}
