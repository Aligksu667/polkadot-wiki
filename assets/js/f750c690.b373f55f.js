"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"learn-nft-pallets",title:"NFT Pallets",sidebar_label:"NFT Pallets",description:"An overview of the functionalities of NFT Pallets in Polkadot Ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0","nfts","NFT pallets"],slug:"../learn-nft-pallets"},s=void 0,p={unversionedId:"learn/learn-nft-pallets",id:"learn/learn-nft-pallets",title:"NFT Pallets",description:"An overview of the functionalities of NFT Pallets in Polkadot Ecosystem.",source:"@site/../docs/learn/learn-nft-pallets.md",sourceDirName:"learn",slug:"/learn-nft-pallets",permalink:"/docs/learn-nft-pallets",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nft-pallets.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1675867977,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"learn-nft-pallets",title:"NFT Pallets",sidebar_label:"NFT Pallets",description:"An overview of the functionalities of NFT Pallets in Polkadot Ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0","nfts","NFT pallets"],slug:"../learn-nft-pallets"},sidebar:"docs",previous:{title:"Introduction to NFTs",permalink:"/docs/learn-nft"},next:{title:"Consensus",permalink:"/docs/learn-consensus"}},c={},u=[{value:"NFTs Pallet",id:"nfts-pallet",level:2},{value:"Current Implementations",id:"current-implementations",level:3},{value:"Work in Progress",id:"work-in-progress",level:3},{value:"Uniques Pallet",id:"uniques-pallet",level:2}],m={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"NFT ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-extrinsics#pallets-and-extrinsics"},"pallets")," allow developers to easily implement\nNFT-related actions within their dApp."),(0,i.kt)("h2",{id:"nfts-pallet"},"NFTs Pallet"),(0,i.kt)("h3",{id:"current-implementations"},"Current Implementations"),(0,i.kt)("p",null,"NFTs is a ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/extrinsics#nfts"},"FRAME pallet")," currently deployed\non Westmint, which provides a multitude of functions to interact with NFTs."),(0,i.kt)("p",null,"The pallet comes with a new way to configure NFTs, as well as configure collections and items.\nPallet-level ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/12367"},"feature flags")," allow disabling\nfunctionalities that are not needed in the runtime."),(0,i.kt)("p",null,"Some features are common to the NFT world, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Buying an item up for sale.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating (i.e., mint) and burning (i.e., destroy) a collection of items or a single item (burning\nmust be signed either by the admin of the collection or the owner). Creating an item usually\ninvolves setting some attributes specific to that item. Creating a collection also requires the\nspecification of the maximum number of items."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/12483"},"Different settings")," are available for minting\ncollections:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"public mints: everyone can mint an asset (good for soul-bound collections)"),(0,i.kt)("li",{parentName:"ul"},"external mint: mint for holders of NFTs in another collection"),(0,i.kt)("li",{parentName:"ul"},"wave minting: mint X number of items that go to collection owners and Y number of items for the\npublic"),(0,i.kt)("li",{parentName:"ul"},"force mint: minting bypassing mint settings"),(0,i.kt)("li",{parentName:"ul"},"change max supply until it gets locked: possibility to change the supply for a limited amount of\ntimes"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/12702"},"Smart attributes")," allow an NFT owner to grant\npermission to other entities (another account, an application, etc.) to update attributes of an\nNFT. An example could be that all Polkadot fellowship members have an NFT badge that gets updated\nover time (sort of a rank) with a consequent upgrade in membership permissions.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A collection is managed by the Issuer, the Admin and the Freezer. Those roles can be changed\nanytime, and there will be the option to attach\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/12437"},"multiple accounts per role"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Setting metadata for an item or collection (metadata includes all essential information about the\nitem or the collection)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Setting or re-setting the price of an item.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clearing attributes and metadata of a collection or an item.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Changing the owner of an item or a collection.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Transferring an item, as well as creating and canceling transfer approvals of a specific item, or\nan ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/12285"},"atomic swap"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Transferring ownership of an item."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Metadata, attributes, and settings of an item or collection can be locked. The user can decide what\nto lock. Also, unauthorized and/or unprivileged transfers can be prevented by locking mechanism\n(unprivileged actions can be re-allowed anytime).")),(0,i.kt)("p",null,"Other features are less common and include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Delegating accounts: delegated accounts can approve changes to an item's attributes and transfer\nan item. The item owner always has control and can decide to cancel approvals from a delegated\naccount."),(0,i.kt)("li",{parentName:"ul"},"One can also execute pending atomic swaps created by a counterpart.")),(0,i.kt)("h3",{id:"work-in-progress"},"Work in Progress"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/12565"},"NFTs fractionalization")," will allow the user to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Take ownership of an NFT from the ",(0,i.kt)("a",{parentName:"li",href:"#uniques-pallet"},"pallet-uniques")),(0,i.kt)("li",{parentName:"ul"},"Create a new asset in ",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/substrate/extrinsics#assets"},"pallet-assets")),(0,i.kt)("li",{parentName:"ul"},"Mint the input amount to the previous owner of the NFT as the beneficiary")),(0,i.kt)("h2",{id:"uniques-pallet"},"Uniques Pallet"),(0,i.kt)("p",null,"Uniques is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/uniques"},"FRAME pallet"),"\ndeployed on the Statemint and Statemine system parachains. It implements the most basic kind of NFT\n-- a data record referencing some metadata. This metadata reference is mutable until frozen, so NFTs\nand their classes (entities derived from) are mutable unless specifically made immutable by the\nissuer."),(0,i.kt)("p",null,"Uniques takes a very bare-bones approach on purpose, to keep the Statemine / Statemint chain a\nsimple balance-keeping chain for both fungible and non-fungibles."),(0,i.kt)("p",null,"These NFTs can be viewed and interacted with on ",(0,i.kt)("a",{parentName:"p",href:"https://singular.app"},"RMRK's Singular platform"),", by\nswitching the top right menu from Kusama to Statemine or Statemint."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"nft-statemine",src:n(74343).Z,width:"2110",height:"617"})),(0,i.kt)("p",null,"The can also be interacted with directly through the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-statemine-rpc.paritytech.net#/extrinsics"},"extrinsics tab of Statemine"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"uniques.png",src:n(4721).Z,width:"997",height:"608"})))}d.isMDXComponent=!0},74343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nft-statemine-48ec78c3fcc8199d7d9164959424d5e3.png"},4721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/uniques-cd3bd4a76bd57ef0e79de4a0b36aa237.png"}}]);