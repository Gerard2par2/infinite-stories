package com.simard.infinitestories.services;

import com.simard.infinitestories.entities.World;
import com.simard.infinitestories.repositories.WorldRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorldService {

    public final WorldRepository worldRepository;

    @Autowired
    public WorldService(WorldRepository worldRepository) {
        this.worldRepository = worldRepository;
    }

    public World findById(Long worldId) {
        return this.worldRepository.findById(worldId).orElse(null);
    }

    public World createAndSaveNewWorld(String name, String description, String era) {
        return this.worldRepository.save(new World(name, description, era));
    }
}
