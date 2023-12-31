import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateWorldFormGroupModel} from "../models/worlds.model";
import {WorldEraEnum, WorldModel} from "../../shared/models/world.model";
import {WorldService} from "../../shared/services/world.service";

@Component({
  selector: 'app-create-world',
  templateUrl: './create-world.component.html',
  styleUrls: ['./create-world.component.scss']
})
export class CreateWorldComponent {

  protected readonly WorldEraEnum = WorldEraEnum;
  protected readonly Object = Object;

  constructor(
    private readonly worldsService: WorldService,
  ) {
  }

  public readonly formGroup = new FormGroup<CreateWorldFormGroupModel>(
    {
      name: new FormControl<string>(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ),
      description: new FormControl<string>(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ),
      era: new FormControl<WorldEraEnum>(
        '' as WorldEraEnum,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ),
    },
  );

  protected onSubmit(e: Event): void {
    e.preventDefault();
    if(this.formGroup.invalid) {
      return;
    }

    const newWorld = this.formGroup.value as WorldModel;

    this.worldsService.createWorld(newWorld).subscribe((world) => {
      console.log(world);
      this.worldsService.updateWorldList();
    });
  }
}
