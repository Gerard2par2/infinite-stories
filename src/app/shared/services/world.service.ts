import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {WorldEraEnum, WorldModel} from "../models/world.model";

@Injectable({
  providedIn: 'root',
})
export class WorldService implements OnInit {
  private readonly baseUrl = 'http://localhost:8080/world';

  public readonly worlds$: BehaviorSubject<WorldModel[]> = new BehaviorSubject<WorldModel[]>([])
  constructor(
    private readonly http: HttpClient,
  ) {
    this.updateWorldList();
  }

  public updateWorldList(): void {
    console.log("updateWorldList")
    this.getWorlds().subscribe((worlds: WorldModel[]) => {
      this.worlds$.next(worlds);
    });
  }

  public getWorlds(): Observable<WorldModel[]> {
    return this.http.get<WorldModel[]>(this.baseUrl);
  }

  public getWorld(id: number): Observable<WorldModel> {
    const world = this.worlds$.value.find((w) => w.id === id);
    if(world === undefined) {
      return this.http.get<WorldModel>(`${this.baseUrl}/${id}`);
    }
    return of(world);
  }

  public createWorld(world: WorldModel): Observable<WorldModel> {
    this.worlds$.next(this.worlds$.value.concat(world));
    return this.http.post<WorldModel>(`${this.baseUrl}/new`, world);
  }

  public updateWorld(world: WorldModel): Observable<WorldModel> {
    this.worlds$.next(this.worlds$.value.map((w) => w.id === world.id ? world : w));
    return this.http.put<WorldModel>(`${this.baseUrl}/${world.id}`, world);
  }

  public deleteWorld(id: number): Observable<void> {
    this.worlds$.next(this.worlds$.value.filter((w) => w.id !== id));
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  public ngOnInit(): void {
    this.updateWorldList()
  }
}
