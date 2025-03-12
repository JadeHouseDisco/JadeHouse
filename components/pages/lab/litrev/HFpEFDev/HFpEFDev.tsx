"use client"

import { useEffect, useState } from 'react';
import LabHeader from "@/components/labHeader"
import Image from 'next/image';
import LabFooter from '@/components/labFooter';

const HFpEFDev = () => {
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
            <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
                <Image
                    alt="Background Image"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://res.cloudinary.com/dss5ymotz/image/upload/v1730708587/1_vsjyjo.jpg"
                    height="858"
                    width="858"
                />
                <div className="absolute inset-0 bg-gray-900/30"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black from-0% to-transparent to-20%" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-80% to-black to-100%" />
                <div className="relative flex flex-col items-center justify-center h-full px-4 md:px-6 text-center text-white">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                      HFpEFDev 
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg md:text-xl">
                      Device-Based Solutions to Improve Cardiac Physiology and Hemodynamics in Heart Failure With Preserved Ejection Fraction
                    </p>
                </div>
            </section>

            {/*blogPostContents*/}
            <div className="relative flex">

              <nav className="sticky top-0 flex-none w-56 h-screen py-8 pl-8 bg-black overflow-y-auto">
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

              <div className="prose prose-lg mx-auto max-w-3xl mb-12 blog-content">
                <p className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  8 June 2024
                </p>

                <h1 id="hfpEF" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Heart Failure with Preserved Ejection Fraction (HFpEF)
                </h1>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  HFpEF is a type of heart failure where the pumping action (measured by ejection fraction) is normal or near-normal, but the heart muscle is stiff, impairing its ability to relax and fill with blood properly. It is a multifactorial disease with various etiologies and phenotypes. Due to the complexity of the condition and limited data, guidelines and treatments are lacking.
                </p>

                <h2 id="characteristics" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Characteristics
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Diminished ventricular compliance:</strong> The heart's ventricles become stiffer, making it harder to fill with blood during diastole.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Diastolic dysfunction:</strong> The heart's ability to relax and fill with blood during the diastolic phase is impaired, leading to inadequate blood flow.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Symptoms of heart failure despite normal ejection performance, including:
                    <ul className="list-disc pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Pulmonary hypertension:</strong> Increased blood pressure in the pulmonary arteries, causing strain on the right side of the heart.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Limited cardiac reserve:</strong> The heart's reduced ability to increase its output during stress or exercise.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Autonomic imbalance:</strong> A disruption in the autonomic nervous system, affecting heart rate and blood pressure regulation, which can contribute to cardiovascular issues.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Exercise intolerance:</strong> Difficulty or inability to perform physical activities at the expected level.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h2 id="causation" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Causation
                </h2>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  HFpEF is often caused by thickening and stiffening of the left ventricular (LV) wall due to:
                </p>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Isoform shifts
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Alterations in its phosphorylation state
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Oxidative stress–induced disulfide bridge formation
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    LV pressure overload
                  </li>
                </ul>

                <h1 id="assessment" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Assessment
                </h1>
                <h2 id="causation" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Echocardiography
                </h2>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Echocardiography is commonly used to assess HFpEF, particularly focusing on:
                </p>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Ejection Fraction:</strong> The percentage of blood pumped out of the ventricles with each heartbeat.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Parameters to assess diastolic function:
                    <ul className="list-disc pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>E/A Ratio:</strong> The ratio of early (E) to late (A) ventricular filling velocities.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>E/e’ Ratio:</strong> The ratio of mitral inflow velocity (E) to mitral annular early diastolic velocity (e’), indicating left ventricular filling pressures.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Left Atrial Volume Index (LAVI):</strong> Increased left atrial size suggests chronic elevated filling pressures.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Left Ventricular Mass Index (LVMI):</strong> Increased LV mass can indicate hypertrophy, common in HFpEF.
                      </li>
                    </ul>
                  </li>
                </ul>

                <h2 id="causation" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Hemodynamic Measurements
                </h2>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Right heart catheterization:</strong>
                    <ul className="list-disc pl-8">
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Pulmonary capillary wedge pressure (PCWP):</strong> Measurement reflecting the pressure in the left atrium, used to estimate left ventricular filling pressures.
                      </li>
                      <li className="max-w-3xl text-base md:text-lg">
                        <strong>Left ventricular end-diastolic pressure (LVEDP):</strong> Pressure in the left ventricle at the end of filling (diastole), indicating ventricular compliance and preload.
                      </li>
                    </ul>
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Pressure-Volume characteristics:</strong> End-diastolic pressure-volume relationship (EDPVR).
                  </li>
                </ul>

                <h1 id="treatment" className="text-xl md:text-2xl font-semibold mt-4 max-w-3xl">
                  Treatment
                </h1>
                <h2 id="causation" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Therapeutic Options
                </h2>

                <h3 id="device-based-solutions" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Tested
                </h3>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Neurohormonal Blockers:</strong> Efforts to use these agents for HFpEF treatment have not shown conclusive benefits.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>cGMP-Protein Kinase G Signaling:</strong> Trials with agents like inorganic nitrates and soluble guanylate cyclase stimulators have not demonstrated clinical benefit.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Inotropic Modulators:</strong> Agents like milrinone have failed to meet primary endpoints in trials.
                  </li>
                </ul>

                <h3 id="device-based-solutions" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Emerging Therapies
                </h3>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    Interleukin-1 receptor antagonist
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Sodium-glucose co-transporter 2 inhibitor
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Beta-adrenergic agonist
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    Cardiosphere-derived cell-based therapy
                  </li>
                </ul>

                <h2 id="causation" className="text-lg md:text-xl font-semibold mt-4 max-w-3xl">
                  Device-based Solutions
                </h2>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Devices show promise in improving the hemodynamics and symptomatology of patients with HFpEF. However, none have yet received U.S. FDA approval, and further clinical evidence is required to establish their long-term safety and efficacy.
                </p>

                <h3 id="device-based-solutions" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Atrial Shunts
                </h3>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Devices designed to lower elevated left atrial pressure by creating a conduit between the left atrium and other chambers or structures.
                </p>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>IASD:</strong> A bare-metal nitinol frame device creating an 8-mm opening between the atria, allowing blood to flow down the pressure gradient. It is deployed percutaneously and is under clinical investigation.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>V-Wave Shunt:</strong> An hourglass-shaped self-expanding nitinol frame covered with porcine pericardial tissue. It is implanted percutaneously and has shown promise in preclinical and clinical studies.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>AFR:</strong> A self-expandable double-disk nitinol mesh braided into two flat discs. It is designed for interatrial shunting and is currently being evaluated in various trials.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Transcatheter Atrial Shunt System:</strong> A bare-nitinol implant with a 7-mm internal diameter for shunting from the left atrium to the coronary sinus. It aims to reduce pulmonary capillary wedge pressure and is being assessed in clinical trials.
                  </li>
                </ul>

                <h3 id="device-based-solutions" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Left Ventricular Expanders
                </h3>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Technologies aimed at improving diastolic recoil and ventricular filling by augmenting the elastic recoil of the left ventricle.
                </p>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>ImCardia:</strong> A self-expanding device exerting outward and circumferential forces to enhance ventricular filling by augmenting the elastic recoil of the LV from the endocardium or epicardium.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>CoPulse:</strong> A device with a flexible membrane that assists early diastolic recoil of the LV chamber by storing elastic energy during cardiac contraction and transferring it to the LV wall in the diastolic phase.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>LAAD:</strong> The Left Atrial Assist Device, which requires mitral valve removal for implantation, aims to improve diastolic recoil and enhance cardiac relaxation.
                  </li>
                </ul>

                <h3 id="device-based-solutions" className="text-base md:text-lg font-semibold mt-4 max-w-3xl">
                  Electrical Stimulators and Neuromodulators
                </h3>
                <p className="mt-4 max-w-3xl text-base md:text-lg">
                  Therapies that target autonomic imbalance and mechanical desynchrony to improve cardiac function:
                </p>
                <ul className="list-disc pl-8">
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>BAROSTIM NEO (CVRx, Inc):</strong> Device that improves autonomic balance by stimulating carotid baroreceptors to increase parasympathetic tone and reduce sympathetic drive, aimed at enhancing heart rate recovery and chronotropic reserve in HFpEF patients.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Optimizer Smart System (Impulse Dynamics):</strong> System that boosts heart muscle contractility without increasing oxygen consumption by applying high-voltage, long-duration biphasic stimulation to the right ventricular septum during the refractory period, targeting improved exercise tolerance and quality of life in HFpEF patients.
                  </li>
                  <li className="max-w-3xl text-base md:text-lg">
                    <strong>Cardiac Resynchronization Therapy (CRT) Devices:</strong> CRT devices synchronize cardiac contractions to enhance heart function using a pulse-generating device with three leads, and are being investigated for use in HFpEF patients with conduction delays and mechanical dyssynchrony.
                  </li>
                </ul>
              </div>
            </div>
            <LabFooter/>
        </div>
      )
  }
  
export default HFpEFDev;