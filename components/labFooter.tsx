import {
  GithubIcon,
  GoogleScholarIcon,
  LinkedinIcon,
  MailIcon,
  ORCIDIcon,
  YoutubeIcon,
} from "@/components/icons";
import SiteFooter from "@/components/siteFooter";

export default function LabFooter() {
  return (
    <SiteFooter
      homeHref="/lab"
      logoSrc="https://res.cloudinary.com/dss5ymotz/image/upload/v1758199144/lab_ookoc5.png"
      logoAlt="JadeHouse Lab logo"
      title="JadeHouse Lab"
      description="Portfolio of my professional life"
      navigation={[
        { href: "/lab", label: "Home" },
        { href: "/lab/aboutme", label: "About" },
        { href: "/lab/experiences", label: "Experiences" },
        { href: "/lab/ideas", label: "Ideas" },
        { href: "/lab/litrev", label: "Literature Reviews" },
      ]}
      socialLinks={[
        {
          href: "mailto:HYUNWOO001@e.ntu.edu.sg",
          label: "Email Hyunwoo Lee",
          icon: <MailIcon className="h-6 w-6" />,
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
        {
          href: "https://www.youtube.com/@JadeHouseCinema",
          label: "JadeHouse Cinema on YouTube",
          icon: <YoutubeIcon className="h-6 w-6" />,
        },
        {
          href: "https://scholar.google.com/citations?hl=en&user=G5N12aYAAAAJ",
          label: "Hyunwoo Lee on Google Scholar",
          icon: <GoogleScholarIcon className="h-6 w-6" />,
        },
        {
          href: "https://orcid.org/0009-0004-2586-0493",
          label: "Hyunwoo Lee on ORCID",
          icon: <ORCIDIcon className="h-6 w-6" />,
        },
      ]}
    />
  );
}
