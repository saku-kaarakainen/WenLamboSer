interface IAsset {
    id: number;
    symbol: string;
    name: string;
    address: string;
    amount: number;
}

type AssetState = {
    assets: IAsset[];
};

type AssetAction = {
    type: string; // the type of the asset (maybe this could be tag: string[])
    asset: IAsset;
};

type DispatchType = (args: AssetAction) => AssetAction;
