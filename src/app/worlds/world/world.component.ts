import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WorldService} from "../../shared/services/world.service";
import {WorldModel} from "../../shared/models/world.model";
import {GameModel} from "../../shared/models/game.model";
import {GameService} from "../../shared/services/game.service";

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

    protected world!: WorldModel;
    protected games: GameModel[] = [];

    constructor(
      private readonly worldsService: WorldService,
      private readonly route: ActivatedRoute,
      private readonly gameService: GameService
    ) { }

    ngOnInit(): void {
      const worldId = this.route.snapshot.params['id'];
      this.worldsService.getWorld(worldId).subscribe((world) => {
        this.world = world;
      });
      this.gameService.getGamesByWorldId(worldId).subscribe( games => this.games = games );
    }

}
