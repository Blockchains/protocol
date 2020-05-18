const provider = process.env.PROVIDER;
if (!provider) throw Error("Invalid provider!")
const environment = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : new Error('No ENVIRONMENT specified!');
const Web3 = require('web3');
const {setupLoader} = require('@openzeppelin/contract-loader');
const {deployContract} = require('../ContractUtils');

const web3 = new Web3(provider);
const defaultGasPrice = 8e9;

exports.defaultGasPrice = defaultGasPrice;
exports.web3 = web3;

const main = async () => {
  let deployer;
  if (process.env.DEPLOYER) {
    const privateKey = process.env.DEPLOYER;
    const account = web3.eth.accounts.privateKeyToAccount('0x' + privateKey);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;
    deployer = account.address;
  } else {
    throw Error("Invalid deployer, found nothing");
  }

  // const transactionHash = process.env.TRANSACTION_HASH;
  // if (!transactionHash) {
  //   throw Error("Invalid transactionHash!");
  // }

  const transaction = {
    from: '0x0f9dd46b0e1f77cec0f66c20b9a1f56cb34a4556',
    to: null,
    value: 0,
    gas: 2500000,
    gasPrice: 20e9,
    data: '0x608060405234801561001057600080fd5b50604051611afa380380611afa8339818101604052602081101561003357600080fd5b50516100466001600160e01b036100b316565b600080546001600160a01b0319166001600160a01b03928316178082556040519216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600180546001600160a01b0319166001600160a01b03929092169190911790556100b7565b3390565b611a34806100c66000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063854b32b511610066578063854b32b5146101415780638da5cb5b146101495780638f32d59b14610151578063ac5bad2a1461016d578063f2fde38b1461018a57610093565b80633fc8cef31461009857806344882b95146100bc5780636ce3c105146100c4578063715018a614610137575b600080fd5b6100a06101b0565b604080516001600160a01b039092168252519081900360200190f35b6100a06101bf565b6100e7600480360360408110156100da57600080fd5b508035906020013561035b565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561012357818101518382015260200161010b565b505050509050019250505060405180910390f35b61013f61048b565b005b6100e761052e565b6100a0610545565b610159610554565b604080519115158252519081900360200190f35b6100a06004803603602081101561018357600080fd5b5035610578565b61013f600480360360208110156101a057600080fd5b50356001600160a01b031661059f565b6001546001600160a01b031681565b60006101c9610554565b61021a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001546040516000916001600160a01b031690610236906106a8565b6001600160a01b03909116815260405190819003602001906000f080158015610263573d6000803e3d6000fd5b50600280546001810182556000919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b03831690811790915590915063f2fde38b6102c2610545565b6040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b03168152602001915050600060405180830381600087803b15801561030a57600080fd5b505af115801561031e573d6000803e3d6000fd5b50506040516001600160a01b03841692507f5e25fd2e04b55bd0182c35e454e64e7a0033c8cdcc936206693c9bceb73611059150600090a2905090565b6060828210156103a4576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f494e444943455360881b604482015290519081900360640190fd5b6002548211156103ef576040805162461bcd60e51b81526020600482015260116024820152700929cac82989288be8a9c88be929c888ab607b1b604482015290519081900360640190fd5b606083830360405190808252806020026020018201604052801561041d578160200160208202803883390190505b509050835b83811015610483576002818154811061043757fe5b9060005260206000200160009054906101000a90046001600160a01b0316828683038151811061046357fe5b6001600160a01b0390921660209283029190910190910152600101610422565b509392505050565b610493610554565b6104e4576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6060610540600060028054905061035b565b905090565b6000546001600160a01b031690565b600080546001600160a01b0316610569610604565b6001600160a01b031614905090565b6002818154811061058557fe5b6000918252602090912001546001600160a01b0316905081565b6105a7610554565b6105f8576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61060181610608565b50565b3390565b6001600160a01b03811661064d5760405162461bcd60e51b81526004018080602001828103825260268152602001806119da6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b611324806106b68339019056fe608060405234801561001057600080fd5b506040516113243803806113248339818101604052602081101561003357600080fd5b50516100466001600160e01b036100b316565b600080546001600160a01b0319166001600160a01b03928316178082556040519216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600180546001600160a01b0319166001600160a01b03929092169190911790556100b7565b3390565b61125e806100c66000396000f3fe6080604052600436106100915760003560e01c80638da5cb5b116100595780638da5cb5b146102225780638f32d59b146102375780639546432c14610260578063b5d5268f146102de578063f2fde38b1461030457610091565b80631e9a6950146100d857806322d59d9c146101135780633fc8cef3146101a357806340c10f19146101d4578063715018a61461020d575b34801561009d57600080fd5b506040805162461bcd60e51b815260206004820152600a6024820152691393d7d111519055531560b21b604482015290519081900360640190fd5b3480156100e457600080fd5b50610111600480360360408110156100fb57600080fd5b506001600160a01b038135169060200135610337565b005b34801561011f57600080fd5b50610191600480360361016081101561013757600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359160808201359160a08101359160c08201359160e08101359091169060ff6101008201351690610120810135906101400135610541565b60408051918252519081900360200190f35b3480156101af57600080fd5b506101b8610677565b604080516001600160a01b039092168252519081900360200190f35b3480156101e057600080fd5b50610111600480360360408110156101f757600080fd5b506001600160a01b038135169060200135610686565b34801561021957600080fd5b50610111610891565b34801561022e57600080fd5b506101b8610934565b34801561024357600080fd5b5061024c610943565b604080519115158252519081900360200190f35b34801561026c57600080fd5b50610191600480360361016081101561028457600080fd5b506001600160a01b0381358116916020810135821691604082013581169160608101359160808201359160a08101359160c08201359160e08101359091169060ff6101008201351690610120810135906101400135610967565b610191600480360360208110156102f457600080fd5b50356001600160a01b0316610a9d565b34801561031057600080fd5b506101116004803603602081101561032757600080fd5b50356001600160a01b0316610c38565b61035a610342610c9d565b6001600160a01b03841690308463ffffffff610ca116565b6000826001600160a01b031663db006a75836040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156103a257600080fd5b505af11580156103b6573d6000803e3d6000fd5b505050506040513d60208110156103cc57600080fd5b50516040805163f77c479160e01b815290519192506000916001600160a01b0386169163f77c4791916004808301926020929190829003018186803b15801561041457600080fd5b505afa158015610428573d6000803e3d6000fd5b505050506040513d602081101561043e57600080fd5b5051604080516330df135f60e21b81526001600160a01b0387811660048301529151919092169163c37c4d7c916024808301926020929190829003018186803b15801561048a57600080fd5b505afa15801561049e573d6000803e3d6000fd5b505050506040513d60208110156104b457600080fd5b505190506104da6104c3610c9d565b6001600160a01b038316908463ffffffff610d0116565b6104e2610c9d565b6001600160a01b03166104f3610c9d565b6001600160a01b03167fc3248a222bd29f3652e03dfe75057b87bdc80251ec704c6cd383c79111d5c8ff8585604051808381526020018281526020019250505060405180910390a350505050565b60408051630f10906160e31b81526001600160a01b038c811660048301528b81166024830152604482018b9052606482018a90526084820189905260a4820188905286811660c483015260ff861660e48301526101048201859052610124820184905291516000928392908f16916378848308916101448082019260209290919082900301818787803b1580156105d757600080fd5b505af11580156105eb573d6000803e3d6000fd5b505050506040513d602081101561060157600080fd5b810190808051906020019092919050505090508a6001600160a01b03168c6001600160a01b03167f21f751b4acf3ec236d81e1ed16d2a99a2b5236a293f1bf6a22012b4ac0fb503b838b604051808381526020018281526020019250505060405180910390a39c9b505050505050505050505050565b6001546001600160a01b031681565b6000826001600160a01b031663f77c47916040518163ffffffff1660e01b815260040160206040518083038186803b1580156106c157600080fd5b505afa1580156106d5573d6000803e3d6000fd5b505050506040513d60208110156106eb57600080fd5b5051604080516330df135f60e21b81526001600160a01b0386811660048301529151919092169163c37c4d7c916024808301926020929190829003018186803b15801561073757600080fd5b505afa15801561074b573d6000803e3d6000fd5b505050506040513d602081101561076157600080fd5b50519050610788610770610c9d565b6001600160a01b03831690308563ffffffff610ca116565b6107928184610d58565b6000836001600160a01b031663a0712d68846040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b1580156107da57600080fd5b505af11580156107ee573d6000803e3d6000fd5b505050506040513d602081101561080457600080fd5b5051905061082a610813610c9d565b6001600160a01b038616908363ffffffff610d0116565b610832610c9d565b6001600160a01b0316610843610c9d565b6001600160a01b03167f21f751b4acf3ec236d81e1ed16d2a99a2b5236a293f1bf6a22012b4ac0fb503b8386604051808381526020018281526020019250505060405180910390a350505050565b610899610943565b6108ea576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b600080546001600160a01b0316610958610c9d565b6001600160a01b031614905090565b6040805163aad393cb60e01b81526001600160a01b038c811660048301528b81166024830152604482018b9052606482018a90526084820189905260a4820188905286811660c483015260ff861660e48301526101048201859052610124820184905291516000928392908f169163aad393cb916101448082019260209290919082900301818787803b1580156109fd57600080fd5b505af1158015610a11573d6000803e3d6000fd5b505050506040513d6020811015610a2757600080fd5b810190808051906020019092919050505090508a6001600160a01b03168c6001600160a01b03167fc3248a222bd29f3652e03dfe75057b87bdc80251ec704c6cd383c79111d5c8ff8a84604051808381526020018281526020019250505060405180910390a39c9b505050505050505050505050565b6000600160009054906101000a90046001600160a01b03166001600160a01b0316826001600160a01b0316634b57b0be6040518163ffffffff1660e01b815260040160206040518083038186803b158015610af757600080fd5b505afa158015610b0b573d6000803e3d6000fd5b505050506040513d6020811015610b2157600080fd5b50516001600160a01b031614610b6e576040805162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22faa27a5a2a760991b604482015290519081900360640190fd5b6000826001600160a01b031663145ead75346040518263ffffffff1660e01b81526004016020604051808303818588803b158015610bab57600080fd5b505af1158015610bbf573d6000803e3d6000fd5b50505050506040513d6020811015610bd657600080fd5b50519050610bf46001600160a01b038416338363ffffffff610d0116565b604080518281523460208201528151339283927f21f751b4acf3ec236d81e1ed16d2a99a2b5236a293f1bf6a22012b4ac0fb503b929081900390910190a392915050565b610c40610943565b610c91576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610c9a81610dfc565b50565b3390565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610cfb908590610e9c565b50505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610d53908490610e9c565b505050565b60408051636eb1769f60e11b81523060048201526001600160a01b038381166024830152915160009285169163dd62ed3e916044808301926020929190829003018186803b158015610da957600080fd5b505afa158015610dbd573d6000803e3d6000fd5b505050506040513d6020811015610dd357600080fd5b505190506000198114610d5357610d536001600160a01b0384168360001963ffffffff61105416565b6001600160a01b038116610e415760405162461bcd60e51b81526004018080602001828103825260268152602001806111a46026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b610eae826001600160a01b0316611167565b610eff576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b60208310610f3d5780518252601f199092019160209182019101610f1e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610f9f576040519150601f19603f3d011682016040523d82523d6000602084013e610fa4565b606091505b509150915081610ffb576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115610cfb5780806020019051602081101561101757600080fd5b5051610cfb5760405162461bcd60e51b815260040180806020018281038252602a8152602001806111ca602a913960400191505060405180910390fd5b8015806110da575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b1580156110ac57600080fd5b505afa1580156110c0573d6000803e3d6000fd5b505050506040513d60208110156110d657600080fd5b5051155b6111155760405162461bcd60e51b81526004018080602001828103825260368152602001806111f46036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052610d53908490610e9c565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470811580159061119b5750808214155b94935050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a265627a7a7231582069cb5ca9c76e8d875ce0882d2e5245c2789c85eff3b2561f49ccdb43bc5b126c64736f6c634300050d00324f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a265627a7a7231582077cf5e39e089c57c40a644165fe1dea7b9a0797447ef57d9ef20656adb9f292264736f6c634300050d0032000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    nonce: 203,
    chainId: 1,
  };

  await web3.eth.sendTransaction(transaction);
}

main()
  .then(() => {
    console.log("Finished successfully!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Could not deploy due to error: ", error);
    process.exit(-1);
  });