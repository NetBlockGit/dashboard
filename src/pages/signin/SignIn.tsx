import React from "react";
import Card from "../../Component/Card/Card";
import StyledSignIn from "./StyledSignIn";
import { ethers } from "ethers";
import blockerservice from "../../api";
import { GetAuthTokenRequest } from "../../generated/grpc/protos/getauthtoken/getauthtoken_pb";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const location = useLocation();

  type locationState = {
    from:{pathname:string}
  }
  const from = (location.state as locationState)?.from?.pathname || "/";
  const signUsingMetamask = async () => {
    // TODO: handle if no wallet
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const date = new Date();
    const message = `${date.getFullYear()}-${date.toLocaleDateString("en", {
      month: "short",
    })}-${date.getDate()}`;
    const sig = await signer.signMessage(message);
    const req = new GetAuthTokenRequest();
    req.setSignature(sig);
    req.setWalletaddress(await signer.getAddress());
    try {
      const res = await blockerservice.getAuthToken(req, null);
      setToken(res.getToken());
      navigate(from);
    } catch (error) {
      console.log("failed to getAuthToken: %d", error);
    }
  };
  return (
    <StyledSignIn>
      <h1>Congratulations for taking first step, here are the rewards</h1>
      <div className="cards">
        <Card
          place="You control your blocklist, no one else can, not even pro hacker"
          placeholder="Control of blocklist"
          color="#394BE4"
        />
        <Card
          place="You control your blocklist, no one else can, not even pro hacker"
          placeholder="Easy setup DNS"
          color="#29D325"
        />
      </div>

      <h1>Connect using</h1>
      <button onClick={signUsingMetamask}>Meta mask</button>
    </StyledSignIn>
  );
}
