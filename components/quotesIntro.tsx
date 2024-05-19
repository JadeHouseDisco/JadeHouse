import React from 'react';

interface Quote {
  text: string;
  author?: string;
  description: string;
}

interface QuotesIntroProps {
  quotesIntroProps: {
    titleText: string;
    descriptionText: string;
    quotes: Quote[];
  };
}

const QuotesIntro: React.FC<QuotesIntroProps> = ({ quotesIntroProps }) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {quotesIntroProps.titleText}
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl text-gray-400">
            {quotesIntroProps.descriptionText}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          {quotesIntroProps.quotes.map((quote, index) => (
            <div
              key={index}
              className="rounded-lg border p-6 shadow-sm border-gray-800 bg-gray-800"
            >
              <blockquote className="space-y-2">
                <p className="text-xl font-semibold leading-snug">{`"` + quote.text + `"`}</p>
                {quote.author && (
                  <cite className="text-sm text-gray-400">- {quote.author}</cite>
                )}
              </blockquote>
              <p className="mt-4 text-sm text-gray-400">{quote.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesIntro;