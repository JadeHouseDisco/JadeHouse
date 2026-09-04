import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "@/components/icons";
import SiteFooter from "@/components/siteFooter";

export default function MainFooter() {
  return (
    <SiteFooter
      homeHref="/"
      logoSrc="https://res.cloudinary.com/dss5ymotz/image/upload/v1758199145/jadehouse_zzn0yl.png"
      logoAlt="JadeHouse logo"
      title="JadeHouse"
      description="House of memory for my professional and personal life"
      navigation={[
        { href: "/lab", label: "Lab" },
        { href: "/disco", label: "Disco" },
      ]}
      socialLinks={[
        {
          href: "mailto:HYUNWOO001@e.ntu.edu.sg",
          label: "Email Hyunwoo Lee",
          icon: <MailIcon className="h-6 w-6" />,
        },
        {
          href: "https://twitter.com/JadeHouseDisco",
          label: "JadeHouse on X",
          icon: <TwitterIcon className="h-6 w-6" />,
        },
        {
          href: "https://github.com/JadeHouseDisco",
          label: "JadeHouse on GitHub",
          icon: <GithubIcon className="h-6 w-6" />,
        },
        {
          href: "https://linkedin.com/in/hyunwoolee0329",
          label: "Hyunwoo Lee on LinkedIn",
          icon: <LinkedinIcon className="h-6 w-6" />,
        },
      ]}
    />
  );
}
