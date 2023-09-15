package com.simard.infinitestories.repositories;

import com.simard.infinitestories.entities.World;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorldRepository extends JpaRepository<World, Long> {
}
