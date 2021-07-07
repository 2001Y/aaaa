import { resolve, basename } from "path";
import Head from "next/head";
import Script from "next/script";

export default function HomePage(e) {
  const { fourteen, fifteen, under } = e;
  return (
    <div>
      <Head>
        <Script src="https://aframe.io/releases/1.0.4/aframe.min.js"></Script>
        <Script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></Script>
        <Script src="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-detector.js"></Script>
        <Script src="https://raw.githack.com/AR-js-org/studio-backend/master/src/modules/marker/tools/gesture-handler.js"></Script>
      </Head>

      <body>
        <a-scene
          vr-mode-ui="enabled: false;"
          loading-screen="enabled: false;"
          arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
          id="scene"
          embedded
          gesture-detector
        >
          <a-marker
            type="pattern"
            preset="custom"
            url="assets/14.patt"
            raycaster="objects: .clickable"
            emitevents="true"
            cursor="fuse: false; rayOrigin: mouse;"
          >
            <a-image
              src={"img/14/" + fourteen + ".JPG"}
              id="fourteenElm"
              width="10"
              height="6.75"
              rotation="-90 0 0"
              gesture-handler
            ></a-image>
          </a-marker>

          <a-marker
            type="pattern"
            preset="custom"
            url="assets/15.patt"
            raycaster="objects: .clickable"
            emitevents="true"
            cursor="fuse: false; rayOrigin: mouse;"
          >
            <a-image
              src={"img/15/" + fifteen + ".JPG"}
              id="fifteenElm"
              width="10"
              height="6.75"
              rotation="-90 0 0"
              gesture-handler
            ></a-image>
          </a-marker>

          <a-marker
            type="pattern"
            preset="custom"
            url="assets/under.patt"
            raycaster="objects: .clickable"
            emitevents="true"
            cursor="fuse: false; rayOrigin: mouse;"
          >
            <a-image
              src={"img/under/" + under + ".JPG"}
              id="underElm"
              width="10"
              height="6.75"
              rotation="-90 0 0"
              gesture-handler
            ></a-image>
          </a-marker>

          <a-entity camera></a-entity>
        </a-scene>
      </body>
    </div>
  );
}

export async function getServerSideProps(context) {
  var min = 1;
  var max = 28;
  return {
    props: {
      fourteen: Math.floor(Math.random() * (max + 1 - min)) + min,
      fifteen: Math.floor(Math.random() * (max + 1 - min)) + min,
      under: Math.floor(Math.random() * (max + 1 - min)) + min,
    }, // will be passed to the page component as props
  };
}
