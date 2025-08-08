package com.finddr.dto;

import com.finddr.entity.type.SearchType;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class GlobalSearchResponseDto {
    private Long id;
    private SearchType type;
    private String value;
    private String label;
    private String imgUrl="";
}