'use client'

import React, { useState } from "react";

import Colorful from '@uiw/react-color-colorful';
import { hsvaToHex } from '@uiw/color-convert';

export default function ColorPicker() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  const [disableAlpha, setDisableAlpha] = useState(false);
  return (
    <>
      {/* <label>
        <input
          type="checkbox"
          checked={disableAlpha}
          onChange={(evn) => setDisableAlpha(evn.target.checked)}
        />
        {disableAlpha ? "Hide" : "Show"} Alpha
      </label> */}
      <Colorful
        color={hsva}
        disableAlpha={disableAlpha}
        onChange={(color) => {
          setHsva(color.hsva);
        }}
      />
      {/* <div style={{ background: hsvaToHex(hsva), marginTop: 30, padding: 10 }}>
        {JSON.stringify(hsva)}
      </div> */}
    </>
  );
}