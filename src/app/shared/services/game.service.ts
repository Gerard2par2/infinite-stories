import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {GameModel} from "../models/game.model";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly baseUrl = 'http://localhost:8080/game';

  public readonly gamesMap$: BehaviorSubject<Map<number, GameModel[]>> = new BehaviorSubject<Map<number, GameModel[]>>(new Map<number, GameModel[]>());

  constructor(
    private readonly  http: HttpClient,
  ) { }

  public get gamesMap(): Map<number, GameModel[]> {
    return this.gamesMap$.value;
  }

  private saveGameInGamesMap(game: GameModel) {
    const games = this.gamesMap.get(game.worldId);
    this.gamesMap.set(game.worldId, games !== undefined ? games.concat(game) : [game]);
    this.gamesMap$.next(this.gamesMap);
  }

  private fetchGamesByWorldId(worldId: number) {
    const url = this.baseUrl+'/world/'+worldId;
    return this.http.get<GameModel[]>(url);
  }

  public getAllGames(): GameModel[] {
    const gamesList: GameModel[] = [];
    this.gamesMap.forEach((games, _worldId) => {
      games.forEach(game => gamesList.push(game));
      }
    );
    return gamesList;
  }

  public getGamesByWorldId(worldId: number): Observable<GameModel[]> {
    const games = this.gamesMap.get(worldId);
    if(games !== undefined) {
      return of(games);
    }
    return this.fetchGamesByWorldId(worldId).pipe(map((games) => {
      this.gamesMap.set(worldId, games);
      return games;
    }))
  }

  public getGame(id: number): Observable<GameModel> {
    const game = this.gamesMap$.value.get(id)?.find((g) => g.id === id);
    if(game !== undefined) {
      return of(game);
    }

    return this.http.get<GameModel>(`${this.baseUrl}/${id}`).pipe(map((game) => {
      this.saveGameInGamesMap(game);
      return game;
    }));
  }

  public createGame(game: GameModel): Observable<GameModel> {
    this.gamesMap$.next(this.gamesMap.set(game.worldId, this.gamesMap.get(game.worldId)?.concat(game) ?? [game]));
    return this.http.post<GameModel>(`${this.baseUrl}/new`, game);
  }

  public updateGame(game: GameModel): Observable<GameModel> {
    this.gamesMap$.next(this.gamesMap.set(game.worldId, this.gamesMap.get(game.worldId)
      ?.map((g) => g.id === game.id ? game : g) ?? [game]));
    return this.http.put<GameModel>(`${this.baseUrl}/${game.id}`, game);
  }

  public deleteGame(id: number): Observable<void> {
      this.gamesMap.forEach((games, worldId) => {
        this.gamesMap.set(worldId, games.filter((g) => g.id !== id));
      });
      this.gamesMap$.next(this.gamesMap);
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
