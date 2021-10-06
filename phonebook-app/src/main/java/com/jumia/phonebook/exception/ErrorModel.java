package com.jumia.phonebook.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/*
 * An error model class to work as a wrapper for exceptions
 * in order to have a nice readable error response body.
 */

@Setter
@Getter
@AllArgsConstructor
public class ErrorModel {
  private String timestamp;
  private Integer status;
  private String error;
  private String exception;
  private String message;
  private String path;

  private ErrorModel(Builder builder) {
    this(builder.timestamp,
        builder.status,
        builder.error,
        builder.exception,
        builder.message,
        builder.path);
  }

  public static Builder builder() {
    return new Builder();
  }

  public static class Builder {
    private String timestamp;
    private Integer status;
    private String error;
    private String exception;
    private String message;
    private String path;

    private Builder() {
    }

    public Builder timestamp(String timestamp) {
      this.timestamp = timestamp;
      return this;
    }

    public Builder status(Integer status) {
      this.status = status;
      return this;
    }

    public Builder error(String error) {
      this.error = error;
      return this;
    }

    public Builder exception(String exception) {
      this.exception = exception;
      return this;
    }

    public Builder message(String message) {
      this.message = message;
      return this;
    }

    public Builder path(String path) {
      this.path = path;
      return this;
    }

    public ErrorModel build() {
      return new ErrorModel(this);
    }
  }
}
