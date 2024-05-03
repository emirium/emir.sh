interface RootLayoutProps {
  children: JSX.Element;
}

export const RootLayout = ({ children }: RootLayoutProps) => (
  <html>
    <head>
      <meta name="color-scheme" content="dark light" />
      <link rel="stylesheet" href="/public/css/main.css" />
      <title>Emir Smajic | Software Engineer</title>
    </head>
    <body>
      <main>{children}</main>
    </body>
  </html>
);
