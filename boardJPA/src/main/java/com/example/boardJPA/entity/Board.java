package com.example.boardJPA.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.Date;

@Entity
@ToString
@NoArgsConstructor
@Getter @Setter
public class Board {
    @Id
    @Column(name="bnum")
    private Long bnum;

    @Column(name = "btitle")
    private String btitle;

    @Column(name = "bcontents")
    private String bcontents;

    @Column(name = "bdate")
    private Date bdate;

    @Column(name = "bwriter")
    private String bwriter;

    @Column(name = "is_del")
    private String isDel;
}
