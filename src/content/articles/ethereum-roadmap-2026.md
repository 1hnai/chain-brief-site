---
title: "Ethereum's roadmap in 2026 — where are we?"
description: "The Surge, The Scourge, The Verge, The Purge, The Splurge. Vitalik laid out the phases years ago. Here's an honest look at what's shipped, what's still in progress, and where the L2 ecosystem stands today."
category: "Deep Dive"
publishedDate: "2026-03-14"
status: "live"
author: "Chain Brief"
---

Ethereum has been executing a multi-year technical roadmap with an unusually poetic set of names: The Merge, The Surge, The Scourge, The Verge, The Purge, The Splurge. Each phase targets a different set of improvements to scalability, decentralisation, or efficiency.

By early 2026, the roadmap has delivered some of its most important milestones — and the picture is more nuanced than either the optimists or the sceptics have generally acknowledged.

## What's shipped

**The Merge** is well in the past. Ethereum's transition from Proof of Work to Proof of Stake completed in September 2022, eliminating roughly 99.95% of the network's energy consumption. This was the most significant technical change in Ethereum's history, and it executed without incident.

**Proto-Danksharding (EIP-4844)**, which shipped in the Dencun upgrade in March 2024, introduced a new data type called "blobs" — a temporary, cheaper way for Layer 2 rollups to post data to Ethereum. The impact on L2 fees was dramatic: average transaction costs on major rollups like Arbitrum, Optimism, and Base dropped by 90% or more almost overnight. This was the key unlock for L2s becoming genuinely usable for everyday transactions.

**The Surge** is still in progress, but its early effects are being felt. The goal is 100,000+ transactions per second across the broader Ethereum ecosystem (mainnet plus L2s). Full Danksharding — the complete version of the blob scaling mechanism — remains a work in progress, but the L2 ecosystem has scaled to handle the current load comfortably.

## What's still coming

**The Verge** aims to make Ethereum easier to verify by introducing Verkle trees — a more efficient cryptographic data structure that would allow nodes to verify the chain without storing the full state. This would significantly lower the hardware requirements to run a full node, improving decentralisation. Verkle trees are in active development and testing, but not yet on mainnet.

**The Purge** is about removing historical data and complexity — simplifying the protocol and reducing the storage burden on nodes. This ties closely to EIP-4444, which would allow nodes to stop storing historical data older than a year, relying instead on a distributed archive system. Progress here is deliberate but ongoing.

**The Scourge** addresses MEV (Maximal Extractable Value) — the ability of validators and block builders to extract value by reordering, including, or excluding transactions. Proposer-Builder Separation (PBS) has been implemented off-chain, but enshrining it in the protocol is still in progress. MEV-related centralisation pressure on the validator set remains a live concern.

**The Splurge** is the catch-all for miscellaneous improvements — better randomness, EVM improvements, account abstraction. EIP-7702 (enabling smart contract functionality for EOAs) shipped in the Pectra upgrade in 2025 and has meaningfully improved the account abstraction story.

## The L2 ecosystem: maturity and fragmentation

The most visible change in Ethereum's landscape over the past two years has been the rise of L2s as the primary user-facing layer. The combination of EIP-4844's fee reductions and continued infrastructure maturation has made rollups the default environment for most Ethereum activity.

Arbitrum, Optimism, and Base collectively handle the majority of Ethereum-ecosystem transaction volume. The OP Stack (powering Optimism, Base, and a growing cohort of "Superchain" members) has emerged as the dominant rollup framework, though zkEVM rollups — particularly zkSync and Polygon's AggLayer — are competitive and continuing to mature.

The tradeoff that's emerged is one of fragmentation. Each major L2 is its own execution environment with its own bridge, its own sequencer, and in some cases its own token. Moving assets between L2s still involves friction — though cross-chain messaging protocols and liquidity networks have improved the experience considerably.

Full interoperability between L2s — the seamless experience where the difference between Arbitrum and Base is as invisible to users as the difference between two bank branches — remains unfinished. It's the most important UX problem in the Ethereum ecosystem.

## Where this leaves us

Ethereum in 2026 is a significantly different beast from Ethereum in 2021. The chain has successfully scaled via its L2-centric architecture. Fees for most users are measured in cents rather than tens of dollars. The transition to Proof of Stake has held. Developer tooling and infrastructure are more mature than at any previous point.

The remaining roadmap items — Verkle trees, full Danksharding, protocol-enshrined PBS — are less glamorous than The Merge but no less important. They're the work of making the base layer robust, decentralised, and efficient enough to serve as credibly neutral infrastructure for the decades ahead.

The Ethereum roadmap is not finished. But the foundation it's being built on is considerably more solid than it was two years ago.

---

*Chain Brief covers crypto from first principles to the latest signals. Nothing here is financial advice.*
