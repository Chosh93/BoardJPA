import axios from "axios";

const Domain = "http://localhost:8111";

const BoardApi = {

    boardList : async() => {
        return await axios.get(Domain + "/board/list");
    },
}

export default BoardApi;