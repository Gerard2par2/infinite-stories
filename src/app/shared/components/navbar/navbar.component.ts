import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppContextService} from "../../services/app-context.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public constructor(
    private readonly router: Router,
    protected readonly appContextService: AppContextService,
  ) {
  }
  public navigateToHome(): void {
    this.router.navigate(['']);
  }

  public navigateToWorlds(): void {
    this.router.navigate(['worlds']);
  }

  public navigateToGames(): void {
    this.router.navigate(['games']);
  }

}
