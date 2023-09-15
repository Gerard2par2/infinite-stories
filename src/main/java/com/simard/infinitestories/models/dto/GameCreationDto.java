package com.simard.infinitestories.models.dto;

import java.io.Serializable;

public record GameCreationDto(
        Long userId,
        Long worldId,
        String playerCharacterDescription,
        String playerCharacterName,
        String model) implements Serializable {}
