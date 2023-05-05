'use client'

import { Badge, Flex, Gap, Label, Padding, Surface } from "@edvisor/product-language"
import styled from "styled-components"
import { isDefined, safeCallback } from "../lib/safe-navigation"

const Frame = styled.button`
  // button reset
  border: none;
  background-color: ${Surface.Default.Default};
  outline: none;

  cursor: pointer;
  display: flex;
  align-items: center;
  padding: ${Padding.xs} ${Padding.m};
  gap: ${Gap.xs};
  border-radius: 6px;

  &:hover {
    background-color: ${Surface.Default.Hover};
  }

  &:focus, :focus-visible {
    background-color: ${Surface.Selected.Default};
  }

  &:active {
    background-color: ${Surface.Default.Pressed};
  }

`

interface INavigationItemProps {
  label: string
  value?: number
  onClick?: () => void
}

export function NavigationItem (props: INavigationItemProps) {
  return (
    <Frame onClick={() => safeCallback(props.onClick)}>
      <Label strong>{props.label}</Label>
      {isDefined(props.value) ? <Badge>{props.value}</Badge> : null}
    </Frame>
  );
}