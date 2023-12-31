import {FormControl} from "@angular/forms";
import {WorldEraEnum} from "../../shared/models/world.model";

export interface CreateWorldFormGroupModel {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  era: FormControl<WorldEraEnum | null>;
}
