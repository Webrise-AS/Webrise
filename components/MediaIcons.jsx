import styles from "../styles/Home.module.scss";
import { BsLinkedin, BsTiktok, BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function MediaIcons() {
  return (
    <>
      <div className={styles.icons_container}>
        <LinkBox
          Icon={BsLinkedin}
          href={
            "https://www.linkedin.com/company/webrise-no/?viewAsMember=true"
          }
        />
        <LinkBox Icon={BsTiktok} href={"https://www.tiktok.com/"} />
        <LinkBox Icon={BsInstagram} href={"https://www.instagram.com/"} />
      </div>
    </>
  );
}

const LinkBox = ({ Icon, href }) => {
  return (
    <>
      <div className={styles.neutral_link}>
        <Link href={href}>
          <Icon />
        </Link>
      </div>
    </>
  );
};
