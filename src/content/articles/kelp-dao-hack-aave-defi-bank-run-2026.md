---
title: "How a $292M Hack Triggered a $9B Bank Run on Aave"
description: "The Kelp DAO exploit drained $292 million through a cross-chain bridge and set off a cascading crisis that pulled $9 billion from DeFi's largest lending platform."
category: "Analysis"
publishedDate: "2026-04-27"
status: "live"
author: "Chain Brief"
---

On April 18, an attacker drained roughly 116,500 rsETH from Kelp DAO's LayerZero bridge. The stolen restaking tokens were valued at about $292 million. Within 48 hours, that single exploit had set off a chain reaction that wiped more than $13 billion from DeFi lending protocols and left Aave, the sector's largest platform, with roughly $200 million in bad debt.

This was not just a hack. It was a textbook DeFi bank run.

## What Happened

Kelp DAO is a restaking protocol that allows users to earn yield on liquid staking tokens. The attacker found a vulnerability in the protocol's LayerZero cross-chain bridge and drained rsETH -- a receipt token representing staked ETH.

After pocketing the stolen tokens, the attacker deposited around $200 million worth of rsETH directly into Aave V3 as collateral, then borrowed approximately $236 million in Wrapped ETH (WETH) against it. The goal was to exit with real assets while leaving worthless collateral behind.

When the hack became public knowledge, Aave depositors panicked. If $200 million in collateral on the platform was essentially worthless, how safe were their funds? The answer, in their minds, was: not safe enough to wait and find out. Withdrawals flooded in. Aave recorded $9 billion in net outflows in the days following the exploit. Total value locked on the platform fell by more than a third, dropping to around $17.5 billion.

## Why This Spread So Fast

DeFi's composability -- the ability for protocols to interact with one another -- is one of its greatest strengths and one of its most dangerous properties. Kelp DAO connects to Aave. Aave connects to dozens of other protocols. When one link in the chain breaks, stress radiates outward.

In this case, the attacker used the bridge as an entry point, the lending market as an exit route, and the resulting confusion as a force multiplier. Aave's smart contracts responded exactly as they were designed to -- but the system's design did not anticipate that the collateral being posted might become nearly worthless overnight.

Cybersecurity researchers at Cyvers flagged the exploit as potentially linked to North Korea based on the sophistication of the attack and the scale of the operation. North Korean state-sponsored groups, particularly Lazarus, have been connected to some of the largest crypto thefts in recent years.

## The Fallout

Aave's governance token dropped sharply in the days following the news. Across all DeFi lending protocols, total value locked fell by roughly $13 billion inside 48 hours.

The incident has renewed a debate that DeFi has circled for years: is trustless composability fundamentally too fragile for large-scale financial infrastructure?

Jefferies analysts warned that the Kelp DAO exploit could force major banks currently piloting blockchain settlement systems to rethink their exposure to DeFi rails. The concern is not that DeFi cannot innovate. It is that the blast radius when something goes wrong is now large enough to touch institutional participants.

## What Comes Next

Aave's community is discussing how to cover the bad debt. Options include using the protocol's Safety Module -- a pool of staked AAVE tokens set aside for exactly this kind of emergency -- or minting new tokens to plug the gap, which would dilute existing holders.

More broadly, the exploit has put renewed pressure on bridge security. Cross-chain bridges remain among the most exploited surfaces in crypto. The Kelp DAO hack is a reminder that every bridge connecting two ecosystems is also a potential attack vector connecting two sets of users to the same risk.

DeFi has survived hacks before. Protocols have recovered. Confidence has returned. But each incident raises the threshold of trust that the next generation of users -- and institutions -- will demand before committing capital to on-chain lending markets.

The $292 million exploit did not kill DeFi. It did, however, make clear that the sector's risk models need to catch up to the complexity it has built.
