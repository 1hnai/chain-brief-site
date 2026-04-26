---
title: "The KelpDAO Hack Reveals a $292M Lesson About Cross-Chain Bridges"
description: "A sophisticated attack on KelpDAO's LayerZero bridge drained $292 million in April 2026, exposing deep structural risks in cross-chain DeFi infrastructure."
category: "Analysis"
publishedDate: "2026-04-26"
status: "live"
author: "Chain Brief"
---

On April 18, 2026, an attacker drained 116,500 rsETH from KelpDAO's LayerZero-powered bridge, making off with roughly $292 million. It was the largest DeFi exploit of the year, surpassing the Drift hack from earlier in April by a few million dollars. By the time the emergency pause was triggered 46 minutes later, the damage was done.

What makes this hack different from most is that no smart contract was broken. Not a single line of Solidity was exploited. Instead, attackers targeted off-chain infrastructure, and the whole system fell apart.

## What Actually Happened

KelpDAO operates a cross-chain bridge that lets users hold rsETH, a liquid restaking token, across more than 20 blockchain networks. To verify cross-chain messages, the bridge relied on LayerZero's Decentralized Verifier Network, or DVN.

The attackers, later linked to North Korea's Lazarus Group, compromised two RPC nodes that LayerZero's verifier depended on. They replaced the node software with malicious versions that could selectively forge responses. The trick was precise: the rogue nodes returned fraudulent data only to the DVN, while continuing to provide accurate responses to LayerZero's own monitoring tools. The monitors saw nothing wrong.

With the verifier deceived, the Ethereum contract was tricked into releasing rsETH based on a phantom burn that never actually happened on the source chain. The attacker walked away with nearly one-fifth of rsETH's total circulating supply.

## A Single Point of Failure

LayerZero's own documentation is clear on this point. It recommends configuring at least two independent DVNs to avoid exactly this kind of failure. KelpDAO used the default setting: one DVN, operated by LayerZero Labs.

A single verifier means a single target. Compromise that one node, and the entire security model collapses. There is no redundancy to catch forged messages, no independent confirmation that a cross-chain event actually occurred.

This is not an exotic edge case. It is a configuration choice that many bridge operators make, either for simplicity, to reduce costs, or because they assumed the default was safe enough. It was not.

## The Ripple Effects

Because rsETH backed liquidity on more than 20 networks, the hack immediately raised questions about whether rsETH held on Layer 2s was still fully collateralized. Protocols that had accepted rsETH as collateral moved fast. Aave, SparkLend, and Fluid all froze rsETH-related markets within hours. Total DeFi TVL dropped from around $98 billion to roughly $85 billion in two days, its lowest point in over a year and about 50 percent below the October 2025 peak.

Arbitrum's Security Council stepped in to freeze over 30,000 ETH connected to the exploit, a notable moment that showed elected on-chain governance bodies can act decisively in emergencies, though it also raised questions about the decentralization assumptions users hold when bridging assets.

## What This Means for DeFi Going Forward

April 2026 has been brutal for DeFi security. Before the KelpDAO attack, the Drift protocol lost $285 million in early April. By mid-month, total losses across DeFi had already crossed $600 million. The KelpDAO exploit pushed that figure much higher.

The pattern is shifting. Early DeFi hacks targeted buggy smart contracts. The exploits hitting protocols now increasingly target the infrastructure around contracts: oracle feeds, off-chain verifiers, RPC nodes, bridge configurations. These are harder to audit, less visible to users, and often treated as someone else's responsibility.

Cross-chain bridging is one of the most technically demanding problems in crypto. Every bridge is essentially a trust assumption, either in a multisig, an oracle, a validator set, or a verifier network. Users moving assets across chains rarely see these assumptions explicitly. They see a button that says "bridge" and expect it to work safely.

The KelpDAO hack is a reminder that those assumptions need to be made explicit, documented, and tested. A single misconfigured DVN sitting between users and their funds is not a technical footnote. It is the entire security model.

For protocols operating cross-chain infrastructure, the immediate takeaway is straightforward: run multiple independent verifiers, audit your off-chain components with the same rigor as your contracts, and document your security assumptions clearly.

For users, this is a prompt to ask harder questions before bridging significant capital. Not just whether a protocol has been audited, but how its cross-chain security is configured, and who controls the emergency pause.
