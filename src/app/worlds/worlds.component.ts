import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {WorldModel} from "../shared/models/world.model";
import {WorldService} from "../shared/services/world.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.component.html',
  styleUrls: ['./worlds.component.scss']
})
export class WorldsComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject<void>();

  public worlds: WorldModel[] = [];

  constructor(
    private readonly worldService: WorldService,
    private readonly changeDetector: ChangeDetectorRef,
  ) { }

  public ngOnInit() {
    this.worldService.worlds$.pipe(takeUntil(this.destroy$))
      .subscribe((worlds: WorldModel[]) => {
        this.worlds = worlds;
        this.changeDetector.detectChanges();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
