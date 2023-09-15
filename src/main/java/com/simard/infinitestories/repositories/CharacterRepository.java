package com.simard.infinitestories.repositories;

import com.simard.infinitestories.entities.Character;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CharacterRepository extends JpaRepository<Character, Long> {

    @Query("SELECT c FROM Character c LEFT JOIN Game g ON c.game.id = g.id WHERE g.id = :gameId and c.characterType = 'PLAYER'")
    Character findPlayerCharacterByGameId(@Param("gameId")Long gameId);
}
