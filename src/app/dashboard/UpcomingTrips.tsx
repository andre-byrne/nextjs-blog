'use client'

import { Body, BodyLarge, Flex, Heading2, Margin } from "@edvisor/product-language"
import styled from "styled-components"
import { AirportIllustration } from "./AirportIllustration"

const Frame = styled(Flex)`
  padding-top: 96px;
  border-top: 1px solid grey;
  align-items: center;
  flex-direction: column;
`

const PlaceHolder = styled(AirportIllustration)`
  margin-bottom: ${Margin.s};
`

const Description = styled(BodyLarge)`
  margin-bottom: ${Margin.xs};
`

const SupportingText = styled(Body)`
  
`

const Title = styled(Heading2)`
  width: 100%;
  margin-bottom: ${Margin.xl};
`

export function UpcomingTrips () {

  return (
    <Frame>
      <Title>Upcoming Trips</Title>
      <PlaceHolder />
      <Description>You have no upcoming trips</Description>
      <SupportingText>This is where your trips will appear</SupportingText>
    </Frame>
  )
}