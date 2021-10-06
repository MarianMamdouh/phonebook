package com.jumia.phonebook.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

/*
 * Pagination utility class to wrap our pageable object.
 */

public class PaginationUtils {

  private static final String DESC_SORT_DIRECTION = "DESC";
  private static final String ASC_SORT_DIRECTION = "ASC";

  public static Pageable createPageable(int page, int size, String sortBy, String sortDirection) {
    if (!sortDirection.equals(DESC_SORT_DIRECTION) && !sortDirection.equals(ASC_SORT_DIRECTION)) {
      throw new IllegalArgumentException();
    }
    return PageRequest.of(page, size, Sort.by(Sort.Direction.valueOf(sortDirection), sortBy));
  }
}
