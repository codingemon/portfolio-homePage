import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    // 다크모드 적용
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
