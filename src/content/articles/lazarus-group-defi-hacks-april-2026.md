---
title: "North Korea's Lazarus Group Stole $577M From DeFi in 18 Days"
description: "The TraderTraitor subunit of Lazarus Group hit Drift Protocol and KelpDAO in rapid succession, draining over half a billion dollars and exposing systemic DeFi security gaps."
category: "Analysis"
publishedDate: "2026-04-22"
status: "live"
author: "Chain Brief"
---

In the span of 18 days, North Korea's Lazarus Group pulled off two of the largest DeFi exploits ever recorded, stealing a combined $577 million and triggering a $14 billion collapse in total value locked across decentralized finance.

The attacks were not random. They were methodical, well-funded, and executed by a state-backed unit with a years-long track record of draining crypto infrastructure.

## Two Hacks, One Unit

On April 1, Drift Protocol, a perpetuals exchange on Solana, lost approximately $285 million in what investigators described as the result of a six-month preparation. The attackers did not smash through a firewall. They built relationships. They attended industry conferences, deployed a fake employee who had been embedded in adjacent projects for months, and deposited $1 million of their own funds into the protocol to earn trust and access. When they moved, they moved fast.

Then, on April 18, KelpDAO lost $292 million through its cross-chain bridge, the largest single DeFi exploit of 2026. The playbook this time was different: technical rather than social. Attackers compromised two RPC nodes feeding data to LayerZero's verifier, injected false transaction confirmations, and used a DDoS attack to knock out legitimate endpoints so the poisoned nodes became the sole source of truth. The verifier approved a fraudulent transfer of 116,500 rsETH, roughly 18% of the token's total circulating supply.

Both attacks have been attributed to TraderTraitor, a subunit of Lazarus Group that the U.S. Treasury and FBI first publicly named in 2022. The group specializes in crypto targets, blending social engineering with deep technical exploitation.

## Why DeFi Keeps Getting Hit

Lazarus Group has stolen an estimated $6.75 billion in crypto since 2017, according to Chainalysis. The pace has been accelerating. Their 2025 haul topped $2 billion. At the current 2026 rate, they are on track to exceed that.

DeFi is the primary target for several reasons. Code is open-source and auditable, which means attackers can study it quietly for months before striking. Cross-chain bridges, which must coordinate trust across two or more separate blockchains, are structurally complex and routinely underconfigured. The KelpDAO bridge, for instance, relied on a single verifier to approve transfers, a configuration LayerZero had warned against multiple times. A 1-of-1 setup means one compromised node is enough.

After the KelpDAO exploit, LayerZero announced it would stop signing messages for any application using a single-verifier configuration, effective immediately. All projects on its infrastructure must migrate to multi-verifier architectures. The change closes the most obvious gap, but the industry has heard similar announcements before.

## The Contagion

The KelpDAO attack did not stop at the bridge. The attackers used the stolen rsETH as collateral on Aave, the largest DeFi lending protocol, to borrow over $196 million in ETH before positions were liquidated. The cascading effect triggered $6 billion in TVL outflows from Aave alone as depositors rushed to exit. Across all of DeFi, TVL fell by $14 billion in two days, dropping to roughly $85 billion, its lowest level in a year.

The funds from both hacks are being laundered at speed. Blockchain data published on April 21 shows the KelpDAO hackers had already moved millions through mixing services and cross-chain swaps within days of the exploit.

## A Structural Problem

The question the DeFi sector is confronting is not just whether Lazarus can be stopped, but whether the ecosystem is designed for the adversary it faces. State-backed hacking units with patient, well-resourced operations are a different threat class than opportunistic exploiters.

Multi-verifier bridge configurations help. Mandatory audits help. But the Drift attack showed that technical hardening alone is not sufficient when attackers are willing to run six-month social engineering campaigns and front $1 million of their own money to gain access.

Lazarus Group has been at this since at least 2017. The DeFi industry is still learning what that means for how it builds and protects infrastructure.

The $577 million stolen this month is the sharpest reminder yet.
