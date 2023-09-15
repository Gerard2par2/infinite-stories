package com.simard.infinitestories.repositories;

import com.simard.infinitestories.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
}
