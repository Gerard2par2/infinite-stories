import { Pipe, PipeTransform } from '@angular/core';
import {WorldEraEnum, WorldEraEnumTitles} from "../models/world.model";

@Pipe({
  name: 'eraTitle'
})
export class EraTitlePipe implements PipeTransform {

  transform(value: string): string {
    return WorldEraEnumTitles[value as unknown as keyof typeof WorldEraEnumTitles];
  }

}
