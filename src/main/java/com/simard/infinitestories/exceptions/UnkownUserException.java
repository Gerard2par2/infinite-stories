package com.simard.infinitestories.exceptions;

public class UnkownUserException extends Exception {
    public UnkownUserException() {
        super("Unknown user");
    }
}
