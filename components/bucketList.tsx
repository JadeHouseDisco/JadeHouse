import React from 'react';
import Image from 'next/image';

interface BucketListProps {
    bucketListProps: {
        titleText: string;
        descriptionText: string;
        bucketList: {
          src: string;  
          title: string;
        }[];
    };
}

const BucketList: React.FC<BucketListProps> = ({ bucketListProps }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {bucketListProps.titleText}
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
            {bucketListProps.descriptionText}
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
          {bucketListProps.bucketList.map((item, index) => (
            <div key={index} className="group [perspective:1000px]">
              <div
                className="relative h-[300px] w-full cursor-pointer [transform-style:preserve-3d] [transition:transform_0.6s]
              group-hover:[transform:rotateY(180deg)]"
              >
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="flex h-full w-full flex-col items-center justify-center text-center rounded-lg bg-gray-800">
                    <div className="relative w-full h-full">
                      <Image 
                        src={item.src} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                        width="544"
                        height="544" 
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex h-full w-full p-2 flex-col items-center justify-center text-center rounded-lg bg-gray-800">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BucketList;
