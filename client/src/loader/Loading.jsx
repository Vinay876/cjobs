import React from 'react'
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color:  rgb(156, 39, 176);
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`;
export default function Loading() {
    return (
        <ClockLoader color={' rgb(156, 39, 176)'} css={override} size={80} margin={10} speedMultiplier={2} />
    );
}