import styled from "styled-components";

export const Style = styled.div`
  .boxcontainer {
    margin: AUTO;
    margin-top: 2%;
    margin-left: 2%;
    position: absolute;
    width: 550px;
    height: 52px;
    border: none;
    padding: 0px 10px;
    border-radius: 8px;
    background-color: transparent;
    color: grey;
    box-shadow: 3px 4px 10px gray;
  }
  .elementsContainer {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
  .search {
    border: none;
    height: 100%;
    width: 95%;
    padding: 0px 5px;
    border-radius: 50px;
    font-size: 20px;
    font-family: "Varela Round", sans-serif;
    font-weight: 600;
  }
  .search:focus {
    outline: none;
    margin-right: 1%;
  }
`;
