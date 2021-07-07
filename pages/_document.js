import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {<script src={"https://aframe.io/releases/1.0.4/aframe.min.js"} />}
          {
            <script
              src={
                "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"
              }
            />
          }
          {
            <script
              src={
                "https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-detector.js"
              }
            />
          }
          {
            <script
              src={
                "https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-handler.js"
              }
            />
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
