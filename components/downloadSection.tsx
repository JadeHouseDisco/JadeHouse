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
    <section className="mx-auto mb-12 w-full max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{downloadSectionProps.title}</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {downloadSectionProps.downloads.map((download, index) => (
          <a
            key={index}
            className="inline-flex min-h-10 max-w-full items-center justify-center rounded-md bg-gray-50 px-4 text-center text-gray-900 transition-colors duration-300 ease-in-out hover:bg-[#00a896] focus:outline-none focus:ring-2 focus:ring-gray-300"
            href={download.href}
            target="_blank"
            rel="noopener noreferrer"
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
