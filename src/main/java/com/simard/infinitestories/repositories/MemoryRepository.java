package com.simard.infinitestories.repositories;

import com.simard.infinitestories.entities.Memory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MemoryRepository extends JpaRepository<Memory, Long> {
    @Query("SELECT m FROM Memory m where m.game.id = :gameId")
    Optional<List<Memory>> findAllByGameId(Long gameId);
}
