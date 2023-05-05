'use client'

import styled from "styled-components";
import { Gap, Margin } from "@edvisor/product-language";

export const Grid = styled.div`
  @media (min-width: 1040px) {
    max-width: 1128px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: ${Gap.l};
    margin-left: ${Margin.l};
    margin-right: ${Margin.l};
  }

  @media (min-width: 760px) and (max-width: 1039px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: ${Gap.m};
    margin-left: ${Margin.m};
    margin-right: ${Margin.m};
  }

  @media (min-width: 320px) and (max-width: 759px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${Gap.m};
    margin-left: ${Margin.m};
    margin-right: ${Margin.m};
  }
`

export const Content = styled.div`
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