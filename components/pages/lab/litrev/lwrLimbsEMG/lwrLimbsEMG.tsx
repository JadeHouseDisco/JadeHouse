"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const LwrLimbsEMG = () => {
    interface Heading {
      id: string;
      text: string;
    }
    
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
      const elements = Array.from(document.querySelectorAll('.blog-content h1'));
      const headingData = elements.map(el => {
        const id = el.id;
        const text = (el as HTMLElement).innerText;
        return { id, text };
      });
      setHeadings(headingData);
    }, []);

    return (
        <div key="1" className="flex flex-col min-h-[100dvh]">
            <LabHeader/>

            {/*blogPostIntro Section*/}
            <section className="relative min-h-[clamp(28rem,72svh,52rem)] w-full overflow-hidden">
                <Image
                    alt="Background Image"
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                    sizes="100vw"
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708646/1_qdnizm.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white md:px-6">
                    <h2 className="max-w-6xl text-balance text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight">
                      lwrLimbsEMG
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Lower Limb Analysis Based on Surface Electromyography (sEMG) Using Different Time-frequency Representation Techniques
                    </p>
                </div>
            </section>

            {/*blogPostContents*/}
            <div className="relative flex min-w-0">

              <nav className="sticky top-16 hidden h-[calc(100dvh-4rem)] w-64 flex-none overflow-y-auto bg-black py-8 pl-8 pr-4 xl:block">
                <h2 className="text-3xl font-bold mb-4">Contents</h2>
                <ul>
                  {headings.map(heading => (  
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="block py-2 text-white hover:underline"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="blog-content prose prose-lg mx-auto mb-12 flex-1">
                <p className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  17 March 2024
                </p>

                <h1 id="citation" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Citation
                </h1>
                <p className="my-4 max-w-3xl text-base md:text-lg">
                  Mai, Ramadan, Ibraheem. (2023). Lower Limb Analysis Based on Surface Electromyography (sEMG) Using Different Time-frequency Representation Techniques. International Journal on Advanced Science, Engineering and Information Technology, 13(1):24-24. doi: 10.18517/ijaseit.13.1.16685 [<a className="text-blue-500 text-under underline" target="_blank" href="https://ijaseit.insightsociety.org/index.php/ijaseit/article/view/16685" rel="noreferrer">Link to paper</a>]
                </p>

                <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Summary
                </h1>
                <h2 id="research-question" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Research Question
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Investigate the effectiveness of different time-frequency representation techniques (scalogram, spectrogram, persistence spectrum) in mapping 1D sEMG signals from lower limb muscles onto 2D images for the detection of knee abnormalities.
                  </li>
                </ul>

                <h2 id="research-conducted" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Research Conducted
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Comparative experiments using three time-frequency representation techniques (scalogram, spectrogram, persistence spectrum) to analyze lower limb muscle activity using surface electromyography (sEMG) signals.
                  </li>
                </ul>

                <h2 id="key-results" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Key Results
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Demonstrated that the scalogram technique outperformed spectrogram and persistence spectrum in recognizing knee abnormalities.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Convolutional neural network (CNN) model used for detecting knee abnormalities showed improved performance when fed with 2D projected images from sEMG signals.
                  </li>
                </ul>

                <h2 id="significance" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Significance
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Proposed technique could serve as a clinical tool for diagnosing various muscle activities, potentially enhancing the accuracy of such diagnoses.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Developed 2D deep CNN model can achieve more accurate classification than in classical learning approaches via manually extracted features.
                  </li>
                </ul>

                <hr className="my-12"></hr>

                <h1 id="methods" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Methods
                </h1>
                <h2 id="data-collection" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Data Collection
                </h2>

                <h3 id="acquisition" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Acquisition
                </h3>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Four electrodes were placed on specific muscles and a goniometer on the knee to produce time series data for each muscle during various movements. The muscles analyzed include:
                </p>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Rectus Femoris (RF):</strong> A muscle in the quadriceps group located in the front of the thigh.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Biceps Femoris (BF):</strong> Part of the hamstring muscles, located at the back of the thigh.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Vastus Medialis (VM):</strong> Also part of the quadriceps group, situated medially in the thigh.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Semitendinosus (ST):</strong> Another muscle in the hamstrings group, positioned at the back of the thigh.
                  </li>
                </ul>

                <h3 id="sample-size" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Sample Size and Characteristics
                </h3>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  22 samples were used, with 11 normal and 11 exhibiting knee pathology. Three different movements per subject resulted in 66 records.
                </p>

                <h2 id="data-preparation" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Data Preparation
                </h2>
                <h3 id="signal-preparation" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Signal Preparation and Pre-Processing
                </h3>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Data for each muscle attribute was gathered into 10 muscle data files for both normal and abnormal measurements.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Preprocessing was performed to remove any artifacts while minimizing signal loss.
                  </li>
                </ul>

                <h3 id="data-augmentation" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Data Augmentation
                </h3>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    A time-series generator was used to extend the dataset, resulting in 1056 records of sEMG segment signal for the corresponding muscles.
                  </li>
                </ul>

                <h2 id="2d-mapping" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  2-D Mapping Generation
                </h2>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  1-D sEMG signals were converted into a 2-D time-frequency space using three techniques:
                </p>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Scalogram:</strong> Utilizes Continuous Wavelet Transform (CWT) to analyze sEMG signals in both time and frequency domains, providing a multi-scale analysis.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Spectrogram:</strong> Employs Short-Time Fourier Transform (STFT) to map 1-D signals into 2-D representations, offering spectral information at various time segments.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Persistence Spectrum:</strong> Based on the time percentage a given frequency persists within the signal, useful for tracking and extracting signal ridges in time-frequency maps.
                  </li>
                </ul>

                <h2 id="abnormality-characterization" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Lower Limb Abnormality Characterization
                </h2>
                <h3 id="cnn-development" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Convolutional Neural Network (CNN) Development
                </h3>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    A 12-layer CNN model was utilized to perform binary classification (normal/abnormal) using the 2D structure of the mapped input images.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Four convolutional layers were followed by corresponding pooling layers, leading to three fully connected layers for accurate learning and deep feature extraction.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Hyperparameter tuning was conducted based on loss values to optimize performance and prevent overfitting, with parameters such as the number of kernels, number of fully connected layers, dropout parameters, and ReLU activation function.
                  </li>
                </ul>

                <h2 id="model-training" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Model Training
                </h2>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  10-fold cross-validation was used to assess the model’s performance during hyperparameter tuning.
                </p>

                <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Results
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Scalogram image representation of sEMG signals provided significantly better performance in recognizing knee abnormalities compared to spectrogram and persistence spectrum techniques. The CNN model used in the study was effective in detecting knee abnormalities when fed with 2D projected images of sEMG signals, achieving an accuracy of 86.4%.
                </p>

                <h1 id="discussion" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Discussion
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  The superior performance of the scalogram technique can be attributed to its multi-scale analysis capabilities and the avoidance of window size selection required by the STFT method. The CNN model improved classification of lower limb muscle abnormality by utilizing the mapped 2D image format of sEMG frequency-time instead of time segments of sEMG. The technique of mapping sEMG signals to a 2D space and analyzing them with a CNN model could potentially be used as a clinical tool for detecting muscle abnormalities during various types of movement.
                </p>

                <h1 id="conclusion" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Conclusion
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Scalogram image representation, using continuous wavelet transform (CWT), provides significantly better performance in recognizing knee abnormalities compared to spectrogram and persistence spectrum. The CNN model used for detecting knee abnormalities showed improved classification performance when processing 2D images rather than 1D time-domain signals. This technique could be a potential clinical tool for detecting muscle abnormalities during various types of movement.
                </p>

                <h1 id="prospects" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Prospects
                </h1>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    The technique could be developed into a clinical tool for detecting muscle abnormalities during various types of movement.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Further investigation into a more diverse range of muscles could enhance diagnosis accuracy.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    The paper proposes using automatic deep feature extraction in learning models without additional feature extraction for future work.
                  </li>
                </ul>

                <h1 id="critical-evaluation" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Critical Evaluation
                </h1>

                <h2 id="strength" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Strength
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    The study conducts a comparative experiment between three time-frequency representation techniques (scalogram, spectrogram, and persistence spectrum) for analyzing surface electromyography (sEMG) signals related to lower limb muscle activity.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Utilizes a convolutional neural network (CNN) model to classify knee abnormalities from sEMG signals, demonstrating the effectiveness of deep learning in medical diagnostics.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Employs data augmentation techniques to increase the dataset size, enhancing the robustness and accuracy of the CNN model.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Finds that the scalogram image representation outperforms the other two techniques in recognizing knee abnormalities, highlighting the potential of scalogram for future diagnostic applications.
                  </li>
                </ul>

                <h2 id="weakness" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Weakness
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    sEMG signals are complex and can be easily disturbed by external artifacts like muscle motion or electrode placement.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    The study focuses on a specific set of muscles and movements, which may limit the generalization of the findings to other muscles and types of movement.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    While the study proposes a potential clinical tool for detecting muscle abnormalities, further research is needed to validate its effectiveness in clinical settings.
                  </li>
                </ul>

                <h2 id="biases-issues" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Biases and Issues
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Although not explicitly stated in the paper, factors such as the size and diversity of the dataset, the choice of muscles analyzed, and the robustness of the CNN model against overfitting and noise should be considered.
                  </li>
                </ul>

                <hr className="my-12"></hr>

                <h1 id="personal-notes" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Personal Notes
                </h1>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Traditional methods of feature extraction may not be sufficient because:
                    <ul className="list-disc pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        sEMG signals lack discriminative features.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Signal complexity.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Susceptibility to external artifacts or noises like muscle motion or electrode placement.
                      </li>
                    </ul>
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Automatic deep feature extraction in training the model without the need for additional feature extraction processes.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Converting 1-D sEMG signals into a 2-D time-frequency space may enhance the detection of muscle activity caused by nerve compression resulting from herniated/bulging discs.
                  </li>
                </ul>
              </div>

            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default LwrLimbsEMG;
