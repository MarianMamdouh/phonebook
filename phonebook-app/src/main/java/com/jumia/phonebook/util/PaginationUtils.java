package com.jumia.phonebook.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class PaginationUtils {

  private static final String DESC_SORT_DIRECTION = "DESC";
  private static final String ASC_SORT_DIRECTION = "ASC";
  private static final String ID = "id";

  public static Pageable createPageable(int page, int size, String sortBy, String sortDirection) {
    if (!sortDirection.equals(DESC_SORT_DIRECTION) && !sortDirection.equals(ASC_SORT_DIRECTION)) {
      throw new IllegalArgumentException();
    }
    //kan mwgod hena l id shofy mohm wala la2
    return PageRequest.of(page, size, Sort.by(Sort.Direction.valueOf(sortDirection), sortBy));
  }
}
