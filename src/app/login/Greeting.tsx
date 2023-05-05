'use client'

import { Button, Display, Flex, Interactive, Margin, Text } from "@edvisor/product-language"
import styled from "styled-components"

const Frame = styled(Flex)`
  padding-top: 160px;
  align-items: center;
  flex-direction: column;
`

const Title = styled(Display)`
  text-align: center;
  margin-bottom: ${Margin.xl};

  @media (min-width: 1040px) {
    font-weight: 600;
    font-size: 64px;
    line-height: 77px;
    letter-spacing: -0.01em;
  }

  strong {
    color: ${Interactive.Default.Default};
  }
`

export function Greeting () {
  return (
    <Frame>
      <Title>
        Welcome to your<br /><strong>student portal</strong>
      </Title>
      <Button primary>Login</Button>
    </Frame>
  )
}