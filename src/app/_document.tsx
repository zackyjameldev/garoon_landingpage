import Document, { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
