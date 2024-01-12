import {NgModel} from "@angular/forms";

export enum EntityFieldInputType {
  TEXT = 'text',
  NUMBER = 'number',
  DATE = 'date',
  EMAIL = 'email',
  PASSWORD = 'password',
  RANGE = 'range',
  CHECKBOX = 'checkbox',
  SELECT = 'select',
  TEXTAREA = 'textarea',
}

export interface EntityCardInputDataModel {
  inputType: EntityFieldInputType;
  ngModel: NgModel;
  placeholder?: string;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  defaultSelectOptionLabel?: string;
}
