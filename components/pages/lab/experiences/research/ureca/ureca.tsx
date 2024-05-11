import Header from "@/components/header";
import Image from 'next/image';

const Ureca = () => {
    const headerImage = {
      src: '/jadehouse_lab.png',
      width: 418,
      height: 538,
    };
  
    const headerText = [
      { text: 'JadeHouse', href: '/' },
      { text: 'Lab', href: '/lab' }
    ];
  
    const headerNavBar = [
        { text: 'Home', href: '/lab', subOptions: [] },
        { text: 'About', href: '#', subOptions: [] },
        {
          href:"#",
          text: 'Experiences',
          subOptions: [
            { text: 'Research', href: '#' },
            { text: 'Work', href: '#' },
            { text: 'Project', href: '#' },
          ],
        },
        { text: 'Ideas', href: '#', subOptions: [] },
        { text: 'Literature Reviews', href: '#', subOptions: [] },
    ];

    return (
        <div key="1" className="flex flex-col min-h-[100dvh]">
            <Header
                imageProps={headerImage}
                titles={headerText}
                dropdownOptions={headerNavBar}
            />
            <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
                <Image
                    alt="Background Image"
                    className="absolute inset-0 w-full h-full object-cover"
                    height="800"
                    src="/test.png"
                    style={{
                    aspectRatio: "1600/800",
                    objectFit: "cover",
                    }}
                    width="1600"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    headText
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    bodytext
                    </p>
                </div>
            </section>
            <div className="prose prose-lg mx-auto max-w-3xl mb-12">
                <h1 className="text-3xl mt-4 max-w-3xl  ">
                    Blog Post Title
                </h1>
                <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    This is the introduction or lead paragraph of your blog post. You can provide
                    a brief overview or hook to engage the reader and set the context for the
                    rest of the content.
                </p>
                <Image
                    alt="Background Image"
                    className="rounded-3xl my-8 inset-0 w-full h-full object-cover"
                    height="800"
                    src="/test.png"
                    style={{
                    aspectRatio: "1600/800",
                    objectFit: "cover",
                    }}
                    width="1600"
                />
                <p className="mt-4 max-w-3xl text-lg md:text-xl">
                    This is the introduction or lead paragraph of your blog post. You can provide
                    a brief overview or hook to engage the reader and set the context for the
                    rest of the content.
                </p>

                <ul className="list-disc my-1 pl-8">
                    <li className="max-w-3xl text-lg md:text-lg">
                        Now this is a story all about how, my life got flipped-turned upside down
                    </li>
                </ul>

                <ol className="list-decimal my-1 pl-8">
                    <li className="max-w-3xl text-lg md:text-lg">
                        Now this is a story all about how, my life got flipped-turned upside down
                    </li>
                </ol>
            </div>
        </div>
      )
  }
  
export default Ureca;