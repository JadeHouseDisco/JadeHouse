import { InstagramIcon, MailIcon, TwitterIcon, YoutubeIcon } from "@/components/icons";
import SiteFooter from "@/components/siteFooter";

export default function DiscoFooter() {
  return (
    <SiteFooter
      homeHref="/disco"
      logoSrc="https://res.cloudinary.com/dss5ymotz/image/upload/v1758199145/disco_r4homm.png"
      logoAlt="JadeHouse Disco logo"
      title="JadeHouse Disco"
      description="Archive of my personal life"
      navigation={[
        { href: "/disco", label: "Home" },
        { href: "/disco/aboutme", label: "About" },
        { href: "/disco/memories", label: "Memories" },
        { href: "/disco/thoughts", label: "Thoughts" },
        { href: "/disco/music", label: "Music" },
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
          href: "https://www.instagram.com/jadehousedisco/",
          label: "JadeHouse on Instagram",
          icon: <InstagramIcon className="h-6 w-6" />,
        },
        {
          href: "https://www.youtube.com/@JadeHouseCinema",
          label: "JadeHouse Cinema on YouTube",
          icon: <YoutubeIcon className="h-6 w-6" />,
        },
      ]}
    />
  );
}
