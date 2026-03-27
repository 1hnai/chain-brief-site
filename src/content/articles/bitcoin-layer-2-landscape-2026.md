---
title: "Bitcoin's Layer 2 Landscape: Lightning, Stacks, and Babylon"
description: "Bitcoin's base layer is slow and expensive for anything beyond large transfers. Three very different Layer 2 approaches are competing to change that."
category: "Deep Dive"
publishedDate: "2026-03-27"
status: "live"
author: "Chain Brief"
---

Bitcoin processes roughly seven transactions per second on its base layer. Fees spike during periods of high demand, and the average block time sits at ten minutes by design. For large transfers between institutions, those constraints barely matter. For a developer trying to build an application, or a user trying to pay for coffee, they are a real problem.

The result is a growing ecosystem of Layer 2 networks built on top of Bitcoin, each taking a different approach to what "useful" means. Three of them have gained the most traction: the Lightning Network, Stacks, and Babylon.

## Lightning: Bitcoin as a Payment Rail

Lightning launched in 2018. The design is straightforward: two parties open a payment channel by locking bitcoin in a shared on-chain transaction, then conduct unlimited off-chain payments between themselves. Those payments are instant and cheap. When either party wants to close the channel, a final settlement transaction writes the balances back to the Bitcoin base layer.

The network effect comes from routing. You do not need a direct channel with every counterparty. As long as there is a connected path of channels between you and your recipient, payments route automatically, with each intermediate node collecting a small fee.

El Salvador made Lightning the payment layer for its national bitcoin rollout, and Strike built its consumer app on the network. Dozens of exchanges and wallets now support Lightning deposits and withdrawals. For bitcoin payments at the scale of a coffee or a small invoice, Lightning works.

The limitation is capital efficiency. Every channel requires locked BTC. Routing large payments reliably requires that intermediate nodes have enough liquidity in the right direction, and managing channel liquidity is an ongoing operational task for serious node operators. Lightning is excellent at what it does, and what it does is specifically payments. It does not run general smart contracts.

## Stacks: Smart Contracts Anchored to Bitcoin

Stacks takes a different approach. It is a Layer 1 blockchain in its own right, but one whose security is explicitly tied to Bitcoin. Stacks uses a consensus mechanism called Proof of Transfer, where miners commit BTC to compete for the right to add a Stacks block. The BTC committed by losing miners is distributed to Stacks holders who participate in the network. Bitcoin blocks act as the canonical reference for Stacks block order.

The practical consequence is that Stacks transactions achieve finality anchored to Bitcoin's proof-of-work history. Every Stacks block references a Bitcoin block hash. If Bitcoin is secure, the Stacks chain ordering is secure.

Stacks runs smart contracts in a language called Clarity, which is designed to be predictable and auditable. Transactions are expensive relative to Ethereum L2s but far cheaper than Bitcoin base layer during congestion.

sBTC, which launched in late 2024, is the mechanism that makes this interesting for DeFi. It allows users to lock BTC on the Bitcoin base layer and receive a synthetic sBTC token on the Stacks chain at a 1:1 peg. That sBTC can be used in Stacks smart contracts, then redeemed back for real BTC. Unlike wrapped BTC solutions that rely on custodians or multisigs, sBTC is backed by a decentralized set of signers using threshold cryptography. The peg is open: anyone can mint or redeem.

This matters because it allows bitcoin to move into DeFi applications without being handed to a centralized custodian.

## Babylon: Staking Bitcoin Without Moving It

Babylon solves a different problem. Proof-of-stake blockchains need economic security. They require validators to lock up capital that can be slashed if those validators behave dishonestly. Bootstrapping a new PoS chain means convincing validators to acquire and lock the chain's native token. If the token has low value, the security is weak.

Babylon's insight is that BTC is the most liquid and widely held asset in crypto. If you could use locked BTC as the slashable stake for a PoS chain, you could inherit Bitcoin's economic security without issuing your own token first.

The protocol achieves this through Bitcoin script. A BTC holder time-locks their bitcoin using a Bitcoin transaction. The locking script includes conditions under which that BTC can be slashed. A PoS chain running the Babylon protocol reads these Bitcoin transactions and treats the locked BTC as stake. If the validator equivocates or acts maliciously, a slashing transaction burns their BTC directly on the Bitcoin base layer.

Critically, the BTC never leaves Bitcoin. There is no bridge, no custodian, no wrapped token. The stake sits on the Bitcoin chain and the slashing mechanism runs via Bitcoin script.

Babylon launched its staking protocol in 2024 and has onboarded several PoS networks as the first consumers of Bitcoin-derived security. The model trades some yield efficiency for the property that participants never give up custody of their coins.

## What These Three Approaches Have in Common

None of them require changing Bitcoin. Bitcoin Core has not been modified. Miners do not need to adopt new software. All three protocols build on top of Bitcoin's existing properties rather than asking the base layer to do something new.

That is both a feature and a constraint. Bitcoin's governance is conservative by design, which means builders working above the base layer cannot rely on new primitives arriving quickly. They have to work with what exists: UTXO scripting, time-locks, hash pre-images, and multi-signature conditions.

The result is a set of Layer 2 networks that look nothing like Ethereum's rollup ecosystem. There is no single scaling paradigm. Lightning, Stacks, and Babylon each extend Bitcoin in a different direction, for a different set of use cases.

## The Limits

Lightning is operational but carries known limitations on routing large payments and requires liquidity management. Stacks' sBTC is newer and its peg security depends on the honesty of a threshold signer set that has not been stress-tested at scale. Babylon's slashing mechanism is technically elegant, but the PoS chains consuming Bitcoin security are early-stage.

None of these is a finished product. They are bets on different ways that BTC's liquidity can serve more than one function.

For a network with over a trillion dollars of market cap sitting mostly idle, the direction of travel is clear. Whether any single protocol captures that liquidity in a durable way is an open question.
