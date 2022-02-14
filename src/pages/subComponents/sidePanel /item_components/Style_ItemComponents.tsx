import styled from "styled-components";

export const Style_ItemComponents = styled.div`
    
    font-family: 'Varela Round', sans-serif;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    
    
.home{
    color: #d8d1d1;
    font-size: 25px;
    width: 230px;
    background: transparent;
    border-radius: 10px;
    border: none;
    margin-top: 7px;
    text-align: center;
    
}

.home:hover{
    background-color: white;
    color: black;
    transition:1s;
}

.col{
    color: white;
    text-decoration: none;
}
.col:hover{
    color: black;
}

.hicon{
    position: absolute;
    top: 101px;
    left:53px;
    padding:0px 0px 0px 0px;
    padding-right: 10px;
    
}

.f_hicon{
    position: absolute;
    top: 140px;
    left:53px;
    padding:0px 0px 0px 0px;
    padding-right: 10px;
    
}

.A_hicon{
    position: absolute;
    top: 177px;
    left:53px;
    padding:0px 0px 0px 0px;
    padding-right: 10px;
}

.pad{
    padding-bottom: 3px;
    padding: 0px 180px 0px 0px;
    margin: 60px;
}

.top{
    margin-top: 10px 0px 0px 0px;
}
    `

export default Style_ItemComponents;