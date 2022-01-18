import { useRouter } from "next/router";

import NextLink from "next/link";
import styles from "./styles.module.css";

export default function Link({ href, children }) {
  const router = useRouter();

  const linkActive = router.asPath === href ? styles.active : "";

  return (
    <NextLink href={href}>
      <a className={linkActive}>{children}</a>
    </NextLink>
  );
}
