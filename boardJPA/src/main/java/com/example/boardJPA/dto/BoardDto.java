package com.example.boardJPA.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class BoardDto {
    private String btitle;
    private String bcontents;
    private Date bdate;
    private String bwriter;
    private String isDel;
}
