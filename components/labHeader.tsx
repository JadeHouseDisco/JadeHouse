import SiteHeader from "@/components/siteHeader";

const LabHeader: React.FC = () => {
  return (
    <SiteHeader
      homeHref="/lab"
      logoSrc="https://res.cloudinary.com/dss5ymotz/image/upload/v1758199144/lab_ookoc5.png"
      title="JadeHouse Lab"
      links={[
        { href: "/lab", label: "Home" },
        { href: "/lab/aboutme", label: "About" },
        { href: "/lab/experiences", label: "Experiences" },
        { href: "/lab/ideas", label: "Ideas" },
        { href: "/lab/litrev", label: "Literature Reviews" },
      ]}
    />
  );
};

export default LabHeader;
