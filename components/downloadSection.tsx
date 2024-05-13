import {DownloadIcon} from "@/components/icons"

interface DownloadSectionProps {
  downloadSectionProps: {
    title: string;
    downloads: {
        buttonText: string;
        href: string;
    }[];
  }
}

const DownloadSection: React.FC<DownloadSectionProps> = ({ downloadSectionProps }) => {
  return (
    <section className="px-8 py-4 mb-12">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{downloadSectionProps.title}</h2>
      <div className="mt-6">
        {downloadSectionProps.downloads.map((download, index) => (
            <a
            key={index}
            className="inline-flex items-center justify-center mx-2 h-10 px-4 rounded-md focus:outline-none focus:ring-2 bg-gray-50 text-gray-900 hover:bg-[#00a896] focus:ring-gray-300 transition-colors duration-300 ease-in-out"
            href={download.href}
          >
            <DownloadIcon className="mr-2 h-5 w-5" />
            {download.buttonText}
          </a>
        ))}
      </div>
    </section>
  );
};

export default DownloadSection;