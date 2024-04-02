package com.example.boardJPA.controller;

import com.example.boardJPA.entity.Board;
import com.example.boardJPA.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
@RequestMapping("/board")
public class BoardController {
    private BoardService boardService;
    public BoardController(BoardService boardService){
        this.boardService = boardService;
    }


    @GetMapping("/list")
    public List<Board> printBoard(){
        List<Board> boardList = boardService.getAllBoard();
        return boardList;
    }
}
