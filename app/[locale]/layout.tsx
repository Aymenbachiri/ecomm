import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import MaterialTailwindProvider from "@/components/providers/MaterialTailwind";
import { Providers } from "@/components/providers/ThemeProvider";
import StickyNavbar from "@/components/navbar/StickyNavbar";
import AuthProvider from "@/components/providers/AuthProvider";
import ReduxProvider from "@/components/providers/ReduxProvider";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  const messages = useMessages();
  const nextLocale = useLocale();
  if (nextLocale !== locale) {
    notFound();
  }
  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body>
        <AuthProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ReduxProvider>
              <Providers>
                <MaterialTailwindProvider>
                  <>
                    <StickyNavbar />
                    {children}
                  </>
                </MaterialTailwindProvider>
              </Providers>
            </ReduxProvider>
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
