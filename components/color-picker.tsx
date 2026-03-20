"use client";

import React, { useState } from "react";
import Colorful from "@uiw/react-color-colorful";
import { useColorStore } from "@/atoms";

export default function ColorPicker() {
  const { hsva, setHsva } = useColorStore();
  
  return (
    <Colorful
      color={hsva}
      disableAlpha={true}
      onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
    />
  );
}

// 'use client'

// import { Fragment } from 'react';
// import Wheel from '@uiw/react-color-wheel';
// import { useColorStore } from '@/atoms';

// export default function ColorPicker() {
//   const { hsva, setHsva } = useColorStore();

//   return (
//     <Fragment>
//       <Wheel color={hsva} onChange={(color) => setHsva({ ...hsva, ...color.hsva })} />
//     </Fragment>
//   );
// }
