import React from "react";

import styles from "./Bullet.module.css";

export function Bullet(props: { children: string }) {
  const { children } = props;

  return (
    <>
      {/* You'll need to add in the name attribute to the input to make the selection logic work  */}
      <input type="radio" id={children} />
      <label htmlFor={children}>{children}</label>
    </>
  );
}
