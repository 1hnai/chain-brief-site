---
title: "The $292 Million KelpDAO Hack Exposes a Systemic DeFi Bridge Problem"
description: "The largest DeFi exploit of 2026 drained $292 million from KelpDAO through a misconfigured LayerZero bridge, stranding funds across 20 blockchains."
category: "Analysis"
publishedDate: "2026-04-23"
status: "live"
author: "Chain Brief"
---

In the early hours of April 19, 2026, an attacker drained roughly $292 million from KelpDAO, making it the largest DeFi exploit of the year. The attack targeted a cross-chain bridge that relied on LayerZero infrastructure, and it exposed a flaw that affects a significant portion of protocols built on that network.

The damage extended well beyond KelpDAO itself. Total value locked across DeFi dropped by $14 billion in the days following the exploit. Aave, the largest decentralized lending protocol, saw around $10 billion in deposits withdrawn as users rushed to pull funds from exposure to the affected rsETH token. April 2026 is now on track to become the worst month for crypto hacks since the Bybit breach in early 2025.

## What Happened

KelpDAO issues rsETH, a token representing restaked Ether deployed across more than 20 networks including Base, Arbitrum, Linea, Blast, and Scroll. The cross-chain movement of rsETH relies on LayerZero's OFT (Omnichain Fungible Token) standard, with a Decentralized Verifier Network, or DVN, confirming that transactions between chains are legitimate.

The attacker, preliminarily linked to North Korea's Lazarus Group by LayerZero, compromised two RPC nodes that the verifier relied on. They replaced the software running on those nodes with malicious versions and used a distributed denial-of-service attack to force a failover. The result: LayerZero's verifier was tricked into approving a fraudulent transaction that minted 116,500 rsETH to an attacker-controlled address, around 18 percent of the token's entire supply.

## The Configuration Dispute

What followed the hack was a very public dispute over who bears responsibility. LayerZero pointed to KelpDAO's use of a 1-of-1 DVN setup, meaning a single validator was responsible for confirming cross-chain messages. LayerZero argued this was a dangerously minimal configuration that any protocol deploying a bridge should have upgraded.

KelpDAO pushed back. The team argued the 1-of-1 setup was not a reckless choice but a default configuration reflected in LayerZero's own quickstart documentation and GitHub examples. They claimed the validator infrastructure that was compromised belongs to LayerZero, not a third-party provider.

Both claims appear to have merit, which is exactly what makes this situation complicated. According to reporting from CoinDesk, approximately 40 percent of protocols currently live on LayerZero are using the same default 1-of-1 configuration. That is not a niche edge case. It is a widespread practice that LayerZero's own documentation encouraged.

## Why Bridges Keep Failing

Cross-chain bridges have been a target for attackers for years. The Ronin bridge hack in 2022 cost $625 million. The Wormhole exploit cost $320 million. The Nomad bridge was drained of $190 million. In almost every case, the attack surface came down to some combination of key management failures, flawed validator assumptions, or unsafe default configurations.

The KelpDAO hack fits the same pattern. Bridges require trust assumptions at every step: that validators are honest, that RPC nodes serve accurate data, that the configuration matches the threat model. When any one of those assumptions breaks, the entire system can unravel.

The modular security model that projects like LayerZero promote gives protocols flexibility to customize their security setup. But flexibility without enforced minimums creates gaps. If a default configuration is insecure, most teams will ship with that default, whether by accident or because they assumed the protocol provider had made sensible choices.

## What Changes Now

LayerZero has reportedly updated its documentation and is reaching out to protocols using the 1-of-1 DVN configuration to encourage upgrades. Several DeFi teams have already announced they are migrating to multi-validator setups or auditing their bridge configurations.

For users, the key takeaway is that cross-chain assets carry infrastructure risk that is often invisible until something goes wrong. rsETH was a token with clear utility in the restaking ecosystem, but its security ultimately depended on configuration decisions that most depositors never saw or understood.

DeFi recorded 47 security incidents in the first four and a half months of 2026, compared to 28 over the same period in 2025. That is not a marginal increase. Something systemic is getting worse, and bridges remain the most dangerous surface. Until there are enforced standards around validator redundancy and default configurations, the next exploit is not a matter of if but when.
