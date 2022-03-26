
//
// Connection
//
interface IConnection {

}

interface IToken {

}

interface IAsset { // TODO: Remove
    id: number;
    symbol: string;
    name: string;
    address: string;
    amount: number;
}

type ConnectionState = { connection: IConnection[]; };
type TokenState = { tokens: IToken[]; };
type AssetState = { assets: IAsset[]; }; // TODO: Remove

type ConnectionAction = { type: string, connection: IConnection; };
type TokenAction = { type: string, token: IToken; };
type AssetAction = { type: string, type, asset: IAsset; };

type DispatchType = (args: ConnectionAction) => ConnectionAction;
type DispatchType = (args: TokenAction) => TokenAction;
type DispatchType = (args: AssetAction) => AssetAction;
