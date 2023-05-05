'use client'

import { Borders, Gap, Heading2, InputField, Margin, Padding } from "@edvisor/product-language"
import { Content as ContentBase, Grid, makeMedia } from "../Grid"
import styled, { css } from "styled-components"

const Content = styled.div`
  ${makeMedia({
    desktop: css`
      grid-column: 1 / span 12;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: ${Gap.l};

      padding: ${Margin.xxl} 0;
      border-top: 1px solid ${Borders.Default.Default};
    `,
    tablet: css`
      grid-column: 1 / span 8;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: ${Gap.m};

      padding: ${Margin.xl} 0;
      border-top: 1px solid ${Borders.Default.Default};
    `,
    mobile: css`
      grid-column: 1 / span 4;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: ${Gap.m};

      padding: ${Margin.xl} 0;
      border-top: 1px solid ${Borders.Default.Default};
    `,
  })}
`

const Left = styled(ContentBase)`
  ${makeMedia({
    desktop: css`
      grid-column: 1 / span 4;
    `,
    tablet: css`
      grid-column: 1 / span 8;
    `,
    mobile: css`
      grid-column: 1 / span 4;
    `,
  })}
`

const Right = styled(ContentBase)`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: ${Gap.l};

  ${makeMedia({
    desktop: css`
      grid-column: 5 / span 8;
    `,
    tablet: css`
      grid-column: 1 / span 8;
    `,
    mobile: css`
      grid-column: 1 / span 4;
    `,
  })}
`

const SmallField = styled(InputField)`
  grid-column-end: span 4;
`

const BigField = styled(InputField)`
  grid-column-end: span 8;
`

export function PersonalInformation () {
  return (
    <Content>
      <Left><Heading2>Personal Information</Heading2></Left>
      <Right>
        <SmallField label='First name' />
        <SmallField label='Last name' />
        <SmallField label='First name' />
        <SmallField label='Last name' />
        <SmallField label='First name' />
        <SmallField label='Last name' />
        <SmallField label='First name' />
        <SmallField label='Last name' />
        <BigField label='Home Address' />
        <SmallField label='First name' />
        <SmallField label='Last name' />
      </Right>
    </Content>
  )
}