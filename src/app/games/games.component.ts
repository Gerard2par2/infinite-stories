import {Component, Input, OnInit} from '@angular/core';
import {GameModel} from "../shared/models/game.model";
import {GameService} from "../shared/services/game.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  constructor(
    private readonly gameService: GameService,
  ) { }

  @Input() games!: GameModel[];

  public ngOnInit() {
    if(this.games === null) {
        this.games = this.gameService.getAllGames();
    }
  }

}
