/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrowdfundLogic,
  CrowdfundLogicInterface,
} from "../CrowdfundLogic";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Contribution",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountRaised",
        type: "uint256",
      },
    ],
    name: "FundingClosed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contributor",
        type: "address",
      },
    ],
    name: "Redeemed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "addresses",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "closeFunding",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "backer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "contribute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "fundingParams",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "logic",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "naming",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "status",
    outputs: [
      {
        internalType: "enum CrowdfundStorage.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d8c806100206000396000f3fe6080604052600436106100965760003560e01c80638418cd9911610069578063d7dfa0dd1161004e578063d7dfa0dd1461015b578063d98f76b3146101ad578063edf26d9b146101cd57600080fd5b80638418cd9914610133578063be040fb01461014657600080fd5b8063200d2ed21461009b57806331a3a506146100cb5780633966cca3146100e25780633e0dc34e1461010f575b600080fd5b3480156100a757600080fd5b506004546100b59060ff1681565b6040516100c29190610be0565b60405180910390f35b3480156100d757600080fd5b506100e06101ed565b005b3480156100ee57600080fd5b506101026100fd366004610bc8565b6104ee565b6040516100c29190610c08565b34801561011b57600080fd5b5061012560035481565b6040519081526020016100c2565b6100e0610141366004610b85565b61059a565b34801561015257600080fd5b506100e06107b6565b34801561016757600080fd5b506008546101889073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c2565b3480156101b957600080fd5b506101256101c8366004610bc8565b610a02565b3480156101d957600080fd5b506101886101e8366004610bc8565b610a23565b6000808154811061020e57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16331461023b57600080fd5b600260055414156102935760405162461bcd60e51b815260206004820152600e60248201527f5265656e7472616e742063616c6c00000000000000000000000000000000000060448201526064015b60405180910390fd5b6002600555600060045460ff1660038111156102bf57634e487b7160e01b600052602160045260246000fd5b1461030c5760405162461bcd60e51b815260206004820152601f60248201527f43726f776466756e643a2046756e64696e67206d757374206265206f70656e00604482015260640161028a565b42600160028154811061032f57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154116103ad5760405162461bcd60e51b815260206004820152602560248201527f43726f776466756e643a2054696d65206c696d697420686173206e6f7420657860448201527f7069726564000000000000000000000000000000000000000000000000000000606482015260840161028a565b600180815481106103ce57634e487b7160e01b600052603260045260246000fd5b906000526020600020015447106104d9576004805460ff191660021790556040514781527f3d4e2838c2c18bf2acccc9e82df8a8b76b0ca4118a6faf7a387fd77dec6aba349060200160405180910390a16000808154811061044057634e487b7160e01b600052603260045260246000fd5b60009182526020822001546001805473ffffffffffffffffffffffffffffffffffffffff909216926108fc92606492919061048b57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154476104a19190610cb1565b6104ab9190610c91565b6040518115909202916000818181858888f193505050501580156104d3573d6000803e3d6000fd5b506104e7565b6004805460ff191660011790555b6001600555565b600281815481106104fe57600080fd5b90600052602060002001600091509050805461051990610d05565b80601f016020809104026020016040519081016040528092919081815260200182805461054590610d05565b80156105925780601f1061056757610100808354040283529160200191610592565b820191906000526020600020905b81548152906001019060200180831161057557829003601f168201915b505050505081565b600260055414156105ed5760405162461bcd60e51b815260206004820152600e60248201527f5265656e7472616e742063616c6c000000000000000000000000000000000000604482015260640161028a565b6002600581905550600160028154811061061757634e487b7160e01b600052603260045260246000fd5b906000526020600020015442106106965760405162461bcd60e51b815260206004820152602160248201527f43726f776466756e643a2046756e64696e6720706572696f64206973206f766560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161028a565b34811461070b5760405162461bcd60e51b815260206004820152602360248201527f43726f776466756e643a20416d6f756e74206973206e6f742076616c7565207360448201527f656e740000000000000000000000000000000000000000000000000000000000606482015260840161028a565b73ffffffffffffffffffffffffffffffffffffffff821660009081526006602052604081208054839290610740908490610c79565b9250508190555080600760008282546107599190610c79565b90915550506040805173ffffffffffffffffffffffffffffffffffffffff84168152602081018390527f4d154d4aae216bed6d0926db77c00df2b57c6b5ba4eee05775de20facede3a7b910160405180910390a150506001600555565b600260055414156108095760405162461bcd60e51b815260206004820152600e60248201527f5265656e7472616e742063616c6c000000000000000000000000000000000000604482015260640161028a565b6002600581905550600160028154811061083357634e487b7160e01b600052603260045260246000fd5b90600052602060002001544211801561087657506001808154811061086857634e487b7160e01b600052603260045260246000fd5b906000526020600020015447105b61090e5760405162461bcd60e51b815260206004820152604d60248201527f43726f776466756e643a2046756e64696e672068617320656974686572206e6f60448201527f7420636c6f736564206f72206861732073756363656564656420696e206d656560648201527f74696e672069747320676f616c00000000000000000000000000000000000000608482015260a40161028a565b600047116109845760405162461bcd60e51b815260206004820152602560248201527f43726f776466756e643a204e6f2045544820617661696c61626c6520746f207260448201527f656465656d000000000000000000000000000000000000000000000000000000606482015260840161028a565b3360009081526006602052604081205460078054919290916109a7908490610cee565b90915550503360008181526006602052604081208190556109c89190610a5a565b6040513381527fcb7d87f76b4d6501ac27ed560664bf84ce273a2ddd7b9b1da63c753e68ccae209060200160405180910390a16001600555565b60018181548110610a1257600080fd5b600091825260209091200154905081565b60008181548110610a3357600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b80471015610aaa5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640161028a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610b04576040519150601f19603f3d011682016040523d82523d6000602084013e610b09565b606091505b5050905080610b805760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d61792068617665207265766572746564000000000000606482015260840161028a565b505050565b60008060408385031215610b97578182fd5b823573ffffffffffffffffffffffffffffffffffffffff81168114610bba578283fd5b946020939093013593505050565b600060208284031215610bd9578081fd5b5035919050565b6020810160048310610c0257634e487b7160e01b600052602160045260246000fd5b91905290565b6000602080835283518082850152825b81811015610c3457858101830151858201604001528201610c18565b81811115610c455783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115610c8c57610c8c610d40565b500190565b600082610cac57634e487b7160e01b81526012600452602481fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ce957610ce9610d40565b500290565b600082821015610d0057610d00610d40565b500390565b600181811c90821680610d1957607f821691505b60208210811415610d3a57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea26469706673582212203fd0a9d735f77f4eb906b379931ed46fb775c69c3808299683c809e9ba4faa3164736f6c63430008040033";

export class CrowdfundLogic__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrowdfundLogic> {
    return super.deploy(overrides || {}) as Promise<CrowdfundLogic>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CrowdfundLogic {
    return super.attach(address) as CrowdfundLogic;
  }
  connect(signer: Signer): CrowdfundLogic__factory {
    return super.connect(signer) as CrowdfundLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdfundLogicInterface {
    return new utils.Interface(_abi) as CrowdfundLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdfundLogic {
    return new Contract(address, _abi, signerOrProvider) as CrowdfundLogic;
  }
}
