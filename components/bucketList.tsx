import React from 'react';

interface BucketListProps {
    bucketListProps: {
        titleText: string;
        descriptionText: string;
        bucketList: {
            title: string;
            description: string;
        }[];
    };
}

const BucketList: React.FC<BucketListProps> = ({ bucketListProps }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {bucketListProps.titleText}
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
            {bucketListProps.descriptionText}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
          {bucketListProps.bucketList.map((item, index) => (
            <div key={index} className="group [perspective:1000px]">
              <div
                className="relative h-[300px] w-full cursor-pointer [transform-style:preserve-3d] [transition:transform_0.6s]
              group-hover:[transform:rotateY(180deg)]"
              >
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-800">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-gray-800">
                    <p className="text-sm text-gray-400">{item.description}</p>
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