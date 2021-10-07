/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SplitterProxyV2Factory } from "../SplitterProxyV2Factory";

export class SplitterProxyV2Factory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    splitter_: string,
    wethAddress_: string,
    overrides?: Overrides
  ): Promise<SplitterProxyV2Factory> {
    return super.deploy(
      splitter_,
      wethAddress_,
      overrides || {}
    ) as Promise<SplitterProxyV2Factory>;
  }
  getDeployTransaction(
    splitter_: string,
    wethAddress_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(splitter_, wethAddress_, overrides || {});
  }
  attach(address: string): SplitterProxyV2Factory {
    return super.attach(address) as SplitterProxyV2Factory;
  }
  connect(signer: Signer): SplitterProxyV2Factory__factory {
    return super.connect(signer) as SplitterProxyV2Factory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SplitterProxyV2Factory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SplitterProxyV2Factory;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "splitter_",
        type: "address",
      },
      {
        internalType: "address",
        name: "wethAddress_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot_",
        type: "bytes32",
      },
    ],
    name: "createSplit",
    outputs: [
      {
        internalType: "address",
        name: "splitterProxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
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
    name: "splitter",
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
    inputs: [],
    name: "wethAddress",
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
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516105f63803806105f683398101604081905261002f91610069565b6001600160601b0319606092831b8116608052911b1660a05261009b565b80516001600160a01b038116811461006457600080fd5b919050565b6000806040838503121561007b578182fd5b6100848361004d565b91506100926020840161004d565b90509250929050565b60805160601c60a05160601c6105326100c4600039600060be01526000607201526105326000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632eb4a7ab146100515780633cd8045e1461006d5780634f0e0ef3146100b957806381a77c8c146100e0575b600080fd5b61005a60005481565b6040519081526020015b60405180910390f35b6100947f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610064565b6100947f000000000000000000000000000000000000000000000000000000000000000081565b6100946100ee366004610159565b6000818155604080516020810184905201604051602081830303815290604052805190602001206040516101219061014c565b8190604051809103906000f5905080158015610141573d6000803e3d6000fd5b506000805592915050565b61038b8061017283390190565b60006020828403121561016a578081fd5b503591905056fe608060405234801561001057600080fd5b50336001600160a01b0316633cd8045e6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561004c57600080fd5b505af1158015610060573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061008491906101bd565b6000806101000a8154816001600160a01b0302191690836001600160a01b03160217905550336001600160a01b0316634f0e0ef36040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156100e457600080fd5b505af11580156100f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011c91906101bd565b600260006101000a8154816001600160a01b0302191690836001600160a01b03160217905550336001600160a01b0316632eb4a7ab6040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561017d57600080fd5b505af1158015610191573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b591906101eb565b600155610203565b6000602082840312156101ce578081fd5b81516001600160a01b03811681146101e4578182fd5b9392505050565b6000602082840312156101fc578081fd5b5051919050565b610179806102126000396000f3fe6080604052600436106100435760003560e01c80632eb4a7ab1461008b5780633cd8045e146100b45780634f0e0ef314610100578063ba0bafb41461012d5761004a565b3661004a57005b6000805473ffffffffffffffffffffffffffffffffffffffff16905060405136600082376000803683855af43d806000843e818015610087578184f35b8184fd5b34801561009757600080fd5b506100a160015481565b6040519081526020015b60405180910390f35b3480156100c057600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff165b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ab565b34801561010c57600080fd5b506002546100db9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561013957600080fd5b506100a16003548156fea2646970667358221220b7c69d2a224bf283e17d572a103ef42ce4b1f75eb2c6d47fcbd100c5d7cf22d364736f6c63430008030033a26469706673582212209913a4072b009ce99f04a14b24e0a5d22d37095be8f8e0b53ab7575baff70ae364736f6c63430008030033";
