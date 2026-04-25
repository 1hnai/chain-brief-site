---
title: "The $292 Million KelpDAO Hack Exposes DeFi's Cross-Chain Blind Spot"
description: "A Lazarus Group attack on KelpDAO's LayerZero bridge drained $292 million and triggered $14 billion in DeFi outflows, revealing systemic risks in cross-chain infrastructure."
category: "Analysis"
publishedDate: "2026-04-25"
status: "live"
author: "Chain Brief"
---

The largest DeFi exploit of 2026 did not come from a buggy smart contract. It came from a compromised node, a single point of failure, and a coordinated network attack that fooled a verification system into releasing $292 million in wrapped ether.

On April 18, KelpDAO's LayerZero bridge was drained of approximately 116,500 rsETH. By the time the dust settled, total value locked across DeFi had fallen by more than $13 billion in 48 hours, and Aave alone saw $8.45 billion in deposits exit the platform.

## What Happened

The KelpDAO exploit was not a classic reentrancy or logic bug. Investigators at Chainalysis and OpenZeppelin traced the attack to off-chain infrastructure. The attackers, linked by multiple on-chain forensics firms to North Korea's Lazarus Group, identified a critical weakness in how KelpDAO's bridge verified cross-chain messages.

KelpDAO had configured its LayerZero Decentralized Verifier Network using a 1-of-1 setup, meaning a single verifier node was responsible for confirming that tokens burned on one chain authorized a release on another. That is the equivalent of a vault secured by one lock with one key.

The attackers launched a distributed denial-of-service attack against the external RPC nodes that would ordinarily provide a check on that verifier. With legitimate nodes knocked offline, the remaining verifier was isolated. Attackers fed it fraudulent cross-chain messages, and the Ethereum contract released 116,500 rsETH to wallets under attacker control based on a burn event that never actually occurred on the source chain.

The funds were then laundered through THORChain, a pattern that has become familiar in Lazarus Group operations.

## Why It Cascaded

Because rsETH served as collateral across more than 20 networks, the hack immediately raised questions about whether rsETH on Layer 2s was still properly backed. Protocols including Aave, SparkLend, and Fluid moved to freeze or delist rsETH markets.

Arbitrum's Security Council intervened to freeze more than 30,000 ETH connected to the exploit. That intervention stopped further damage but opened a different conversation: a small elected body had moved and locked user funds unilaterally, calling into question what decentralization actually means when things go wrong.

## A Pattern Repeating Itself

KelpDAO was not an isolated incident. Solana-based perpetuals protocol Drift was drained of $285 million in April as well, also attributed to Lazarus Group. In the weeks surrounding these two large events, smaller protocols including CoW Swap, Volo Protocol, Zerion, and Silo Finance were all exploited, with losses ranging from $1 million to $3.5 million each.

The common thread is not a single vulnerability class but a broader pattern: cross-chain infrastructure configured for convenience rather than resilience, with verification networks that introduce centralized choke points attackers can target without ever touching the smart contracts themselves.

## What Needs to Change

The KelpDAO post-mortem from OpenZeppelin made a point worth repeating: "$292 million lost, zero bugs found." The smart contracts performed exactly as written. The problem was the trust assumptions baked into the off-chain components those contracts relied on.

Bridge security has historically focused on auditing Solidity code. The KelpDAO attack argues that audits need to extend to the full verification stack, including DVN configurations, RPC dependencies, and the minimum quorum requirements that determine how many nodes need to agree before funds move.

LayerZero has published guidance recommending multi-DVN configurations with at least a 2-of-3 quorum. KelpDAO's 1-of-1 setup was not prohibited by the protocol, only inadvisable. That gap between what is possible and what is safe is where attackers continue to operate.

## The Bigger Picture

DeFi's total value locked was already under pressure before April. The combination of KelpDAO and Drift has pushed outflows to levels not seen since the 2022 bear market. Whether that represents a temporary confidence shock or a more durable repricing of cross-chain risk depends on how quickly the industry moves from identifying the problem to actually fixing infrastructure defaults.

For now, the $292 million figure stands as a reminder that the weakest link in a multi-chain system is rarely the code. It is the assumptions about who is watching.
