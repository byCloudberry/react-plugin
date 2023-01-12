import React from "react";
import {
  ArrowContainer,
  ArrowWrapper,
  BarContainerOnline,
  BarContainerRetail,
  BarTextContainer,
  BarTextLeft,
  BarTextRight,
  HorizontalLineBottom,
  HorizontalLineTop,
  NbrXText,
  OnlinePriceBar,
  OurPrice,
  OurPriceText,
  RetailBarBottom,
  RetailBarTop,
  RetailPrice,
  RetailMarkupText,
  TextContainer,
  TransparencyGraphContainer,
  PriceContainer,
  Title,
  ContainerRight,
  ContainerLeft,
  TransparencyGraphDiv,
  RetailPriceText,
} from "./TransparencyStyle";
import { ArrowNarrowUpIcon } from "@heroicons/react/outline";

/* A components which displays the Transparency-graph. */

const TransparencyGraph = ({ data, name, lang }) => {
  return (
    <TransparencyGraphDiv>
      <TransparencyGraphContainer>
        <Title>{name}</Title>
        <ContainerRight>
          <HorizontalLineTop />
          <HorizontalLineBottom />
          <BarContainerOnline>
            <OnlinePriceBar
              style={{
                background: `linear-gradient(${data.bottomColor},#D9D9D9)`,
              }}
            >
              100%
            </OnlinePriceBar>
          </BarContainerOnline>
          <BarContainerRetail>
            <RetailBarTop
              style={{
                background: `linear-gradient(${data.topColor},#A6A6A6)`,
              }}
            >
              60%
            </RetailBarTop>
            <RetailBarBottom
              style={{
                background: `linear-gradient(${data.bottomColor},#D9D9D9)`,
              }}
            >
              40%
            </RetailBarBottom>
          </BarContainerRetail>

          {lang === "sv" ? (
            <BarTextContainer>
              <BarTextLeft>By Cloudberry</BarTextLeft>
              <BarTextRight style={{ marginLeft: "38px" }}>
                Detaljhandeln
              </BarTextRight>
            </BarTextContainer>
          ) : (
            <BarTextContainer>
              <BarTextLeft>By Cloudberry</BarTextLeft>
              <BarTextRight>Retailer</BarTextRight>
            </BarTextContainer>
          )}
        </ContainerRight>
      </TransparencyGraphContainer>
      <ContainerLeft>
        {lang == "sv" ? (
          <TextContainer style={{ right: "50px" }}>
            <RetailPriceText>Detaljhandelspris</RetailPriceText>
            <RetailMarkupText>Påslag Detaljhandeln</RetailMarkupText>
            <OurPriceText style={{ marginTop: "60px" }}>Vårt Pris</OurPriceText>
          </TextContainer>
        ) : (
          <TextContainer>
            <RetailPriceText>Retail Price</RetailPriceText>
            <RetailMarkupText>Retail Markup</RetailMarkupText>
            <OurPriceText>Our Price</OurPriceText>
          </TextContainer>
        )}
        <PriceContainer>
          <ArrowWrapper>
            <RetailPrice>
              {lang === "sv"
                ? `${data.retailSEK} SEK`
                : `${data.retailEUR} EUR`}
            </RetailPrice>
            <ArrowContainer>
              <ArrowNarrowUpIcon height="35px" />
            </ArrowContainer>
            <NbrXText>x2.5</NbrXText>
            <ArrowContainer>
              <ArrowNarrowUpIcon height="35px" />
            </ArrowContainer>
            <OurPrice>
              {lang === "sv"
                ? `${data.onlineSEK} SEK`
                : `${data.onlineEUR} EUR`}
            </OurPrice>
          </ArrowWrapper>
        </PriceContainer>
      </ContainerLeft>
    </TransparencyGraphDiv>
  );
};

export default TransparencyGraph;
