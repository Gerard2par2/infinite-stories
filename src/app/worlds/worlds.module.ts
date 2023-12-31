import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorldsComponent} from "./worlds.component";
import {WorldCardComponent} from "./world-card/world-card.component";
import {CreateWorldComponent} from "./create-world/create-world.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EraTitlePipe} from "../shared/pipes/era-title.pipe";
import {SharedModule} from "../shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



@NgModule({
  declarations: [
    WorldsComponent,
    WorldCardComponent,
    CreateWorldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [
    WorldsComponent
  ]
})
export class WorldsModule { }
