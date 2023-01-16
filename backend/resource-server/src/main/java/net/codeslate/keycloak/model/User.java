package net.codeslate.keycloak.model;

public class User {

    private final String id;

    private final String name;

    public User(String id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String getId() {
        return id;
    }

}

