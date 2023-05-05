'use client'

import { Button, Flex, IconMinor, Margin, SpaceBetween, Thumbnail } from "@edvisor/product-language";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Nav = styled.div`
  position: fixed;
  width: 100%;
`

const Frame = styled(SpaceBetween)`
  padding: ${Margin.s} ${Margin.xl};
`

const MenuButton = styled(Button)`
  margin-right: ${Margin.s};

  @media (min-width: 1040px) {
    display: none;
  }
`

const Menu = styled.div`
  @media (max-width: 1039px) {
    display: none;
  }
`

export function Header () {
  const pathname = usePathname()

  return (
    <Nav>
      <Frame>
        <Flex>
          {isLogin(pathname) ? null : <MenuButton plain subtle IconPrefix={IconMinor.Bars} />}
          <Thumbnail imageUrl="hello" />
        </Flex>
        {isLogin(pathname) ? null : <Menu>Navigation</Menu>}
        {isLogin(pathname) ? null : <div>Profile</div>}
      </Frame>
    </Nav>
  );
}

function isLogin (pathname: string) {
  return pathname === '/login'
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