"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],r={id:"learn-consensus",title:"Polkadot Consensus",sidebar_label:"Consensus",description:"An explanation of the consensus model used in Polkadot.",keywords:["consensus","proof of stake","nominated proof of stake","hybrid consensus","finality"],slug:"../learn-consensus"},l=void 0,c={unversionedId:"learn/learn-consensus",id:"learn/learn-consensus",title:"Polkadot Consensus",description:"An explanation of the consensus model used in Polkadot.",source:"@site/../docs/learn/learn-consensus.md",sourceDirName:"learn",slug:"/learn-consensus",permalink:"/docs/learn-consensus",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-consensus.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1669652642,formattedLastUpdatedAt:"Nov 28, 2022",frontMatter:{id:"learn-consensus",title:"Polkadot Consensus",sidebar_label:"Consensus",description:"An explanation of the consensus model used in Polkadot.",keywords:["consensus","proof of stake","nominated proof of stake","hybrid consensus","finality"],slug:"../learn-consensus"},sidebar:"docs",previous:{title:"Teleporting Assets",permalink:"/docs/learn-teleport"},next:{title:"Governance",permalink:"/docs/learn-governance"}},d={},h=[{value:"Why do we need Consensus?",id:"why-do-we-need-consensus",level:2},{value:"What are PoW and PoS?",id:"what-are-pow-and-pos",level:2},{value:"Why not Proof of Work?",id:"why-not-proof-of-work",level:2},{value:"Nominated Proof of Stake",id:"nominated-proof-of-stake",level:2},{value:"Probabilistic vs. Provable Finality",id:"probabilistic-vs-provable-finality",level:2},{value:"Hybrid Consensus",id:"hybrid-consensus",level:2},{value:"Block Production: BABE",id:"block-production-babe",level:2},{value:"Multiple Validators per Slot",id:"multiple-validators-per-slot",level:3},{value:"No Validators in Slot",id:"no-validators-in-slot",level:3},{value:"BADASS BABE: SASSAFRAS",id:"badass-babe-sassafras",level:3},{value:"Finality Gadget: GRANDPA",id:"finality-gadget-grandpa",level:2},{value:"Protocol",id:"protocol",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Bridging: BEEFY",id:"bridging-beefy",level:2},{value:"Fork Choice",id:"fork-choice",level:2},{value:"Nakamoto consensus",id:"nakamoto-consensus",level:2},{value:"PBFT / Tendermint",id:"pbft--tendermint",level:2},{value:"Casper FFG",id:"casper-ffg",level:2}],p={toc:h};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"why-do-we-need-consensus"},"Why do we need Consensus?"),(0,i.kt)("p",null,"Consensus is a method for coming to agreement over a shared state. In order for the state of the\nblockchain to continue to build and move forward, all nodes in the network must agree and come to\nconsensus. It is the way that the nodes in a decentralized network are able to stay synced with each\nother. Without consensus for the decentralized network of nodes in a blockchain, there is no way to\nensure that the state one node believes is true will be shared by the other nodes. Consensus aims to\nprovide the ",(0,i.kt)("em",{parentName:"p"},"objective")," view of the state amid participants who each have their own ",(0,i.kt)("em",{parentName:"p"},"subjective"),"\nviews of the network. It is the process by which these nodes communicate and come to agreement, and\nare able to build new blocks."),(0,i.kt)("h2",{id:"what-are-pow-and-pos"},"What are PoW and PoS?"),(0,i.kt)("p",null,"Proof of Work (PoW) and Proof of Stake (PoS) have been inaccurately used as short hand to refer to\nconsensus mechanisms of blockchains, but that does not capture the full picture. PoW is the method\nfor agreeing on a block author and part of the fuller ",(0,i.kt)("a",{parentName:"p",href:"#nakamoto-consensus"},"Nakamoto consensus")," that\nalso encompasses a chain selection algorithm (longest chain rule in Bitcoin). Similarly, PoS is a\nset of rules for selecting the validator set and does not specify a chain selection rule or how a\nchain might reach finality. PoS algorithms have traditionally been paired with an algorithm for\ncoming to Byzantine agreement between nodes. For example, ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-cosmos"},"Tendermint"),"\nis a practical Byzantine fault tolerant algorithm that uses PoS as its validator set selection\nmethod."),(0,i.kt)("h2",{id:"why-not-proof-of-work"},"Why not Proof of Work?"),(0,i.kt)("p",null,"Although simple and effective in coming to a decentralized consensus on the next block producer,\nproof of work with Nakamoto consensus consumes an incredible amount of energy, has no economic or\nprovable finality, and has no effective strategy in resisting cartels."),(0,i.kt)("h2",{id:"nominated-proof-of-stake"},"Nominated Proof of Stake"),(0,i.kt)("p",null,"In traditional PoS systems, block production participation is dependent on token holdings as opposed\nto computational power. While PoS developers usually have a proponent for equitable participation in\na decentralized manner, most projects end up proposing some level of centralized operation, where\nthe number of validators with full participation rights is limited. These validators are often seen\nto be the most wealthy, and, as a result, influence the PoS network as they are the most staked.\nUsually, the number of candidates to maintain the network with the necessary knowledge (and\nequipment) is limited; this can directly increase operational costs as well. Systems with a large\nnumber of validators tend to form pools to decrease the variance of their revenue and profit from\neconomies of scale. These pools are often off-chain."),(0,i.kt)("p",null,"A way to alleviate this is to implement pool formation on-chain and allow token holders to vote\n","[with their stake]"," for validators to represent them."),(0,i.kt)("p",null,"Polkadot uses NPoS (Nominated Proof-of-Stake) as its mechanism for selecting the validator set. It\nis designed with the roles of ",(0,i.kt)("strong",{parentName:"p"},"validators")," and ",(0,i.kt)("strong",{parentName:"p"},"nominators"),", to maximize chain security. Actors\nwho are interested in maintaining the network can run a validator node."),(0,i.kt)("p",null,"Validators assume the role of producing new blocks in ",(0,i.kt)("a",{parentName:"p",href:"#block-production-babe"},"BABE"),", validating\nparachain blocks, and guaranteeing finality. Nominators can choose to back select validators with\ntheir stake. Nominators can approve candidates that they trust and back them with their tokens."),(0,i.kt)("h2",{id:"probabilistic-vs-provable-finality"},"Probabilistic vs. Provable Finality"),(0,i.kt)("p",null,"A pure Nakamoto consensus blockchain that runs PoW is only able to achieve the notion of\n",(0,i.kt)("em",{parentName:"p"},"probabilistic finality")," and reach ",(0,i.kt)("em",{parentName:"p"},"eventual consensus"),". Probabilistic finality means that under\nsome assumptions about the network and participants, if we see a few blocks building on a given\nblock, we can estimate the probability that it is final. Eventual consensus means that at some point\nin the future, all nodes will agree on the truthfulness of one set of data. This eventual consensus\nmay take a long time and will not be able to be determined how long it will take ahead of time.\nHowever, finality gadgets such as GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement)\nor Ethereum's Casper FFG (the Friendly Finality Gadget) are designed to give stronger and quicker\nguarantees on the finality of blocks - specifically, that they can never be reverted after some\nprocess of Byzantine agreements has taken place. The notion of irreversible consensus is known as\n",(0,i.kt)("em",{parentName:"p"},"provable finality.")),(0,i.kt)("p",null,"In the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf"},"GRANDPA paper"),", it is phrased\nin this way:"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We say an oracle A in a protocol is ",(0,i.kt)("em",{parentName:"p"},"eventually consistent")," if it returns the same value to all\nparticipants after some unspecified time.")),(0,i.kt)("h2",{id:"hybrid-consensus"},"Hybrid Consensus"),(0,i.kt)("p",null,"There are two protocols we use when we talk about the consensus protocol of Polkadot, GRANDPA and\nBABE (Blind Assignment for Blockchain Extension). We talk about both of these because Polkadot uses\nwhat is known as ",(0,i.kt)("em",{parentName:"p"},"hybrid consensus"),". Hybrid consensus splits up the finality gadget from the block\nproduction mechanism."),(0,i.kt)("p",null,'This is a way of getting the benefits of probabilistic finality (the ability to always produce new\nblocks) and provable finality (having a universal agreement on the canonical chain with no chance\nfor reversion) in Polkadot. It also avoids the corresponding drawbacks of each mechanism (the chance\nof unknowingly following the wrong fork in probabilistic finality, and a chance for "stalling" - not\nbeing able to produce new blocks - in provable finality). By combining these two mechanisms,\nPolkadot allows for blocks to be rapidly produced, and the slower finality mechanism to run in a\nseparate process to finalize blocks without risking slower transaction processing or stalling.'),(0,i.kt)("p",null,"Hybrid consensus has been proposed in the past. Notably, it was proposed (now defunct) as a step in\nEthereum's transition to proof of stake in ",(0,i.kt)("a",{parentName:"p",href:"http://eips.ethereum.org/EIPS/eip-1011"},"EIP 1011"),", which\nspecified ",(0,i.kt)("a",{parentName:"p",href:"#casper-ffg"},"Casper FFG"),"."),(0,i.kt)("h2",{id:"block-production-babe"},"Block Production: BABE"),(0,i.kt)("p",null,"BABE (Blind Assignment for Blockchain Extension) is the block production mechanism that runs between\nthe validator nodes and determines the authors of new blocks. BABE is comparable as an algorithm to\n",(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2017/573.pdf"},"Ouroboros Praos"),", with some key differences in chain\nselection rule and slot time adjustments. BABE assigns block production slots to validators\naccording to stake and using the Polkadot\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-randomness"},"randomness cycle"),". The chains runtime is required to provide the BABE\nauthority list and randomness to the host via a consensus message in the header of the first block\nof each epoch."),(0,i.kt)("p",null,"BABE execution happens in sequential non-overlapping phases known as epochs. Each epoch is divided\ninto a predefined number of slots. All slots in each epoch are sequentially indexed starting from 0\n(slot number). At the beginning of each epoch, the BABE node needs to run the\n",(0,i.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/#algo-block-production-lottery"},"Block-Production-Lottery algorithm"),"\nto find out in which slots it should produce a block and gossip to the other block producers."),(0,i.kt)("p",null,"Validators participate in a lottery for every slot, which will inform whether or not they are the\nblock producer candidate for that slot. Slots are discrete units of time of approximately 6 seconds\nin length. Because the mechanism of allocating slots to validators is based on a randomized design,\nmultiple validators could be candidates for the same slot. Other times, a slot could be empty,\nresulting in inconsistent block time."),(0,i.kt)("h3",{id:"multiple-validators-per-slot"},"Multiple Validators per Slot"),(0,i.kt)("p",null,"When multiple validators are block producer candidates in a given slot, all will produce a block and\nbroadcast it to the network. At that point, it's a race. The validator whose block reaches most of\nthe network first wins. Depending on network topology and latency, both chains will continue to\nbuild in some capacity, until finalization kicks in and amputates a fork. See Fork Choice below for\nhow that works."),(0,i.kt)("h3",{id:"no-validators-in-slot"},"No Validators in Slot"),(0,i.kt)("p",null,"When no validators have rolled low enough in the randomness lottery to qualify for block production,\na slot can remain seemingly blockless. We avoid this by running a secondary, round-robin style\nvalidator selection algorithm in the background. The validators selected to produce blocks through\nthis algorithm always produce blocks, but these ",(0,i.kt)("em",{parentName:"p"},"secondary")," blocks are ignored if the same slot also\nproduces a primary block from a ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-randomness"},"VRF-selected")," validator. Thus, a slot can have\neither a ",(0,i.kt)("em",{parentName:"p"},"primary")," or a ",(0,i.kt)("em",{parentName:"p"},"secondary")," block, and no slots are ever skipped."),(0,i.kt)("p",null,"For more details on BABE, please see the\n",(0,i.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html"},"BABE paper"),"."),(0,i.kt)("h3",{id:"badass-babe-sassafras"},"BADASS BABE: SASSAFRAS"),(0,i.kt)("p",null,"SASSAFRAS (Semi Anonymous Sortition of Staked Assignees For Fixed-time Rhythmic Assignment of Slots)\n(aka SASSY BABE or BADASS BABE), is an extension of BABE and acts as a constant-time block\nproduction protocol. This approach tries to address the shortcomings of BABE by ensuring that\nexactly one block is produced with time-constant intervals. The protocol utilizes zk-SNARKs to\nconstruct a ring-VRF and is a work in progress. This section will be updated as progress ensues."),(0,i.kt)("h2",{id:"finality-gadget-grandpa"},"Finality Gadget: GRANDPA"),(0,i.kt)("p",null,"GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement) is the finality gadget that is\nimplemented for the Polkadot Relay Chain."),(0,i.kt)("p",null,"The Polkadot Host uses the GRANDPA Finality protocol to finalize blocks. Finality is obtained by\nconsecutive rounds of voting by the validator nodes. Validators execute GRANDPA finality process in\nparallel to Block Production as an independent service."),(0,i.kt)("p",null,"It works in a partially synchronous network model as long as 2/3 of nodes are honest and can cope\nwith 1/5 Byzantine nodes in an asynchronous setting."),(0,i.kt)("p",null,"A notable distinction is that GRANDPA reaches agreements on chains rather than blocks, greatly\nspeeding up the finalization process, even after long-term network partitioning or other networking\nfailures."),(0,i.kt)("p",null,"In other words, as soon as more than 2/3 of validators attest to a chain containing a certain block,\nall blocks leading up to that one are finalized at once."),(0,i.kt)("h3",{id:"protocol"},"Protocol"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf"},"the GRANDPA paper"),"\nfor a full description of the protocol."),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"The\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/frame/grandpa/src/lib.rs"},"Substrate implementation of GRANDPA"),"\nis part of Substrate Frame."),(0,i.kt)("h2",{id:"bridging-beefy"},"Bridging: BEEFY"),(0,i.kt)("p",null,"The BEEFY (Bridge Efficiency Enabling Finality Yielder) is a secondary protocol to GRANDPA to\nsupport efficient bridging between the Polkadot network (relay chain) and remote, segregated\nblockchains, such as Ethereum, which were not built with the Polkadot interchain operability in\nmind. The protocol allows participants of the remote network to verify finality proofs created by\nthe Polkadot relay chain validators. In other words: clients in the Ethereum network should able to\nverify that the Polkadot network is at a specific state."),(0,i.kt)("p",null,"Storing all the information necessary to verify the state of the remote chain, such as the block\nheaders, is too expensive. BEEFY stores the information in a space-efficient way and clients can\nrequest additional information over the protocol."),(0,i.kt)("p",null,"For additional implementation details, check out\n",(0,i.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/#sect-grandpa-beefy"},"this")," section of the Polkadot Spec."),(0,i.kt)("h2",{id:"fork-choice"},"Fork Choice"),(0,i.kt)("p",null,"Bringing BABE and GRANDPA together, the fork choice of Polkadot becomes clear. BABE must always\nbuild on the chain that has been finalized by GRANDPA. When there are forks after the finalized\nhead, BABE provides probabilistic finality by building on the chain with the most primary blocks."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Best chain choice",src:n(4532).Z,width:"1739",height:"817"})),(0,i.kt)("p",null,'In the above image, the black blocks are finalized, and the yellow blocks are not. Blocks marked\nwith a "1" are primary blocks; those marked with a "2" are secondary blocks. Even though the topmost\nchain is the longest chain on the latest finalized block, it does not qualify because it has fewer\nprimaries at the time of evaluation than the one below it.'),(0,i.kt)("h1",{id:"comparisons"},"Comparisons"),(0,i.kt)("h2",{id:"nakamoto-consensus"},"Nakamoto consensus"),(0,i.kt)("p",null,"Nakamoto consensus consists of the longest chain rule using proof of work as its Sybil resistance\nmechanism and leader election."),(0,i.kt)("p",null,"Nakamoto consensus only gives us probabilistic finality. Probabilistic finality states that a block\nin the past is only as safe as the number of confirmations it has, or the number of blocks that have\nbeen built on top of it. As more blocks are built on top of a specific block in a Proof of Work\nchain, more computational work has been expended behind this particular chain. However, it does not\nguarantee that the chain containing the block will always remain the agreed-upon chain, since an\nactor with unlimited resources could potentially build a competing chain and expend enough\ncomputational resources to create a chain that did not contain a specific block. In such a\nsituation, the longest chain rule employed in Bitcoin and other proof of work chains would move to\nthis new chain as the canonical one."),(0,i.kt)("h2",{id:"pbft--tendermint"},"PBFT / Tendermint"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-comparisons-cosmos#consensus"},"relevant section")," in the Cosmos comparison\narticle."),(0,i.kt)("h2",{id:"casper-ffg"},"Casper FFG"),(0,i.kt)("p",null,"The two main differences between GRANDPA and Casper FFG are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in GRANDPA, different voters can cast votes simultaneously for blocks at different heights"),(0,i.kt)("li",{parentName:"ul"},"GRANDPA only depends on finalized blocks to affect the fork-choice rule of the underlying block\nproduction mechanism")),(0,i.kt)("h1",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/block-production/Babe.html"},"BABE paper")," - The\nacademic description of the BABE protocol."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf"},"GRANDPA paper")," - The academic\ndescription of the GRANDPA finality gadget. Contains formal proofs of the algorithm."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/finality-grandpa"},"Rust implementation")," - The reference\nimplementation and the accompanying\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/master/frame/grandpa/src/lib.rs"},"Substrate pallet"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/polkadot-block-production"},"Block Production and Finalization in Polkadot")," -\nAn explanation of how BABE and GRANDPA work together to produce and finalize blocks on Kusama,\nwith Bill Laboon."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=1CuTSluL7v4&t=4s"},"Block Production and Finalization in Polkadot: Understanding the BABE and GRANDPA Protocols")," -\nAn academic talk by Bill Laboon, given at MIT Cryptoeconomic Systems 2020, describing Polkadot's\nhybrid consensus model in-depth.")))}u.isMDXComponent=!0},4532:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/best_chain-52a3da00fb2f804a198c73690fcedc4f.png"}}]);