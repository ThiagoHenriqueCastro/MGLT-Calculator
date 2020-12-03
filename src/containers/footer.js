import React from "react";

import { Footer } from "../components/";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Row>
        <Footer.Title>Made with</Footer.Title>
        <Footer.IconHeart />
        <Footer.Title>by Titi.</Footer.Title>
      </Footer.Row>
    </Footer>
  );
}
