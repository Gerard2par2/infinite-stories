package com.simard.infinitestories.exceptions;

public class InvalidCompletionException extends RuntimeException{
    public InvalidCompletionException(String message, String lastCompletion) {
        super(message + " last completion: '"
                + (lastCompletion.length() > 200
                    ? lastCompletion.substring(0, 199).concat("...")
                    : lastCompletion) + "'"
        );
    }
}
