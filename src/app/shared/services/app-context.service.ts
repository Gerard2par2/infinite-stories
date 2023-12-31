import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subject, takeUntil} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppContextService implements OnDestroy{

  public readonly isLightTheme: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private readonly destroy$ = new Subject<void>();

  constructor() {
    this.isLightTheme.pipe(
      takeUntil(this.destroy$)
    ).subscribe((isLightTheme: boolean) => {
      if (isLightTheme) {
        document.body.classList.add('light');
      } else {
        document.body.classList.remove('light');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
