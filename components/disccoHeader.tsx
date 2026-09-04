import SiteHeader from "@/components/siteHeader";

const DiscoHeader: React.FC = () => {
  return (
    <SiteHeader
      homeHref="/disco"
      logoSrc="https://res.cloudinary.com/dss5ymotz/image/upload/v1758199145/disco_r4homm.png"
      title="JadeHouse Disco"
      links={[
        { href: "/disco", label: "Home" },
        { href: "/disco/aboutme", label: "About" },
        { href: "/disco/memories", label: "Memories" },
        { href: "/disco/thoughts", label: "Thoughts" },
        { href: "/disco/music", label: "Music" },
      ]}
    />
  );
};

export default DiscoHeader;
