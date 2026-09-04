"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const ItmtSVCOccl = () => {
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
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708610/1_nenycp.png"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white md:px-6">
                    <h2 className="max-w-6xl text-balance text-[clamp(2rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight">
                      ItmtSVCOccl 
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Intermittent Occlusion of the Superior Vena Cava Reduces Cardiac Filling Pressures in Preclinical Models of Heart Failure
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
                  19 June 2024
                </p>

                <h1 id="summary" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Summary
                </h1>

                <h2 id="research-objective" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Research Objective
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Investigate the acute hemodynamic effects of occlusion of the superior (SVC) versus the inferior vena cava (IVC).
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Test a novel SVC occlusion system in swine models of heart failure (HF).
                  </li>
                </ul>

                <h2 id="results" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Results
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    IVC occlusion acutely reduced left ventricular (LV) systolic and diastolic pressures, LV volumes, cardiac output (CO), and mean arterial pressure (MAP).
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    SVC occlusion reduced LV diastolic pressure and volumes without affecting CO or MAP.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    SVC therapy with the preCARDIA system provided a sustained reduction in cardiac filling pressures with stable CO and MAP.
                  </li>
                </ul>

                <hr className="my-12"></hr>

                <h1 id="methods" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Methods
                </h1>

                <h2 id="research-design" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Research Design
                </h2>

                <h3 id="myocardial-infarction" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Myocardial Infarction
                </h3>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    3.0 × 8 mm angioplasty balloon deployed in the mid-LAD (left anterior descending artery).
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    120 min occlusion, followed by LAD balloon deflation for reperfusion.
                  </li>
                </ul>

                <h3 id="ivc-svc-occlusion-comparison" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Comparison of Acute IVC and SVC Occlusion
                </h3>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    32-cc endovascular balloon deployed via right internal jugular vein.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Balloon inflated to occlude IVC for up to 5 min, followed by a 15-min recovery period.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Balloon repositioned to occlude SVC for up to 5 min, with LV pressure and volume recorded.
                  </li>
                </ul>

                <h3 id="svc-occlusion-heart-failure" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Intermittent SVC Occlusion in a Model of Volume Overload Heart Failure
                </h3>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    120 min LAD occlusion, followed by 120 min right and left renal artery occlusion.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Right and left renal arteries occluded in alternating fashion for 30 min in each artery for an additional 6 h.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    PreCARDIA catheter introduced.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Occlusion phase:
                    <ul className="list-disc pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        5 min SVC occlusion.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        10 sec volume removal (reperfusion).
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Duty cycle performed up to 18 h of continuous pumping.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h2 id="tools" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Tools
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>LV pressure and volume:</strong> 5Fr conductance catheter system deployed via left carotid.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>SVC occlusion:</strong> PreCARDIA catheter introduced via right internal jugular vein with a distal tip positioned in the right or left pulmonary artery and a proximal occlusion balloon positioned in the SVC.
                    <ul className="list-disc pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Semi-compliant, atraumatic balloon occlusion catheter with tubing set and a pump console.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Enables controlled delivery and removal of fluid into the occlusion balloon.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h1 id="results" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Results
                </h1>

                <h2 id="ivc-svc-occlusion" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Occlusion of IVC and SVC
                </h2>

                <h3 id="ivc" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  IVC
                </h3>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  IVC occlusion rapidly reduced cardiac filling pressures but severely reduced total cardiac output and systemic blood pressure:
                </p>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Reduced left ventricular (LV) systolic and diastolic pressures.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Reduced LV volumes.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Reduced cardiac output.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Reduced systemic blood pressure.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Created a gradient of high pressure in the abdomen and low pressure in the left atrium, leading to:
                    <ul className="list-disc pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Increased renal, hepatic, and intestinal vein pressures.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Impaired urine output, hepatic function, and drug absorption.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Exacerbated congestive heart failure.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h3 id="svc" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  SVC
                </h3>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  SVC occlusion rapidly decreased cardiac filling pressures without affecting cardiac output or systemic blood pressure:
                </p>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Reduced LV diastolic pressure and volume.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    No effect on cardiac output.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    No effect on systemic blood pressure.
                  </li>
                </ul>

                <h2 id="intermittent-svc-occlusion" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Intermittent SVC Occlusion (up to 18 hrs)
                </h2>

                <h3 id="measurements" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Measurements
                </h3>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Intermittent SVC occlusion provided sustained reduction in cardiac filling pressure without significant harm or adverse effects:
                </p>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Increased right internal jugular (IJ) venous pressure.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Decreased right atrial (RA) pressure.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Decreased pulmonary capillary wedge pressure (PCWP).
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Decreased mean pulmonary artery (PA) pressure.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    No effect on cardiac output (CO).
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Mean arterial pressure (MAP) remained above 60 mmHg.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    No evidence of increased cerebral edema, pulmonary emboli, or cardiac damage.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    No evidence of SVC damage or thrombosis due to the preCARDIA device.
                  </li>
                </ul>

                <h1 id="discussion" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Discussion
                </h1>

                <h2 id="concerns-limitations" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Concerns and Limitations
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Impact of elevated jugular vein pressure on cerebral function.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Small sample size.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Lack of awareness regarding the effects of prolonged SVC therapy.
                  </li>
                </ul>

                <h2 id="future-studies" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Future Studies
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Test on patients with other preload-dependent conditions, such as:
                    <ul className="list-disc pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        Heart failure with preserved ejection fraction (HFpEF).
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Pulmonary hypertension with right heart congestion.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Valvular regurgitation.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Congestive heart failure.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        Patients without evidence of cardiogenic shock.
                      </li>
                    </ul>
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Increase the number of test subjects.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Prolong SVC therapy to study its effects over an extended period.
                  </li>
                </ul>
              </div>

            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default ItmtSVCOccl;
