package com.example.boardJPA.service;

import com.example.boardJPA.entity.Board;
import com.example.boardJPA.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    private final BoardRepository boardRepository;

    @Autowired
    public BoardService(BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }

    public List<Board> getAllBoard() {
        return boardRepository.findByIsDel("N");
    }
}
