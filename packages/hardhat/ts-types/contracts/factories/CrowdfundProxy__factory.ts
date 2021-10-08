/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrowdfundProxy,
  CrowdfundProxyInterface,
} from "../CrowdfundProxy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "contributions",
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
  {
    inputs: [],
    name: "totalContributions",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50336001600160a01b031663d7dfa0dd6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156200004e57600080fd5b505af115801562000063573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000899190620004e7565b600860006101000a8154816001600160a01b0302191690836001600160a01b03160217905550336001600160a01b031663a39fac126040518163ffffffff1660e01b815260040160006040518083038186803b158015620000e957600080fd5b505afa158015620000fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200012891908101906200050d565b80516200013e91600091602090910190620002e9565b50336001600160a01b031663318c18a26040518163ffffffff1660e01b815260040160006040518083038186803b1580156200017957600080fd5b505afa1580156200018e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620001b89190810190620006eb565b8051620001ce9160019160209091019062000353565b50336001600160a01b031663b1af96ef6040518163ffffffff1660e01b815260040160006040518083038186803b1580156200020957600080fd5b505afa1580156200021e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620002489190810190620005b9565b80516200025e9160029160209091019062000391565b50336001600160a01b0316633e0dc34e6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156200029b57600080fd5b505af1158015620002b0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002d691906200077a565b6003556004805460ff1916905562000855565b82805482825590600052602060002090810192821562000341579160200282015b828111156200034157825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906200030a565b506200034f929150620003f1565b5090565b82805482825590600052602060002090810192821562000341579160200282015b828111156200034157825182559160200191906001019062000374565b828054828255906000526020600020908101928215620003e3579160200282015b82811115620003e35782518051620003d291849160209091019062000408565b5091602001919060010190620003b2565b506200034f92915062000484565b5b808211156200034f5760008155600101620003f2565b8280546200041690620007ec565b90600052602060002090601f0160209004810192826200043a576000855562000341565b82601f106200045557805160ff191683800117855562000341565b828001600101855582156200034157918201828111156200034157825182559160200191906001019062000374565b808211156200034f5760006200049b8282620004a5565b5060010162000484565b508054620004b390620007ec565b6000825580601f10620004c4575050565b601f016020900490600052602060002090810190620004e49190620003f1565b50565b600060208284031215620004f9578081fd5b815162000506816200083f565b9392505050565b6000602080838503121562000520578182fd5b82516001600160401b0381111562000536578283fd5b8301601f8101851362000547578283fd5b80516200055e6200055882620007c6565b62000793565b80828252848201915084840188868560051b87010111156200057e578687fd5b8694505b83851015620005ad57805162000598816200083f565b83526001949094019391850191850162000582565b50979650505050505050565b60006020808385031215620005cc578182fd5b82516001600160401b0380821115620005e3578384fd5b8185019150601f8681840112620005f8578485fd5b8251620006096200055882620007c6565b8082825286820191508686018a888560051b890101111562000629578889fd5b885b84811015620006db5781518781111562000643578a8bfd5b8801603f81018d1362000654578a8bfd5b89810151888111156200066b576200066b62000829565b6200067e818901601f19168c0162000793565b81815260408f8184860101111562000694578d8efd5b8d5b83811015620006b3578481018201518382018f01528d0162000696565b83811115620006c4578e8e85850101525b50508652505092880192908801906001016200062b565b50909a9950505050505050505050565b60006020808385031215620006fe578182fd5b82516001600160401b0381111562000714578283fd5b8301601f8101851362000725578283fd5b8051620007366200055882620007c6565b80828252848201915084840188868560051b870101111562000756578687fd5b8694505b83851015620005ad5780518352600194909401939185019185016200075a565b6000602082840312156200078c578081fd5b5051919050565b604051601f8201601f191681016001600160401b0381118282101715620007be57620007be62000829565b604052919050565b60006001600160401b03821115620007e257620007e262000829565b5060051b60200190565b600181811c908216806200080157607f821691505b602082108114156200082357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114620004e457600080fd5b6104b080620008656000396000f3fe60806040526004361061007f5760003560e01c806342e94c901161004e57806342e94c901461015e578063d7dfa0dd1461018b578063d98f76b3146101dd578063edf26d9b146101fd57610086565b8063200d2ed2146100c757806337c08923146100f75780633966cca31461011b5780633e0dc34e1461014857610086565b3661008657005b60085460405173ffffffffffffffffffffffffffffffffffffffff9091169036600082376000803683855af43d806000843e8180156100c3578184f35b8184fd5b3480156100d357600080fd5b506004546100e19060ff1681565b6040516100ee9190610374565b60405180910390f35b34801561010357600080fd5b5061010d60075481565b6040519081526020016100ee565b34801561012757600080fd5b5061013b61013636600461035c565b61021d565b6040516100ee91906103b5565b34801561015457600080fd5b5061010d60035481565b34801561016a57600080fd5b5061010d610179366004610321565b60066020526000908152604090205481565b34801561019757600080fd5b506008546101b89073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ee565b3480156101e957600080fd5b5061010d6101f836600461035c565b6102c9565b34801561020957600080fd5b506101b861021836600461035c565b6102ea565b6002818154811061022d57600080fd5b90600052602060002001600091509050805461024890610426565b80601f016020809104026020016040519081016040528092919081815260200182805461027490610426565b80156102c15780601f10610296576101008083540402835291602001916102c1565b820191906000526020600020905b8154815290600101906020018083116102a457829003601f168201915b505050505081565b600181815481106102d957600080fd5b600091825260209091200154905081565b600081815481106102fa57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b600060208284031215610332578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610355578182fd5b9392505050565b60006020828403121561036d578081fd5b5035919050565b60208101600483106103af577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b6000602080835283518082850152825b818110156103e1578581018301518582016040015282016103c5565b818111156103f25783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600181811c9082168061043a57607f821691505b60208210811415610474577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220ce8f20ed63927da42cb0ef1f80edea233c88ed16b869f3c4c7ad38535dc77d3164736f6c63430008040033";

export class CrowdfundProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrowdfundProxy> {
    return super.deploy(overrides || {}) as Promise<CrowdfundProxy>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CrowdfundProxy {
    return super.attach(address) as CrowdfundProxy;
  }
  connect(signer: Signer): CrowdfundProxy__factory {
    return super.connect(signer) as CrowdfundProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdfundProxyInterface {
    return new utils.Interface(_abi) as CrowdfundProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrowdfundProxy {
    return new Contract(address, _abi, signerOrProvider) as CrowdfundProxy;
  }
}