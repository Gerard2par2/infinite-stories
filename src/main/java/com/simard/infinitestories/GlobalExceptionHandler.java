package com.simard.infinitestories;

import com.simard.infinitestories.exceptions.RequestException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RequestException.class)
    public ResponseEntity<String> handleHttpMessageNotReadableException(RequestException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
