package com.simard.infinitestories.entities;


import com.simard.infinitestories.enums.MemoryTypeEnum;

public class Location extends Memory {
    public Location(Game game, String description) {
        super(game, description, MemoryTypeEnum.LOCATION);
    }
}
