package net.codeslate.keycloak.controller;


import net.codeslate.keycloak.model.User;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class UserController {

    @GetMapping(value = "/user", produces = MediaType.APPLICATION_JSON_VALUE)
    public User getEmployee(@AuthenticationPrincipal Jwt principal) {
        System.out.println("Welcome, authenticated user, " + principal.toString() + "!");
        return new User(principal.getClaimAsString("sub"), principal.getClaimAsString("name"));
    }
}