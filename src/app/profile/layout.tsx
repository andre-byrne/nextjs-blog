'use client'

import { Heading1, Margin } from "@edvisor/product-language"
import { Content as ContentBase } from "../Grid"
import styled from "styled-components"

const Content = styled(ContentBase)`
  @media (min-width: 1040px) {
    grid-column: 1 / span 12;
  }
`

const Title = styled(Heading1)`
  padding-top: 50px;
  margin-bottom: ${Margin.xl};
`

export default function Layout (props: { children: React.ReactNode }) {
  return (
    <>
      <Content>
        <Title>My Profile</Title>
      </Content>
      {props.children}
    </>
  )
}