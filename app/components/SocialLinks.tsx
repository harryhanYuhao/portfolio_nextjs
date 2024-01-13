import Link from "next/link";
import { motion } from "framer-motion";

import { WechatIcon, LinkedinIcon, GithubIcon, MailIcon } from "@/app/ui/icons";

const socialLinks = [
  // {
  //   title: "X",
  //   href: "https://twitter.com/iamjideguru",
  //   icon: <XIcon />,
  // },
  {
    title: "Github",
    href: "https://github.com/harryhanYuhao",
    icon: <GithubIcon size="1.5em" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/yuhao-han-357457184",
    icon: <LinkedinIcon />,
  },
  {
    title: "Wechat",
    href: "/wechat",
    icon: <WechatIcon size="1.5em" color="#09B83E" />,
  },
  {
    title: "Mail",
    href: "mailto:harryhan912@gmail.com",
    icon: <MailIcon size="1.5em" />,
  }
];

export default function SocialLinks() {
  return socialLinks.map((nav: any) => {
    return (
      <Link key={nav.title} href={nav.href} className={` relative group`}>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800"
        >
        {nav.icon}
        </motion.div>
      </Link>
    );
  });
}
