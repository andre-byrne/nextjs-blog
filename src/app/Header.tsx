'use client'

import { Margin, SpaceBetween, Thumbnail } from "@edvisor/product-language";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Frame = styled(SpaceBetween)`
  padding: ${Margin.s} ${Margin.xl};
  
`

export function Header () {
  const pathname = usePathname()

  return (
    <Frame>
      <Thumbnail imageUrl="hello" />
      {getNavForPathname(pathname)}
      {getProfileForPathname(pathname)}
    </Frame>
  );
}

function getNavForPathname (pathname: string) {
  switch (pathname) {
    case '/login': return null
    default: return <div>Navigation</div>
  }
}

function getProfileForPathname (pathname: string) {
  switch (pathname) {
    case '/login': return null
    default: return <div>Profile</div>
  }
}