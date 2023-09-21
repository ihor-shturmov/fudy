import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddManagerBody, AddManagerBodyForm} from "../../types/restaurant-manager";
import {getManagerForm} from "../../utils/get-manager-form";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-add-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddManagerComponent {
  @Output() addManager: EventEmitter<AddManagerBody> = new EventEmitter<AddManagerBody>();

  readonly form: FormGroup<AddManagerBodyForm> = getManagerForm();
}
