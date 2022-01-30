import styled from "styled-components";

type props = { color: string };

const Style = styled.div<props>`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
  }

  .container .card {
    position: relative;
    width: 320px;
    height: 440px;
    border-radius: 15px;
    margin: 30px;
  }

  .container .card .box {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .card .box .content {
    padding: 20px;
    border-radius: 15px;
    background: ${(props) => props.color};
  }
  .container .card .box .content h2 {
    font-size: 25px;
    color: #ebf5fc;
  }
  .container .card .box .content p {
    font-size: 20px;
    font-weight: 300px;
    color: #ebf5fcaf;
  }
`;

export default Style;
