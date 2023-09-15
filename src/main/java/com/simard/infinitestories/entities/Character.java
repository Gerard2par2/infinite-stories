package com.simard.infinitestories.entities;

import com.simard.infinitestories.enums.CharacterTypeEnum;
import jakarta.persistence.*;

@Entity
@Table(name = "character_entity")
public class Character {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "game_id", nullable = false)
    private Game game;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "characterType", nullable = false)
    private String characterType;

    @Column(name = "description")
    private String description;


    public Character(Game game,String name, String description, CharacterTypeEnum characterType) {
        this.game = game;
        this.name = name;
        this.description = description;
        this.characterType = characterType.name();
    }

    public Character() {
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCharacterType() {
        return characterType;
    }

    public void setCharacterType(String characterType) {
        this.characterType = characterType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
