import StyledComponentsRegistry from "../lib/registry";
import { Content, Grid } from "./Grid";
import { Header } from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body style={{ margin: '0px' }}>
        <StyledComponentsRegistry>
          <>
            <Header />
            <Grid>
              {children}
            </Grid>
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}