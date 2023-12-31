import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, take} from "rxjs";
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
      // this.worlds$.next(worlds);
      this.worlds$.next(this.getMockWorlds());
    });
  }

  private getMockWorlds(): WorldModel[] {
    return [
      {name: 'World 1', description: 'Description 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Ut ornare lectus sit amet est placerat in egestas. Sed ullamcorper morbi tincidunt ornare massa eget. Placerat duis ultricies lacus sed turpis tincidunt id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Duis ut diam quam nulla porttitor massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim tortor at auctor urna nunc id cursus. Nunc vel risus commodo viverra maecenas accumsan.'
        , era: WorldEraEnum.PALEOLITHIC, id: 1},
      {name: 'World 2', description: 'Description 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Ut ornare lectus sit amet est placerat in egestas. Sed ullamcorper morbi tincidunt ornare massa eget. Placerat duis ultricies lacus sed turpis tincidunt id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Duis ut diam quam nulla porttitor massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim tortor at auctor urna nunc id cursus. Nunc vel risus commodo viverra maecenas accumsan.'
        , era: WorldEraEnum.NEOLITHIC, id: 2},
      {name: 'World 3', description: 'Description 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Ut ornare lectus sit amet est placerat in egestas. Sed ullamcorper morbi tincidunt ornare massa eget. Placerat duis ultricies lacus sed turpis tincidunt id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Duis ut diam quam nulla porttitor massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim tortor at auctor urna nunc id cursus. Nunc vel risus commodo viverra maecenas accumsan.'
        , era: WorldEraEnum.ANTIQUITY, id: 3},
      {name: 'World 4', description: 'Description 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Ut ornare lectus sit amet est placerat in egestas. Sed ullamcorper morbi tincidunt ornare massa eget. Placerat duis ultricies lacus sed turpis tincidunt id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Duis ut diam quam nulla porttitor massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim tortor at auctor urna nunc id cursus. Nunc vel risus commodo viverra maecenas accumsan.'
        , era: WorldEraEnum.MIDDLE_AGE, id: 4},
      {name: 'World 5', description: 'Description 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Ut ornare lectus sit amet est placerat in egestas. Sed ullamcorper morbi tincidunt ornare massa eget. Placerat duis ultricies lacus sed turpis tincidunt id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Duis ut diam quam nulla porttitor massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim tortor at auctor urna nunc id cursus. Nunc vel risus commodo viverra maecenas accumsan.'
        , era: WorldEraEnum.RENAISSANCE, id: 5},
      {name: 'World 6', description: 'Description 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Ut ornare lectus sit amet est placerat in egestas. Sed ullamcorper morbi tincidunt ornare massa eget. Placerat duis ultricies lacus sed turpis tincidunt id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Duis ut diam quam nulla porttitor massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim tortor at auctor urna nunc id cursus. Nunc vel risus commodo viverra maecenas accumsan.'
        , era: WorldEraEnum.MODERN, id: 6},
      {name: 'World 7', description: 'Description 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Ut ornare lectus sit amet est placerat in egestas. Sed ullamcorper morbi tincidunt ornare massa eget. Placerat duis ultricies lacus sed turpis tincidunt id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Duis ut diam quam nulla porttitor massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim tortor at auctor urna nunc id cursus. Nunc vel risus commodo viverra maecenas accumsan.'
        , era: WorldEraEnum.CONTEMPORARY, id: 7},
      {name: 'World 8', description: 'Description 8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Ut ornare lectus sit amet est placerat in egestas. Sed ullamcorper morbi tincidunt ornare massa eget. Placerat duis ultricies lacus sed turpis tincidunt id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Duis ut diam quam nulla porttitor massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim tortor at auctor urna nunc id cursus. Nunc vel risus commodo viverra maecenas accumsan.'
        , era: WorldEraEnum.NEAR_FUTURE, id: 8},
      {name: 'World 9', description: 'Description 9 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Ut ornare lectus sit amet est placerat in egestas. Sed ullamcorper morbi tincidunt ornare massa eget. Placerat duis ultricies lacus sed turpis tincidunt id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Duis ut diam quam nulla porttitor massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim tortor at auctor urna nunc id cursus. Nunc vel risus commodo viverra maecenas accumsan.'
        , era: WorldEraEnum.FAR_FUTURE, id: 9},
      {name: 'World 10', description: 'Description 10 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Ut ornare lectus sit amet est placerat in egestas. Sed ullamcorper morbi tincidunt ornare massa eget. Placerat duis ultricies lacus sed turpis tincidunt id. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet luctus venenatis lectus magna. Duis ut diam quam nulla porttitor massa. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Enim tortor at auctor urna nunc id cursus. Nunc vel risus commodo viverra maecenas accumsan.'
        , era: WorldEraEnum.ALIEN, id: 10},
    ]
  }

  public getWorlds(): Observable<WorldModel[]> {
    return this.http.get<WorldModel[]>(this.baseUrl);
  }

  public getWorld(id: number): Observable<WorldModel> {
    return this.http.get<WorldModel>(`${this.baseUrl}/${id}`);
  }

  public createWorld(world: WorldModel): Observable<WorldModel> {
    this.worlds$.next(this.worlds$.value.concat(world));
    return this.http.post<WorldModel>(this.baseUrl, world);
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
