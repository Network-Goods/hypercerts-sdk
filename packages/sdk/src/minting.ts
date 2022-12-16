import { metadataValidator, claimdataValidator, storeMetadata } from "metadata";
import { HypercertMetadata } from "metadata/lib/types/metadata";


export const mintHypercertToken = (claimData: HypercertMetadata, totalUnits: BigNumberish): boolean => {
    if(metadataValidator(claimData)){
        storeMetadata(claimData);
    }
};

export const mintHypercertTokenWithFractions = (claimData: HypercertMetadata, units: BigNumberish[]): boolean => {};
