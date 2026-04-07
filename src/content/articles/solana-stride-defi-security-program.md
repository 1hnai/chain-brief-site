---
title: "Solana Launches STRIDE After $285M Drift Hack Shakes DeFi"
description: "The Solana Foundation's new STRIDE program offers tiered, continuous security coverage for DeFi protocols, funded by the foundation based on TVL."
category: "Deep Dive"
publishedDate: "2026-04-07"
status: "live"
author: "Chain Brief"
---

Days after one of the largest DeFi exploits in history, the Solana Foundation has rolled out a sweeping new security framework called STRIDE. The program represents a fundamental rethink of how blockchain ecosystems protect their protocols, moving away from one-off audits toward continuous, scaled coverage.

## What Happened at Drift

On April 1, 2026, Drift Protocol, a perpetuals and spot trading platform on Solana, was drained of roughly $285 million in user funds. Attackers exploited a novel vector involving durable nonces to seize control of the protocol's Security Council, essentially taking administrative ownership of the system.

The attack was later linked to a North Korean state-affiliated group, adding a geopolitical dimension to an already devastating event. Drift suspended deposits and withdrawals while it worked to contain the damage, and the incident quickly reignited long-running debates about the security of DeFi infrastructure.

## Enter STRIDE

STRIDE stands for Solana Trust, Resilience, and Infrastructure for DeFi Enterprises. Developed with security research firm Asymmetric Research, the program launched on April 6, just five days after the Drift breach.

The core idea is straightforward: instead of requiring protocols to independently find and fund auditors, the Solana Foundation steps in to provide or subsidize security services scaled to each protocol's risk profile.

STRIDE is built around eight security pillars covering operational security, access controls, multisig configurations, and governance vulnerabilities. Every participating protocol receives an independent evaluation and a published report, regardless of size. Findings are posted publicly, creating a degree of ecosystem-wide transparency that has historically been absent from DeFi security.

## Tiered Coverage Based on TVL

The program scales its benefits based on how much value a protocol holds.

Protocols with more than $10 million in total value locked qualify for foundation-funded, round-the-clock operational security support and real-time threat monitoring. The monitoring intensity increases with TVL, so the highest-value targets get the most active coverage.

For protocols managing more than $100 million, the foundation funds formal verification, a technique that uses mathematical proofs to check every possible execution path in a smart contract. Standard audits catch known vulnerability patterns, but formal verification can eliminate entire classes of bugs that auditors might miss. It is expensive and time-consuming, which is why most protocols skip it. STRIDE removes that cost barrier for the largest Solana-based projects.

## SIRN: Coordinated Incident Response

Alongside STRIDE, the foundation also announced the Solana Incident Response Network, known as SIRN. Where STRIDE is about prevention, SIRN is about response.

SIRN is a coalition of leading security firms, including Asymmetric Research, OtterSec, Neodyme, Squads, and Zeroshadow, operating as a standing rapid-response unit. When a threat emerges anywhere in the Solana ecosystem, SIRN members coordinate in real time to contain the damage. The Drift exploit, which caused hundreds of millions in losses, illustrated what happens in the absence of such a coordinated response capability.

## Why This Matters for DeFi

The traditional DeFi security model places the burden entirely on individual protocols. A project raises funds, hires an auditor before launch, and largely hopes for the best afterward. Audits are point-in-time snapshots. Code changes, governance structures evolve, and attackers probe continuously. The gap between what audits cover and what actually happens in production is where most major exploits live.

STRIDE attempts to close that gap with an ecosystem-level, ongoing approach. The Solana Foundation is essentially subsidizing infrastructure security in the same way that cloud providers bundle security tooling into their platforms.

Whether the model works in practice will depend on how many protocols enroll, how transparent the published findings actually are, and whether SIRN can respond fast enough when the next attack comes. Given that DeFi exploits have already exceeded $1 billion in 2026, the pressure to get this right has never been higher.
