'use client'

import styled, { FlattenSimpleInterpolation, css } from "styled-components";
import { Gap, Margin } from "@edvisor/product-language";

export const Grid = styled.div`
  @media (min-width: 1040px) {
    max-width: 1128px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: ${Gap.l};
    grid-row-gap: 0px;
    padding-left: ${Margin.l};
    padding-right: ${Margin.l};
  }

  @media (min-width: 760px) and (max-width: 1039px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: ${Gap.m};
    grid-row-gap: 0px;
    padding-left: ${Margin.m};
    padding-right: ${Margin.m};
  }

  @media (min-width: 320px) and (max-width: 759px) {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${Gap.m};
    grid-row-gap: 0px;
    padding-left: ${Margin.m};
    padding-right: ${Margin.m};
  }
`

export function makeMedia (styles: {
  desktop: FlattenSimpleInterpolation,
  tablet: FlattenSimpleInterpolation,
  mobile: FlattenSimpleInterpolation,
}) {
  return css`
    @media (min-width: 1040px) {
      ${styles.desktop}
    }

    @media (min-width: 760px) and (max-width: 1039px) {
      ${styles.tablet}
    }

    @media (min-width: 320px) and (max-width: 759px) {
      ${styles.mobile}
    }
  `
}

export const Content = styled.div`
  ${makeMedia({
    desktop: css`
      grid-column: 3 / span 8;
    `,
    tablet: css`
      grid-column: 1 / span 8;
    `,
    mobile: css`
      grid-column: 1 / span 4;
    `,
  })}
` 