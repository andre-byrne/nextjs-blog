import StyledComponentsRegistry from "../lib/registry";
import { Contents } from "./Contents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Contents>{children}</Contents>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}