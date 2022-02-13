import styled from "styled-components";

const StyledSignIn = styled.div`
  .cards {
    display: flex;
    justify-content: center;
  }
  .boxcontainer {
    border: none;
    padding: 20px 15px;
    border-radius: 10px;
    background-color: transparent;
    color: rgb(10, 10, 10);
    box-shadow: 3px 4px 10px gray;
  }
  .Wallet {
    border: none;
    padding-left: 5px;
    height: 100%;
    width: 100%;
    border-radius: 150px;
    font-size: 22px;
    font-family: "Varela Round", sans-serif;
    font-weight: 60px;
  }
  .padding {
    text-align: center;
  }
  .padding1 {
    text-align: center;
  }
  .padding2 {
    padding-left: 5px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledSignIn;
