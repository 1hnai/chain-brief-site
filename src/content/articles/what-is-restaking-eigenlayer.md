---
title: "What is restaking - and why does EigenLayer matter?"
description: "Ethereum staking secures one network. Restaking takes the same staked ETH and uses it to secure many. Here's how EigenLayer made that possible, what it's become, and what the risks look like."
category: "Deep Dive"
publishedDate: "2026-03-21"
status: "live"
author: "Chain Brief"
---

When you stake ETH on Ethereum, you're locking capital as collateral in exchange for the right to validate transactions. In return, you earn issuance rewards. That staked ETH has one job: keep the Ethereum consensus layer honest.

Restaking asks a simple question: what if the same staked ETH could do more than one job?

## How restaking works

EigenLayer, which launched on mainnet in 2023, introduced restaking as a primitive. The idea is straightforward. Stakers opt in to extend their economic security - their staked ETH and the penalty risk attached to it - to additional services beyond Ethereum itself.

Those additional services are called **Actively Validated Services (AVSs)**. Think of them as decentralised infrastructure that needs security guarantees: data availability layers, shared sequencers for Layer 2 rollups, oracle networks, cross-chain bridges. Each one needs a set of validators willing to behave honestly or face a financial penalty. Restaking lets them borrow Ethereum's existing validator set rather than bootstrapping a new one from scratch.

The result is pooled security. The same capital that validates Ethereum blocks can simultaneously back an AVS, and if a restaker misbehaves on that AVS, they can be slashed on both.

## What EigenLayer has become

By March 2026, EigenLayer has grown into one of the most significant protocols in the Ethereum network. Around 4.3 million ETH - roughly $15 billion in value - is restaked through the protocol, representing about 93% of the restaking market. <!-- STALE: TVL peaked at ~$28.6B in 2025; the "$15 billion" figure may reflect a specific point in time and the ETH amount changes; 93% market share figure unverified --> The project has since rebranded to **EigenCloud**, expanding its scope toward verifiable computation and AI inference services, not just staking infrastructure.

New products - EigenDA (a data availability service used by multiple rollups), EigenCompute, and EigenAI - have launched on mainnet. EigenDA in particular has seen real adoption, providing cheaper data availability to L2s that don't want to pay Ethereum blob fees for every transaction.

## What the risks look like

Restaking is not free. The most frequently cited concern is **cascading slashing**: if a major AVS has a bug, or a validator behaves maliciously across several services simultaneously, the losses could amplify in ways that are difficult to anticipate. The "pooled security" benefit cuts both ways - shared upside, shared downside.

There are also structural questions around centralisation. The validator sets on many AVSs are not uniformly distributed, and the same large operators tend to dominate across services. That concentration is a live concern.

The EIGEN token's value capture has also been debated. Token unlocks in early 2026 have created supply pressure, and the fee model that would route AVS revenue to token holders hasn't yet been implemented.

## Why it matters

Restaking represents a genuine architectural shift: instead of every new decentralised service building its own validator network from scratch, they can rent credible economic security from Ethereum's existing stake. That's a meaningful reduction in the cost and time to launch secure infrastructure.

Whether EigenCloud's expanding vision - verifiable AI, agentic payments, trusted computation - holds up is still an open question. But the restaking primitive it pioneered is already woven into how the Ethereum network builds.

---

*Chain Brief covers crypto from first principles to the latest signals. Nothing here is financial advice.*
