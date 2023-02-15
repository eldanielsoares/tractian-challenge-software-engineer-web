import { LoadingComponent } from "@/components/SharedComponents/LoadingComponent";
import { OverviewProvider } from "@/context/OverviewContext";
import { SidebarDrawerProvider } from "@/context/SidebarDrawerContext";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, [router.isReady]);

  return (
    <OverviewProvider>
      <SidebarDrawerProvider>
        <ChakraProvider theme={theme} resetCSS>
          {isLoading ? <LoadingComponent /> : <Component {...pageProps} />}
        </ChakraProvider>
      </SidebarDrawerProvider>
    </OverviewProvider>
  );
}
