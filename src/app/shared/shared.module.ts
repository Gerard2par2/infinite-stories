import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {EraTitlePipe} from "./pipes/era-title.pipe";
import { ToggleLightThemeComponent } from './components/toggle-light-theme/toggle-light-theme.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EntityCardComponent } from './components/entity-card/entity-card.component';
import {FormsModule} from "@angular/forms";
import { EntityCardInputComponent } from './components/entity-card/entity-card-input/entity-card-input.component';

@NgModule({
  declarations: [
    NavbarComponent,
    EraTitlePipe,
    ToggleLightThemeComponent,
    EntityCardComponent,
    EntityCardInputComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [
    NavbarComponent,
    EraTitlePipe,
    EntityCardComponent,
  ]
})
export class SharedModule { }
