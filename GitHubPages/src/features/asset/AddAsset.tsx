import * as React from "react";

type Props = {
    saveAsset: (asset: IAsset| any) => void;
};

// TODO: Replace this with auto-fetch from the on-chain
export const AddAsset: React.FC<Props> = ({ saveAsset }) => {
    const [asset, setAsset] = React.useState<IAsset | {}>();

    const handleAssetData = (e: React.FormEvent<HTMLInputElement>) => {
        setAsset({
            ...asset,
            [e.currentTarget.id]: e.currentTarget.value
        });
    };

    const addNewAsset = (e: React.FormEvent) => {
        e.preventDefault();
        saveAsset(asset);
    };

    return (
        <form onSubmit={addNewAsset} className="Add-asset">
            <input type="text" id="symbol" placeholder="Symbol" onChange={handleAssetData} />
            <input type="text" id="name" placeholder="Name" onChange={handleAssetData} />
            <input type="text" id="address" placeholder="Address" onChange={handleAssetData} />
            <input type="text" id="amount" placeholder="Amount" onChange={handleAssetData} />
            <button disabled={asset === undefined ? true : false}>
                Add asset
            </button>
        </form>
    );
};
