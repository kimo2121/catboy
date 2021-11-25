import React, { useEffect, useState } from "react";
import "./home.css";
import punk_300 from "../../assets/images/punk_300.jpeg";
import punk_301 from "../../assets/images/punk_301.jpeg";
import punk_305 from "../../assets/images/punk_305.jpeg";
import punk_304 from "../../assets/images/punk_304.jpeg";
import punk_303 from "../../assets/images/punk_303.jpeg";
import punk_302 from "../../assets/images/punk_302.jpeg";
import punk_311 from "../../assets/images/punk_311.jpeg";
import punk_3 from "../../assets/sliderImg/punk_3.jpeg";
import Rarity from "../../components/Rarity/Rarity";
import MultiSlider from "../../components/Slider/Slider";
import RoadMap from "../../components/RoadMap/RoadMap";
import Mint from "components/Mint/Mint";
import useAuth from "hooks/useAuth";
import { useWeb3React } from "@web3-react/core";
import { truncateWalletString } from "utils";
import CustomizedAccordions from "components/FAQ/FAQ";

const Home: React.FC = () => {
  const routeChange = () => {
    window.location.href = "https://t.me/cartelpunksnft";
  };
  const routeLootex = () => {
    window.location.href = "https://lootex.io/vault";
  };

  const { login } = useAuth();
  const [loginStatus, setLoginStatus] = useState(false);
  const { connector, library, chainId, account, active } = useWeb3React();
  useEffect(() => {
    const isLoggedin =
      account &&
      active &&
      chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
    if (isLoggedin) {
    }
    setLoginStatus(isLoggedin);
  }, [connector, library, account, active, chainId]);

  const loginMetaMask = () => {
    login(1);
  };

  return (
    <div>
      <div className="home">
        <div className="header"></div>
        {/* <h1>
          <span>Cartel</span>Punks
        </h1> */}
        {/* <div className="what-are-cartel">
          <div>
            <h2>
              So,what are Cartel<span>Punks</span>?
            </h2>
            <p>
              <span>Cartel</span>
              Punks are NFTs living on the Binance Smart Chain. We have equal
              FAIR DISTRIBUTION. CartelPunks were designed by hand, but
              algorithmically generated on the Binance Smart Chain.
            </p>
            <button className="collection-btn" onClick={routeLootex}>
              My Collection
            </button>
          </div>
          <img src={punk_300} alt="" />
        </div> */}
        {/* <div className="cartel-attributes">
          <img src={punk_301} alt="" />
          <p>
            Each of these 10,000 CartelPunks has attributes that make them
            unique to establish exclusivity.
          </p>
        </div> */}
        <button className="connect-wallet" onClick={loginMetaMask}>
          {loginStatus ? truncateWalletString(account) : "CONNECT WALLET"}
        </button>
        {loginStatus && <Mint />}
        <div className="set-limit">
          {/* <p>
            We set to limit, you can mint up to maximum 20 CartelPunks in one
            transaction. So you can mint 1 to 20 Punks at a go. Do you want to
            mint more? Start another transaction and mint.
          </p> */}
        </div>
      </div>
      {/* <div className="join-community">
        <div>
          <h2>The Community</h2>
          <p>
            We have a friendly and stably growing community. Join us on our{" "}
            <a href="https://t.me/cartelpunksnft">Telegram</a> to discuss new
            ideas, get notified about drops.
          </p>
          <button onClick={routeChange}>Join</button>
        </div>
        <img src={punk_3} alt="" />
      </div> */}
      <RoadMap />
      <CustomizedAccordions />
      <Rarity />
    </div>
  );
};

export default Home;
