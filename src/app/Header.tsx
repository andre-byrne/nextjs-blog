'use client'

import { Button, Flex, Gap, IconMinor, Margin, SpaceBetween, Surface, Thumbnail } from "@edvisor/product-language";
import { usePathname, useRouter } from "next/navigation";
import styled from "styled-components";
import { NavigationItem } from "./NavigationItem";

const Nav = styled.div`
  position: sticky;
  background-color: ${Surface.Default.Default};
  top: 0px;
  width: 100%;
`

const Frame = styled(SpaceBetween)`
  padding: ${Margin.s} ${Margin.xl};
  align-items: center;
`

const MenuButton = styled(Button)`
  margin-right: ${Margin.s};

  @media (min-width: 1040px) {
    display: none;
  }
`

const Menu = styled(Flex)`
  align-items: center;
  gap: ${Gap.l};

  @media (max-width: 1039px) {
    display: none;
  }
`

export function Header() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Nav>
      <Frame>
        <Flex>
          {isLogin(pathname) ? null : (
            <MenuButton plain subtle IconPrefix={IconMinor.Bars} />
          )}
          <Thumbnail imageUrl="hello" />
        </Flex>
        {isLogin(pathname) ? null : (
          <Menu>
            <NavigationItem
              label="Home"
              onClick={() => router.push("/dashboard")}
            />
            <NavigationItem label="Trips" />
            <NavigationItem label="Files" value={1} />
          </Menu>
        )}
        {isLogin(pathname) ? null : (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/profile")}
          >
            Profile
          </div>
        )}
      </Frame>
    </Nav>
  );
}

function isLogin(pathname: string) {
  return pathname === "/login";
}
