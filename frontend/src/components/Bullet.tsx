import React from "react";
import styles from "./Bullet.module.css";

export function Bullet(props: {children: string}) {
  const {children} = props;

  return (
    <div>
      <label>
        <input type="radio"/>
        {children}
      </label>
    </div>
  );
}
