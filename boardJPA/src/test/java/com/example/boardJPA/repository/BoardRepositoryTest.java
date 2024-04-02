package com.example.boardJPA.repository;

import com.example.boardJPA.entity.Board;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

class BoardRepositoryTest {
    @Autowired
    private BoardRepository boardRepository;

    @Test
    @DisplayName("board 조회 테스트")
    public void boardlistTest(){
        List<Board> list = boardRepository.findAll();
        for(Board boardEntity : list){
            System.out.println(boardEntity.toString());
        }
    }
}