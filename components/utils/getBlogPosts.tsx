import "server-only";

import cambodia from "@/app/disco/memories/cambodia/data.json";
import daebudo from "@/app/disco/memories/daebudo/data.json";
import korea from "@/app/disco/memories/korea/data.json";
import military from "@/app/disco/memories/military/data.json";
import singaporePre from "@/app/disco/memories/singaporePre/data.json";
import leaders from "@/app/disco/thoughts/leaders/data.json";
import life from "@/app/disco/thoughts/life/data.json";
import delta from "@/app/lab/experiences/delta/data.json";
import dyson from "@/app/lab/experiences/dyson/data.json";
import fyp from "@/app/lab/experiences/fyp/data.json";
import martdeliv from "@/app/lab/experiences/martdeliv/data.json";
import rwr from "@/app/lab/experiences/RWR/data.json";
import sense from "@/app/lab/experiences/SENSE/data.json";
import snu from "@/app/lab/experiences/snu/data.json";
import ureca from "@/app/lab/experiences/ureca/data.json";
import armHead from "@/app/lab/ideas/armHead/data.json";
import bldPwr from "@/app/lab/ideas/bldPwr/data.json";
import expnArm from "@/app/lab/ideas/expnArm/data.json";
import hfpHtm from "@/app/lab/ideas/HFPhtm/data.json";
import hydroElec from "@/app/lab/ideas/HydroEelc/data.json";
import intRecg from "@/app/lab/ideas/intRecg/data.json";
import tapeCut from "@/app/lab/ideas/tapeCut/data.json";
import tripleA from "@/app/lab/ideas/tripleA/data.json";
import ufhf from "@/app/lab/ideas/UFHF/data.json";
import univExsk from "@/app/lab/ideas/univExsk/data.json";
import visCtr from "@/app/lab/ideas/visCtr/data.json";
import vrr from "@/app/lab/ideas/VRR/data.json";
import hfpEfDev from "@/app/lab/litrev/HFpEFDev/data.json";
import humSvcOccl from "@/app/lab/litrev/humSVCOccl/data.json";
import itmtSvcOccl from "@/app/lab/litrev/itmtSVCOccl/data.json";
import lwrLimbsEmg from "@/app/lab/litrev/lwrLimbsEMG/data.json";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  imageHref: string;
  href: string;
  featured: string;
  active: string;
  category: string;
}

type BlogMetadata = Omit<BlogPost, "slug" | "href">;
type CollectionItem = readonly [slug: string, metadata: BlogMetadata];

const collections: Record<string, CollectionItem[]> = {
  "app/disco/memories": [
    ["cambodia", cambodia],
    ["daebudo", daebudo],
    ["korea", korea],
    ["military", military],
    ["singaporePre", singaporePre],
  ],
  "app/disco/thoughts": [
    ["leaders", leaders],
    ["life", life],
  ],
  "app/lab/experiences": [
    ["delta", delta],
    ["dyson", dyson],
    ["fyp", fyp],
    ["martdeliv", martdeliv],
    ["RWR", rwr],
    ["SENSE", sense],
    ["snu", snu],
    ["ureca", ureca],
  ],
  "app/lab/ideas": [
    ["armHead", armHead],
    ["bldPwr", bldPwr],
    ["expnArm", expnArm],
    ["HFPhtm", hfpHtm],
    ["HydroEelc", hydroElec],
    ["intRecg", intRecg],
    ["tapeCut", tapeCut],
    ["tripleA", tripleA],
    ["UFHF", ufhf],
    ["univExsk", univExsk],
    ["visCtr", visCtr],
    ["VRR", vrr],
  ],
  "app/lab/litrev": [
    ["HFpEFDev", hfpEfDev],
    ["humSVCOccl", humSvcOccl],
    ["itmtSVCOccl", itmtSvcOccl],
    ["lwrLimbsEMG", lwrLimbsEmg],
  ],
};

export async function getBlogPosts(dirPath: string): Promise<BlogPost[]> {
  const collection = collections[dirPath];
  if (!collection) throw new Error(`Unknown blog collection: ${dirPath}`);

  return collection
    .map(([slug, metadata]) => ({
      slug,
      ...metadata,
      href: `/${dirPath.replace(/^app\//, "")}/${slug}`,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}
