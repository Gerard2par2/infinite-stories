package com.simard.infinitestories.repositories;

import com.simard.infinitestories.entities.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query("SELECT p FROM Player p LEFT JOIN Game g ON p.id = g.player.id WHERE g.id = :gameId")
    Optional<Player> findByGameId(@Param("gameId") Long gameId);
}
