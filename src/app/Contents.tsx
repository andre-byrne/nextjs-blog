'use client'

import styled from "styled-components";
import { Header } from "./Header";

const Grid = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
`

export function Contents (props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Grid>{props.children}</Grid>
    </>
  );
}