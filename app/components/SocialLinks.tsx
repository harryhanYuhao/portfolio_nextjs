import Link from "next/link";
import { motion } from "framer-motion";

import { LinkedinIcon, GithubIcon, MailIcon, XIcon } from "@/app/ui/icons";

const socialLinks = [
  // {
  //   title: "X",
  //   href: "https://twitter.com/iamjideguru",
  //   icon: <XIcon />,
  // },
  {
    title: "Github",
    href: "https://github.com/harryhanYuhao",
    icon: <GithubIcon size="2em" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/yuhao-han-357457184",
    icon: <LinkedinIcon />,
  },
  {
    title: "X",
    href: "https://twitter.com/han_yuhao",
    icon: <XIcon size="2em" />,
  },
  {
    title: "Mail",
    href: "mailto:y.han@yetin.net",
    icon: <MailIcon size="2em" />,
  },
];

export default function SocialLinks() {
  return socialLinks.map((nav: any) => {
    return (
      <a key={nav.title} href={nav.href} className={` relative group`} target="_blank">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 flex items-center justify-center rounded-full"
        >
          {nav.icon}
        </motion.div>
      </a>
    );
  });
}
