import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {EraTitlePipe} from "./pipes/era-title.pipe";
import { ToggleLightThemeComponent } from './components/toggle-light-theme/toggle-light-theme.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimatedInfinityComponent } from './components/animated-infinity/animated-infinity.component';
@NgModule({
  declarations: [
    NavbarComponent,
    EraTitlePipe,
    ToggleLightThemeComponent,
    AnimatedInfinityComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage,
    FontAwesomeModule,
  ],
  exports: [
    NavbarComponent,
    EraTitlePipe,
  ]
})
export class SharedModule { }
