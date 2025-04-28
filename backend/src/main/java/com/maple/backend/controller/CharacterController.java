package com.maple.backend.controller;

import com.maple.backend.client.CharacterClient;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/character")
@RequiredArgsConstructor
public class CharacterController {

    private final CharacterClient characterClient;

    @GetMapping("/search")
    public Mono<String> getOcid(@RequestParam String name) {
        return characterClient.getOcidByCharacterName(name);
    }
}