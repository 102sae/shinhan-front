import axios from "axios";

//const SERVER_URL = "http://localhost:3001";
const SERVER_URL =
  "https://raw.githubusercontent.com/congchu/shinhan-front/main/src/data/db.json";
/*해외 주식 이벤트 리스트 GET API를 호출 */
export const getStockGlobalEventList = async () => {
  /*
  const response = await axios.get(`${SERVER_URL}/globalStockEvents`);
  return response.data;
  */
  return axios.get(`${SERVER_URL}`).then((res) => res.data.globalStockEvents);
};
