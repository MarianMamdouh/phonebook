package com.jumia.phonebook.exception;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/*
 * An exception handler class to have one place where we choose
 * how to handle our exceptions thrown everywhere around the code
 * and to specify a unified model for error response body
 */

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

  private static final Logger LOGGER = LoggerFactory.getLogger(RestResponseEntityExceptionHandler.class);

  @ExceptionHandler(value = { IllegalArgumentException.class })
  protected ResponseEntity<Object> handleIllegalArgumentException(IllegalArgumentException ex,
      WebRequest request) {
    LOGGER.warn("(Client Request: {}) caused IllegalArgumentException: {}", request.toString(), ex.getMessage());
    return createErrorResponse(ex, request, HttpStatus.BAD_REQUEST,
        new HttpHeaders());
  }

  private ResponseEntity<Object> createErrorResponse(Exception ex,
      WebRequest request,
      HttpStatus status,
      HttpHeaders headers) {
    String path = getPath(request);
    ErrorModel model = ErrorModel.builder()
        .timestamp(new Date().toString())
        .status(status.value())
        .error(status.getReasonPhrase())
        .exception(ex.getClass().getSimpleName())
        .message(ex.getMessage())
        .path(path).build();
    return handleExceptionInternal(ex, model, headers, status, request);
  }

  private String getPath(WebRequest request) {
    String path;
    if (request instanceof ServletWebRequest) {
      ServletWebRequest servletRequest = (ServletWebRequest) request;
      path = servletRequest.getRequest().getRequestURI();
    } else {
      path = request.getContextPath();
    }
    return path;
  }
}
