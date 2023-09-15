package com.simard.infinitestories.entities;

import jakarta.persistence.*;

@Entity
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "world_id", nullable = false)
    private World world;

    @Column(name = "gpt_model", nullable = false)
    private String gptModel;

    @ManyToOne
    @JoinColumn(name = "player_id", nullable = false)
    private Player player;

    public Game(World world, String model, Player player) {
        this.world = world;
        this.gptModel = model;
        this.player = player;
    }

    public Game() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public World getWorld() {
        return world;
    }

    public void setWorld(World world) {
        this.world = world;
    }

    public String getGptModel() {
        return gptModel;
    }

    public void setGptModel(String gptModel) {
        this.gptModel = gptModel;
    }

}
