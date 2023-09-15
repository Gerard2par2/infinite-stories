package com.simard.infinitestories.config;

import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "com.simard")
@Getter
public class ApplicationProperties {
    private String openAiToken;
}
