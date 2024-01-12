import {Component, Input} from '@angular/core';
import {EntityCardInputDataModel, EntityFieldInputType} from "../../../models/entity-card.model";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-entity-card-input',
  templateUrl: './entity-card-input.component.html',
  styleUrls: ['./entity-card-input.component.scss']
})
export class EntityCardInputComponent {
  @Input() data!: EntityCardInputDataModel;

  protected get inputType() {
    return this.data.inputType;
  }
  protected get ngModel() {
    return this.data.ngModel;
  }
  protected set ngModel(value: NgModel) {
    this.data.ngModel = value;
  }
  protected get placeholder() {
    return this.data.placeholder;
  }
  protected get options() {
    return this.data.options;
  }
  protected get min() {
    return this.data.min;
  }
  protected get max() {
    return this.data.max;
  }
  protected get step() {
    return this.data.step;
  }
  protected get defaultSelectOptionLabel() {
    return this.data.defaultSelectOptionLabel;
  }

  protected isDefaultInput() {
    return [EntityFieldInputType.TEXT,
      EntityFieldInputType.NUMBER,
      EntityFieldInputType.DATE,
      EntityFieldInputType.EMAIL,
      EntityFieldInputType.PASSWORD,
      EntityFieldInputType.CHECKBOX,
      EntityFieldInputType.RANGE].includes(this.inputType);
  }

  protected isSelectInput() {
    return [EntityFieldInputType.SELECT].includes(this.inputType);
  }

  protected isTextAreaInput() {
    return [EntityFieldInputType.TEXTAREA].includes(this.inputType);
  }

  protected readonly EntityFieldInputType = EntityFieldInputType;
}
