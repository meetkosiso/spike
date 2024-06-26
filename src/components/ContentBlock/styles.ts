import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  text-align: center;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin-bottom: 15px;
`;

export const ContractAddressContainer = styled("div")`
	display: flex;
  flex-direction: column;
  align-items: center;

`;

export const ContractAddress = styled("p")`
	word-break: break-all;
  text-align: center;
`;

export const ServiceWrapperContainer = styled("div")`
	display: flex;
	flex-direction: column;
	max-width: 100%;
  align-items: center;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const SocialButtonContainer = styled("div")`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;


export const SocialButton = styled("div")`
	height: 75px;
	width: 75px;
	background-color: #ffffff;
	border-radius: 50%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
  cursor: pointer;
`;
