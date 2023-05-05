'use client'

import styled from "styled-components";
import { Header } from "./Header";
import { Gap } from "@edvisor/product-language";

const Frame = styled.div`
  @media (min-width: 1040px) {
    max-width: 1128px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: ${Gap.l};
  }

  @media (min-width: 760px) and (max-width: 1039px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: ${Gap.m};
  }

  @media (min-width: 320px) and (max-width: 759px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${Gap.m};
  }
`

const Content = styled.div`
  @media (min-width: 1040px) {
    grid-column: 3 / span 8;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 760px) and (max-width: 1039px) {
    grid-column: 1 / span 8;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  @media (min-width: 320px) and (max-width: 759px) {
    grid-column: 1 / span 4;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

export function Grid (props: { children: React.ReactNode }) {
  return (
      <Frame>
        <Content>
          {props.children}
        </Content>
      </Frame>
  );
}