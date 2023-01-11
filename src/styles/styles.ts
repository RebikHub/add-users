import styled from "styled-components";

export const AppDiv = styled.div`
  text-align: center;
  margin-top: 10px;
`

export const UsersTable = styled.table`
  font-size: 22px;
  margin: auto;

  td {
    border: 1px solid grey;
    border-radius: 3px;
    padding-left: 10px;
    padding-right: 10px;
  }
`

export const HeaderTr = styled.tr`
  td {
    cursor: pointer;
  }
`

export const Button = styled.button`
  background-color: cadetblue;
  border: none;
  border-radius: 4px;
  height: 25px;
  padding: 0 10px;
  margin: 5px;
  cursor: pointer;
`

export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin: 5px 0;
  padding-left: 3px;
`