import GrandPa from "./GrandPa";
import './FamilyTree.css'
import { createContext } from "react";

export const AssetContext = createContext('')

const FamilyTree = () => {

    const asset = "Diamond"
    const newAsset = "Gold"

    return (
        <div className="family-tree">
            <h3>Family Tree</h3>
            <AssetContext.Provider value={newAsset}>
                <GrandPa asset={asset}></GrandPa>
            </AssetContext.Provider>

        </div>
    );
};

export default FamilyTree;