import SiteHeader from "@/components/siteHeader";

const MainHeader: React.FC = () => {
  return (
    <SiteHeader
      id="main-header"
      homeHref="/"
      logoSrc="https://res.cloudinary.com/dss5ymotz/image/upload/v1758199145/jadehouse_zzn0yl.png"
      title="JadeHouse"
      links={[
        { href: "/lab", label: "Lab" },
        { href: "/disco", label: "Disco" },
      ]}
    />
  );
};

export default MainHeader;
