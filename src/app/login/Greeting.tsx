'use client'

import { Button, Display, Flex, Interactive, Margin } from "@edvisor/product-language"
import { useRouter } from "next/navigation"
import styled, { css } from "styled-components"

const Frame = styled(Flex)`
  padding-top: 160px;
  align-items: center;
  flex-direction: column;
`

const Hero = css`
  font-weight: 600;
  font-size: 64px;
  line-height: 77px;
  letter-spacing: -0.01em;
`

const Title = styled(Display)`
  text-align: center;
  margin-bottom: ${Margin.xxl};

  @media (min-width: 1040px) {
    ${Hero}
  }

  strong {
    color: ${Interactive.Default.Default};
  }
`

export function Greeting () {
  const router = useRouter();

  return (
    <Frame>
      <Title>
        Welcome to your<br /><strong>student portal</strong>
      </Title>
      <Button primary onClick={() => router.push('/dashboard')}>Login</Button>
    </Frame>
  )
}