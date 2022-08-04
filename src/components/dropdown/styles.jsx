import styled from "styled-components";

export const DropdownWrapper = styled("div")`
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  flex-direction: column;
`;

export const DropdowContainer = styled("div")`
  background-color: #d9d9d9;
  width: 100%;
  transition: 0.3s;
  top: 0;
  left: 0;
  z-index: 9;
  overflow: hidden;
  border-radius: 0px 0px 5px 5px;
  padding: 20px;
`;

export const DropdownHeader = styled("div")`
  color: #53565a;
  background-color: #d9d9d9;
  padding: 20px;
  border-radius: ${({ open }) => (open ? "5px 5px 0px 0px" : "5px")};
  width: 100%;
  text-decoration: none;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;
  -webkit-tap-highlight-color: transparent;
`;

export const DropdownToogle = styled("button")`
  border: none;
  background-color: #d9d9d9;
  background-color: transparent;
  display; flex;
  cursor: pointer;
  transition: 0.3s;
  transform: rotate(${({ open }) => (open ? "-180deg" : "0")});
  display: flex;
  margin-left: 20px;

  span {
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 6px solid #53565a;
  }
`;
