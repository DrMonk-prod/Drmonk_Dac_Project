package com.finddr.dto.appointment;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SimpleSlotDto {
  @JsonFormat(pattern = "hh:mm a")
  private LocalTime time;
  private boolean available;
}
