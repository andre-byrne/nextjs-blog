import StyledComponentsRegistry from "../lib/registry";
import { Grid } from "./Grid";
import { Header } from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <>
            <Header />
            <Grid>{children}</Grid>
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}