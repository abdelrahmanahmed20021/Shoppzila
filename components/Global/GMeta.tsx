export default function GMeta({
  title,
  desc,
  keys,
  author,
}: {
  title: string;
  desc: string;
  keys: string;
  author: string;
}) {
  return (
    <>
      <meta charSet="UTF-8" />
      {!desc ? (
        <meta
          name="description"
          content="Shoppzila is your ultimate shopping destination for fashion, electronics, home essentials, and more. Explore a world of choice, quality, and convenience with amazing deals and discounts. Shop with confidence at Shoppzila!"
        />
      ) : (
        <meta name="description" content={desc} />
      )}
      {!keys ? (
        <meta
          name="keywords"
          content="Shoppzila, shopping, fashion, electronics, home essentials, quality, convenience, deals, discounts"
        />
      ) : (
        <meta name="keywords" content={keys} />
      )}
      {/* HTML Meta Tags */}
      <title>
        Shoppzila: Your Ultimate Shopping Destination for Quality and
        Convenience
      </title>
      <meta
        name="description"
        content="At Shoppzila, we're more than just a shopping website; we're your go-to haven for all things fashion, electronics, home essentials, and more. With an extensive range of products, seamless navigation, and a commitment to delivering exceptional customer experiences, Shoppzila is your one-stop-shop for all your needs."
      />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://shoppzila.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Shoppzila: Your Ultimate Shopping Destination for Quality and Convenience"
      />
      <meta
        property="og:description"
        content="At Shoppzila, we're more than just a shopping website; we're your go-to haven for all things fashion, electronics, home essentials, and more. With an extensive range of products, seamless navigation, and a commitment to delivering exceptional customer experiences, Shoppzila is your one-stop-shop for all your needs."
      />
      <meta
        property="og:image"
        content="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-06/ecommerce-companies.png"
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="shoppzila.vercel.app" />
      <meta property="twitter:url" content="https://shoppzila.vercel.app/" />
      <meta
        name="twitter:title"
        content="Shoppzila: Your Ultimate Shopping Destination for Quality and Convenience"
      />
      <meta
        name="twitter:description"
        content="At Shoppzila, we're more than just a shopping website; we're your go-to haven for all things fashion, electronics, home essentials, and more. With an extensive range of products, seamless navigation, and a commitment to delivering exceptional customer experiences, Shoppzila is your one-stop-shop for all your needs."
      />
      <meta
        name="twitter:image"
        content="https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-06/ecommerce-companies.png"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Shoppzila" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {!title ? (
        <title>
          Shoppzila: Your Ultimate Shopping Destination for Quality and
          Convenience
        </title>
      ) : (
        <title>{title}</title>
      )}
      {!author ? (
        <meta name="author" content="Shoppzila" />
      ) : (
        <meta name="author" content={author} />
      )}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
}
