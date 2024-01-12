import {Component, Input} from '@angular/core';
import {EntityCardInputDataModel} from "../../models/entity-card.model";
import {faEdit, faSave, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss']
})
export class EntityCardComponent {

  @Input() title?: string;
  @Input() public entityName!: string;
  @Input() public entity!: object;
  @Input() public fieldsToDisplay: (keyof typeof this.entity)[]
    = Object.keys(this.entity) as (keyof typeof this.entity)[]; // default to all fields
  @Input() public fieldsToEditInputDataMap!: Map<keyof typeof this.entity, EntityCardInputDataModel>;

  @Input() public onClick: (entity: object, event?: MouseEvent) => unknown = () => {};
  @Input() public onDelete: (entity: object, event?: MouseEvent) => unknown = () => {};
  @Input() public onEdit: (entity: object, event?: MouseEvent) => unknown = () => {};
  @Input() public onSave: (entity: object, event?: MouseEvent) => unknown = () => {};
  @Input() public onCancel: (entity: object, event?: MouseEvent) => unknown = () => {};

  protected isEditing: boolean = false;

  protected nativeOnEdit(entity: object, event?: MouseEvent) {
    this.isEditing = true;
    this.onEdit(entity, event);
  }

  protected readonly faSave = faSave;
  protected readonly faEdit = faEdit;
  protected readonly faTrash = faTrash;
  protected readonly faTimes = faTimes;
}

