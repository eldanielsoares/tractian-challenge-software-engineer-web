import { LoadingComponent } from "@/components/SharedComponents/LoadingComponent";
import { OverviewProvider } from "@/context/OverviewContext";
import { SidebarDrawerProvider } from "@/context/SidebarDrawerContext";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OverviewProvider>
      <SidebarDrawerProvider>
        <ChakraProvider theme={theme} resetCSS>
          <Component {...pageProps} />
        </ChakraProvider>
      </SidebarDrawerProvider>
    </OverviewProvider>
  );
}
