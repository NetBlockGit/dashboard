import styled from "styled-components";

const StyledSignIn = styled.div`
  .cards {
    display: flex;
  }
  .boxcontainer {
    margin: AUTO;
    margin-top: 2%;
    margin-left: 2%;
    position: absolute;
    width: 210px;
    height: 58px;
    border: none;
    padding: 0px 15px;
    border-radius: 10px;
    background-color: transparent;
    color: rgb(10, 10, 10);
    box-shadow: 3px 4px 10px gray;
  }
  .Wallet {
    border: none;
    height: 100%;
    width: 100%;
    padding: 0px 5px;
    border-radius: 150px;
    font-size: 15px;
    font-family: "Varela Round", sans-serif;
    font-weight: 60;
  }
`;

export default StyledSignIn;
