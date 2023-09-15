package com.simard.infinitestories.models.dto;

import java.io.Serializable;
import java.util.Map;

public record GameCreationResponseDto (Map<String, ColorDto> colors, Long gameId) implements Serializable {}
