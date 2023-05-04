import { Header } from "./Header";
import { I18n } from "./I18n";

const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: "24px",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <I18n/>
        <Header />
        <div style={styles}>
          {children}
        </div>
      </body>
    </html>
  );
}