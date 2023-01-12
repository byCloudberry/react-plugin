import styled from "styled-components";

export const TransparencyGraphDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const TransparencyGraphContainer = styled.div`
  width: ${455 / 1.7}px;
  height: ${600 / 1.7}px;
  margin: ${20 / 1.7}px;
  text-align: center;
  font-family: "Quicksand-regular";
  font-size: ${50 / 1.7}px;
`;
export const Title = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerLeft = styled.div`
  display: flex;
`;

export const HorizontalLineTop = styled.div`
  height: ${3 / 1.7}px;
  width: ${455 / 1.7}px;
  background-color: black;
  position: relative;
`;

export const HorizontalLineBottom = styled.div`
  height: ${3 / 1.7}px;
  width: ${455 / 1.7}px;
  background-color: black;
  position: relative;
  top: ${300 / 1.7}px;
`;

export const BarContainerOnline = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: center;
  width: ${200 / 1.7}px;
  height: ${500 / 1.7}px;
  position: relative;
  text-align: center;
`;

export const OnlinePriceBar = styled.div`
  width: ${150 / 1.7}px;
  height: ${200 / 1.7}px;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  justify-content: center;
  margin-left: 36px;
  position: relative;
  font-family: "Quicksand-regular";
  font-size: ${40 / 1.7}px;
`;

export const BarContainerRetail = styled.div`
  flex-direction: column;
  display: flex;
  width: ${200 / 1.7}px;
  height: ${500 / 1.7}px;
  position: relative;
  text-align: center;
  font-family: "Quicksand-regular";
  font-size: ${40 / 1.7}px;
`;

export const RetailBarTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  width: ${150 / 1.7}px;
  height: ${300 / 1.7}px;
  position: relative;
  margin-bottom: ${5 / 1.7}px;
`;

export const RetailBarBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  width: ${150 / 1.7}px;
  height: ${202 / 1.7}px;
  position: relative;
`;

export const BarTextContainer = styled.div`
  font-family: "Quicksand-regular";
  font-size: 10px;
`;

export const BarTextLeft = styled.text`
  position: relative;
  margin-left: 33px;
`;

export const BarTextRight = styled.text`
  position: relative;
  margin-left: 40px;
`;

export const TextContainer = styled.div`
  width: ${150 / 1.7}px;
  height: ${500 / 1.7}px;
  font-family: "Quicksand-regular";
  font-size: ${20 / 1.7}px;
  font-weight: bold;
  position: relative;
  margin-top: 37px;
  margin-right: 50px;
  white-space: nowrap;
`;

export const RetailPriceText = styled.div`
  width: 130px;
  position: relative;
`;

export const RetailMarkupText = styled.div`
  margin-top: 65px;
  width: 130px;
  position: relative;
`;

export const OurPriceText = styled.div`
  margin-top: 62px;
  position: relative;
`;

export const PriceContainer = styled.div`
  position: relative;
  font-family: "Quicksand-regular";
`;

export const RetailPrice = styled.text`
  font-size: ${25 / 1.7}px;
`;

export const OurPrice = styled.text`
  font-size: ${25 / 1.7}px;
  position: relative;
`;

export const ArrowWrapper = styled.div`
  position: relative;
  margin-top: 37px;
`;

export const ArrowContainer = styled.div`
  margin: 12px;
`;

export const NbrXText = styled.div`
  font-size: ${25 / 1.7}px;
  position: relative;
  margin-left: 15px; ;
`;
