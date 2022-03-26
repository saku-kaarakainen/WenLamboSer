# 1. fetch assets from ethereum network
 - more designing: https://docs.google.com/presentation/d/1fGD7Q6Nl3l1YdP02uUqbGCwomkCANxOQR2tbshUmmS0/edit?usp=sharing
 - in order to get the token data, on-chain, you need to know token address
	-> eth.get-token-data(user-address, token-address) => { token-address, token-quantity, etc }

 - in order to find out your needed addresses, fetch list of transaction
	* this could be done on-chain, but the scripts might be slow.
	* maybe for the first version it's fine to fetch from ethscan.io/api,
		** we can replace it later with pure decentralized solution

- with the given address you can follow the respective tokens


## 
 - When the address changes, trigger supportedNetwork.getAssets
	- if eth, get transaction (web2/ethscan.io)
		- from the transactions, filter all tokens
		- save tokens into store: tracked-tokens[0xabc,0xdef,etc]
			-> we save only this much data: if later you want to build portfolio from the transactions, a new design might be more pratical
		- 
