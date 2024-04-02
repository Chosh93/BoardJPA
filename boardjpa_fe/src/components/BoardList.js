import React, { useEffect, useState } from "react";
import BoardApi from "../api/BoardApi";

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await BoardApi.boardList();
                if(response.status === 200) {
                    setBoardList(response.data);
                    console.log(response.data);
                }
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{padding: "0 110px 0 110px"}}>
            <h1>게시판</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((board) => (
                        <tr key={board.bnum}>
                            <td style={{width: "10%"}}>{board.bnum}</td>
                            <td style={{width: "50%"}}>{board.btitle}</td>
                            <td style={{width: "20%"}}>{board.bwriter}</td>
                            <td style={{width: "20%"}}>{board.bdate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <button onClick={() => {location.href='/board/write'}} type="button" className="btn btn-success" style={{backgroundImage: "var (-bs-gradient)"}}>글쓰기</button> */}
        </div>
    )
}

export default BoardList;