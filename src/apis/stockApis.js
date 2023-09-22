import axios from "axios";

const SERVER_URL = "https://localhost:3001";
/*해외 주식 이벤트 리스트 GET API를 호출 */
export const getStockEventList = async () => {
    const response = await axios.get(`${SERVER_URL}/globalStockEvents`);
    return response.data;

}