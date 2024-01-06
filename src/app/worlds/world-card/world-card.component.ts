import {Component, Input, OnInit, Output} from '@angular/core';
import {WorldEraEnum, WorldModel} from "../../shared/models/world.model";
import {faEdit, faSave, faTimes, faTrash} from "@fortawesome/free-solid-svg-icons";
import {WorldService} from "../../shared/services/world.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-world-card',
  templateUrl: './world-card.component.html',
  styleUrls: ['./world-card.component.scss']
})
export class WorldCardComponent implements OnInit {

  protected isEditing: boolean = false;

  @Input() public world!: WorldModel;

  protected name: string = '';
  protected description: string = '';
  protected era: WorldEraEnum = WorldEraEnum.PALEOLITHIC;

  constructor(
    private readonly worldsService: WorldService,
    private readonly router: Router,
  ) {
  }
  private readonly defaultOnClick = (world: WorldModel, event?: MouseEvent) => {
    console.log('onClick')
    event && event.preventDefault();
    this.router.navigate(['worlds', world.id]);
  }

  private readonly defaultOnDelete = (world: WorldModel, event?: MouseEvent) => {
    console.log('onDelete')
    if(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log("onDelete", world);
    this.worldsService.deleteWorld(world.id).subscribe();
  }

  private readonly defaultOnEdit = (world: WorldModel, event?: MouseEvent) => {
    console.log("onEdit", world);
    if(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isEditing = true;
  }

  @Output() public onClick: (world: WorldModel, event?: MouseEvent) => unknown = this.defaultOnClick;
  @Output() public onDelete: (world: WorldModel, event?: MouseEvent) => unknown = this.defaultOnDelete;
  @Output() public onEdit: (world: WorldModel, event?: MouseEvent) => unknown = this.defaultOnEdit

  protected readonly onSave = (world: WorldModel, event ?: MouseEvent) => {
    console.log("onSave", world);
    if(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isEditing = false;
    this.worldsService.updateWorld(world);
  }

  protected readonly onCancel = (world: WorldModel, event ?: MouseEvent) => {
    console.log("onCancel", world);
    if(event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isEditing = false;
  }

  protected onActionsSpamClick(event: MouseEvent) {
    console.log('onActionsSpanClick')
    event.preventDefault();
    event.stopPropagation();
  }

  protected onInputClick(event: MouseEvent) {
    event.stopPropagation();
  }

  protected readonly faTrash = faTrash;
  protected readonly faEdit = faEdit;
  protected readonly faSave = faSave;

  ngOnInit(): void {
    this.name = this.world.name;
    this.description = this.world.description;
    this.era = this.world.era;
  }

  protected readonly faTimes = faTimes;
  protected readonly Object = Object;
  protected readonly WorldEraEnum = WorldEraEnum;
}
