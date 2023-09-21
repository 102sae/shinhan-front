import styles from "./TopNav.module.css";
import Logo from "../../assets/images/logo.svg";
import shareIcon from "../../assets/images/ic_share.svg";
import { Link } from "react-router-dom";

const TopNav = ({ now }) => {
  const APP_DOWNLOAD_LINK =
    "https://open.shinhansec.com/phone/goM.jsp?p=OTUxMCYmJiZTJiY*&amp;v=2";

  const onClickCopyButton = () => {
    // TODO: [미션] 현재 사이트 링크 클립보드 복사하고 알림창 띄우기
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        {/* 로고 */}
        <img src={Logo} alt="logo" />
        <div className={styles.rightButtonContainer}>
          {/*앱 다운로드 버튼 */}
          <a href={APP_DOWNLOAD_LINK} target="_blank">
            <div className={styles.roundButton}>앱 다운로드</div>
          </a>

          {/* 공유 버튼 */}
          <div className={styles.circleButton} onClick={onClickCopyButton}>
            <img src={shareIcon} alt="share" />
          </div>
        </div>
      </div>

      <div className={styles.navContainer}>
        <div
          className={`${styles.leftTab} ${
            now === "국내" ? styles.borderBottom : ""
          }`}
        >
          <Link to="/">국내 주식</Link>
        </div>
        <div
          className={`${styles.rightTab} ${
            now === "국내" ? "" : styles.borderBottom
          }`}
        >
          <Link to="/global">해외 주식</Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
