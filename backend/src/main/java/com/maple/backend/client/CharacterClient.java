package com.maple.backend.client;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

/**
 * 메이플스토리 Open API를 호출하여 캐릭터 정보를 가져오는 클라이언트 클래스입니다.
 */
@Component
@RequiredArgsConstructor
public class CharacterClient {

    // WebClient는 WebClientConfig에서 @Bean으로 설정한 것을 주입받는다.
    private final WebClient webClient;

    /**
     * 캐릭터 이름을 통해 해당 캐릭터의 고유 ID(ocid)를 조회합니다.
     *
     * @param characterName 캐릭터 이름
     * @return ocid (Mono로 감싸진 비동기 단일 값)
     */
    public Mono<String> getOcidByCharacterName(String characterName) {
        return webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/maplestory/v1/id")
                        .queryParam("character_name", characterName)
                        .build())
                .retrieve()
                .bodyToMono(CharacterIdResponse.class)
                .map(CharacterIdResponse::ocid); // DTO에서 ocid 필드만 추출
    }

    /**
     * API 응답 DTO (JSON 형태: { "ocid": "..." })
     */
    private record CharacterIdResponse(String ocid) {}
}
