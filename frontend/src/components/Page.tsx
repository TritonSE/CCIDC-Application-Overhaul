import React from "react";

import styles from "/stylesheets/Page.module.css";

export type PageProps = {
  children: React.ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.contentWrapper}>
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};
