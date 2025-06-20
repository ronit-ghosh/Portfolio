import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { toast } from "sonner";

const LINKS = [
  {
    href: "https://github.com/ronit-ghosh",
    icon: <IconBrandGithub size={26} />,
  },
  {
    href: "https://twitter.com/ronntwt",
    icon: <IconBrandX size={26} />,
  },
  {
    href: "https://www.instagram.com/ronnn_ig/",
    icon: <IconBrandInstagram size={26} />,
  },
  {
    href: "https://www.linkedin.com/in/ronit-ghosh-7b10972a2/",
    icon: <IconBrandLinkedin size={26} />,
  },
  {
    href: "https://t.me/ronn_tg",
    icon: <IconBrandTelegram size={26} />,
  },
  {
    href: "ronnn_dc",
    icon: <IconBrandDiscord size={26} />,
  },
];

export default function Socials() {
  return (
    <div className="flex space-x-1 pt-1">
      {LINKS.map((link, i) => {
        return (
          <Link
            onClick={() => {
              if (link.href === "ronnn_dc") {
                navigator.clipboard.writeText(link.href as string);
                toast("Username copied to clipboard ☑️");
                return;
              }
            }}
            key={i}
            href={link.href === "ronnn_dc" ? "#" : link.href}
            className="cursor-pointer rounded-full p-2 transition-transform hover:scale-105 active:scale-105"
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
}
