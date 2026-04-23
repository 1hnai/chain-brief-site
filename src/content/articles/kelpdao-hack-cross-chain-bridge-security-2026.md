---
title: "The KelpDAO Hack Exposes the Hidden Danger in Every Cross-Chain Bridge"
description: "A $292 million exploit of KelpDAO's LayerZero bridge in April 2026 reveals how a single misconfigured validator can unravel the entire cross-chain ecosystem."
category: "Analysis"
publishedDate: "2026-04-23"
status: "live"
author: "Chain Brief"
---

In the span of a few hours on April 19, attackers drained 116,500 rsETH, worth roughly $292 million, from KelpDAO's cross-chain bridge. It became the largest DeFi exploit of 2026 and sent shockwaves across the restaking ecosystem, pulling nearly $14 billion in total value locked out of DeFi protocols within days. What the attack revealed was not just a flaw in one protocol, but a fundamental structural weakness hiding inside much of modern cross-chain infrastructure.

## What Happened

KelpDAO is a liquid restaking protocol. Its rsETH token is deployed across more than 20 networks, including Base, Arbitrum, Linea, Blast, Mantle, and Scroll. LayerZero's OFT (Omnichain Fungible Token) standard handles the cross-chain movement of rsETH. The ETH locked in LayerZero's bridge contract was the reserve backing every wrapped version of rsETH on every Layer 2.

Attackers, whom LayerZero attributed to North Korea's Lazarus Group, compromised two RPC nodes that the bridge relied on. Using a combination of malicious software swaps and a targeted DDoS attack, they forced the bridge's verifier into a failover state. The fraudulent transaction that followed looked legitimate enough to pass verification, and the funds moved out.

The technical crux of the issue: KelpDAO's bridge was configured with a "1/1 DVN" setup. DVN stands for Decentralized Verifier Network. A 1/1 configuration means only a single verifier must approve a cross-chain message. There is no second check, no redundancy, no fallback. One compromised node was all it took.

## The Configuration Dispute

After the exploit, both KelpDAO and LayerZero pointed fingers at each other, and both had a point.

LayerZero argued that KelpDAO had been warned about the risks of single-verifier configurations and chose to proceed anyway. The team at KelpDAO countered that LayerZero's own quickstart documentation and default GitHub configurations ship with a 1/1 DVN setup as the baseline. According to reporting by CoinDesk, roughly 40% of protocols currently live on LayerZero are using that same single-verifier configuration.

That statistic is the real headline. The KelpDAO exploit was not an outlier born of extreme negligence. It was a predictable outcome of industry-wide defaults that favor speed of deployment over security.

## Why Bridges Stay Vulnerable

Cross-chain bridges have been the most lucrative targets in crypto for years. The Ronin Bridge, Nomad, Wormhole, Harmony's Horizon, and now KelpDAO, the pattern keeps repeating. The reason is structural.

A bridge is, at its core, a message passing system. It listens on one chain, receives a signal, and triggers an action on another. Every step in that sequence is a potential attack surface: the RPC nodes listening for events, the validators confirming messages, the smart contracts executing the resulting instructions. As chains multiply and bridging becomes more complex, the attack surface expands.

Modular security architectures like LayerZero's DVN model were designed to address this by letting protocols mix and match verification layers. The problem is that flexibility without enforced minimums creates a race to the bottom. Developers under shipping pressure take the default. The default is a 1/1 setup. And a 1/1 setup breaks the moment one node is compromised.

## The Contagion Effect

Because rsETH backed bridged tokens across 20 networks simultaneously, the hack did not stay contained. Wrapped rsETH on every connected chain became worthless the moment the reserve was drained. Aave, which had significant rsETH exposure, saw roughly $9 to $10 billion in deposits withdrawn in the days following the hack as users raced for the exits.

April 2026 is now on track to be the worst month for crypto hacks since the Bybit breach earlier in 2025, with total losses exceeding $600 million. Drift, a Solana perpetuals protocol, was separately drained of $285 million earlier in the month in an attack also linked to North Korea.

## What Needs to Change

The KelpDAO case argues for two practical reforms. First, bridge infrastructure providers need to deprecate single-verifier defaults and require multi-DVN configurations before mainnet deployment. Second, protocols building on shared infrastructure need to treat their configuration choices as security-critical decisions, not setup checkboxes.

Jefferies analysts noted after the exploit that the scale of losses could push institutional players to reconsider their DeFi exposure entirely. That kind of capital flight is the real cost of an industry that still treats security as an afterthought.

Cross-chain connectivity is not optional at this point. It is how DeFi works. But connectivity built on fragile defaults is not infrastructure. It is a liability waiting to be triggered.
