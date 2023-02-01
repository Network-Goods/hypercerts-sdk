import { HypercertMetadata } from "./types/metadata.js";
import { HypercertClaimdata } from "./types/claimdata.js";
import { validateClaimData, validateMetaData } from "./validator/index.js";

const formatDate = (date: Date) => {
  const fullYear = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = (date.getDate() + 1).toString().padStart(2, "0");
  return `${fullYear}-${month}-${day}`;
};

export const formatHypercertData = ({
  name,
  description,
  external_url,
  image,
  version,
  properties,
  impactScope,
  workScope,
  workTimeframeStart,
  workTimeframeEnd,
  impactTimeframeStart,
  impactTimeframeEnd,
  contributors,
  rights,
}: {
  name: string;
  description: string;
  external_url: string;
  image: string;
  version: string;
  properties: { trait_type: string; value: string }[];
  impactScope: string[];
  workScope: string[];
  workTimeframeStart: Date;
  workTimeframeEnd: Date;
  impactTimeframeStart: Date;
  impactTimeframeEnd: Date;
  contributors: `0x${string}`[];
  rights: string[];
}): { data: HypercertMetadata | null; valid: boolean; errors: Record<string, string> } => {
  const claimData: HypercertClaimdata = {
    impact_scope: {
      name: "Impact Scope",
      value: impactScope,
      display_value: impactScope.join(", "),
    },
    work_scope: {
      name: "Work Scope",
      value: workScope,
      display_value: workScope.join(", "),
    },
    impact_timeframe: {
      name: "Impact Timeframe",
      value: [impactTimeframeStart.getTime() / 1000, impactTimeframeEnd.getTime() / 1000],
      display_value: `${formatDate(impactTimeframeStart)} \u2192 ${formatDate(impactTimeframeEnd)}`,
    },
    work_timeframe: {
      name: "Work Timeframe",
      value: [workTimeframeStart.getTime() / 1000, workTimeframeEnd.getTime() / 1000],
      display_value: `${formatDate(workTimeframeStart)} \u2192 ${formatDate(workTimeframeEnd)}`,
    },
    rights: {
      name: "Rights",
      value: rights,
      display_value: rights.join(", "),
    },
    contributors: {
      name: "Contributors",
      value: contributors,
      display_value: contributors.join(", "),
    },
  };

  const { valid: claimDataValid, errors: claimDataErrors } = validateClaimData(claimData);
  if (!claimDataValid) {
    return { valid: false, errors: claimDataErrors, data: null };
  }

  const metaData: HypercertMetadata = {
    name,
    description,
    external_url,
    image,
    version,
    properties,
    hypercert: claimData,
  };

  const { valid: metaDataValid, errors: metaDataErrors } = validateMetaData(metaData);
  if (!metaDataValid) {
    return { valid: false, errors: metaDataErrors, data: null };
  }
  return { valid: true, errors: {}, data: metaData };
};
