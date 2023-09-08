import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/BwVivant-Regular.otf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="bwRegularFont"
    />,
  ])
}