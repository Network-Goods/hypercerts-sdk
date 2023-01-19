import * as React from "react";
import { PlasmicHypercertImage, DefaultHypercertImageProps } from "./plasmic/hypercerts_core/PlasmicHypercertImage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { HypercertMetadata } from "../types/metadata";

export interface HypercertImageProps extends DefaultHypercertImageProps {
  metadata: HypercertMetadata
  rootRef?: React.Ref<HTMLDivElement>;
  projectLogo?: React.ReactNode;
  collectionLogo?: React.ReactNode;
  percentOwnership?: number;
}

function HypercertImage_(props: HypercertImageProps, ref: HTMLElementRefOf<"div">) {
  const { metadata, rootRef, projectLogo, collectionLogo, percentOwnership, ...rest } = props;

  // This assumes we are using the schema in https://github.com/Network-Goods/hypercerts/issues/98
  const hideFraction = !percentOwnership;
  const impactScopeLabel = metadata.properties.impact_scope?.display_value;
  const workPeriodLabel = metadata.properties.work_timeframe?.display_value;
  const workScopes = metadata.properties.work_scope?.value;

  // Validate and retrieve the proper workscope
  const getWorkScope = (i: number) => 
    Array.isArray(workScopes) && workScopes.length > i ?
    workScopes[i] :
    null;
  // get the props to pass into the WorkScopeChip component
  const getWorkScopeProps = (i: number) => {
    const label = getWorkScope(i);
    return {
      // Hide the chip if `null`
      style: label ? {} : { display: "none" },
      children: label,
    };
  };

  return (
    <PlasmicHypercertImage
      root={{ ref }}
      {...rest}
      root2={{ ref:rootRef }}
      title={metadata.name}
      impactScope={impactScopeLabel}
      workPeriod={workPeriodLabel}
      projectLogo={projectLogo}
      hideCollectionLogo={true}
      collectionLogo={collectionLogo}
      workScope0={getWorkScopeProps(0)}
      workScope1={getWorkScopeProps(1)}
      workScope2={getWorkScopeProps(2)}
      hideFraction={hideFraction}
      percentOwnership={percentOwnership}
    />
  );
}

export const HypercertImage = React.forwardRef(HypercertImage_);
