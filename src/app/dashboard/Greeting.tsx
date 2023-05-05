'use client'

import { BodyLarge, Button, Display, Flex, Interactive, Margin, Text } from "@edvisor/product-language"
import styled, { css } from "styled-components"
import { UpcomingTrips } from "./UpcomingTrips"

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
  margin-bottom: ${Margin.l};

  @media (min-width: 1040px) {
    ${Hero}
  }

  strong {
    color: ${Interactive.Default.Default};
  }
`

const Description = styled(BodyLarge)`
  margin-bottom: 96px;
`

export function Greeting () {
  return (
    <Frame>
      <Title>
        Hello User, welcome to your <strong>student portal</strong>
      </Title>
      <Description subdued>Here you can update your profile, upload files, and manage your trips.</Description>
    </Frame>
  )
}