import { Component } from '@angular/core';
import {AppContextService} from "../../services/app-context.service";
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toggle-light-theme',
  templateUrl: './toggle-light-theme.component.html',
  styleUrls: ['./toggle-light-theme.component.scss']
})
export class ToggleLightThemeComponent {
  constructor(
    public readonly appContextService: AppContextService,
  ) { }

  public toggleLightTheme($event: boolean): void {
    this.appContextService.isLightTheme.next($event);
  }

  protected readonly faSun = faSun;
  protected readonly faMoon = faMoon;
}
