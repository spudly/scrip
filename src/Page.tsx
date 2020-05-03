import React, {FC} from 'react';

const Page: FC<{}> = () => (
  <html lang="en">
    <head>
      <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />{' '}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#bee3f8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="/icons/loco-192.png" />
    </head>
    <body>
      <div id="root" />
      <script
        src={`${
          process.env.NODE_ENV === 'development' ? '/public' : ''
        }/index.client.js`}
      />
    </body>
  </html>
);

export default Page;
