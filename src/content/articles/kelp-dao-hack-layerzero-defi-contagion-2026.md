---
title: "The $293 Million KelpDAO Hack: Cross-Chain Bridges Just Failed Their Biggest Test Yet"
description: "A single misconfigured verifier brought down $293 million in rsETH and triggered a $13 billion DeFi TVL collapse in just 48 hours."
category: "Analysis"
publishedDate: "2026-04-20"
status: "live"
author: "Chain Brief"
---

On April 19, an attacker drained 116,500 rsETH from Kelp DAO in 46 minutes. The theft totalled roughly $293 million, making it the largest DeFi exploit of 2026. Within 48 hours, total value locked across DeFi had fallen by more than $13 billion as panic spread to every protocol holding rsETH as collateral.

This was not a novel cryptographic attack. It was a configuration error that anyone running a production bridge should have caught. The lesson is uncomfortable: the most dangerous vulnerabilities in 2026 DeFi are not in the math. They are in the settings menus.

## How the Exploit Worked

Kelp DAO uses LayerZero's Omnichain Fungible Token standard to move rsETH across more than 20 networks, including Base, Arbitrum, Linea, Blast, Mantle and Scroll. LayerZero's cross-chain messaging system relies on verifiers to confirm that messages arriving from one chain are legitimate before releasing assets on another.

The problem was that Kelp had configured a 1-of-1 verifier setup. A single verifier, operated by LayerZero Labs, was the sole entity checking every cross-chain message. The attacker compromised two of Kelp's RPC nodes, then launched a DDoS attack to force a failover. During the failover window, they injected a fraudulent message that the single verifier accepted as valid. The bridge released 116,500 rsETH to an attacker-controlled address. LayerZero has since attributed the attack to TraderTraitor, a subgroup of North Korea's Lazarus Group.

LayerZero publicly stated it had recommended a multi-verifier configuration to Kelp in both its integration checklist and direct communications. Kelp pushed back, claiming LayerZero's default settings were the actual cause. That dispute is ongoing and ultimately misses the point. rsETH holders on 20 networks lost real money.

## The Contagion Effect

Because rsETH is deployed so widely, the blast radius extended far beyond Kelp's own contracts. The rsETH held in the bridge represented the reserve backing wrapped versions of the token on every layer 2 chain. Once the reserve was drained, those wrapped tokens became unbacked.

Aave froze rsETH markets on both V3 and V4 within hours. SparkLend and Fluid followed. Aave founder Stani Kulechov confirmed that Aave's own contracts were not compromised, but that did little to stop the broader withdrawal. Aave saw $8.45 billion in deposits leave over 48 hours. The market correctly understood that any protocol with rsETH exposure was now a counterparty risk, and capital moved accordingly.

## Why This Keeps Happening

By mid-April 2026, total DeFi losses for the year had already crossed $450 million across roughly 45 protocols. The Drift exploit on April 1 claimed $285 million. CoW Swap, Zerion, Rhea Finance and Silo Finance were all hit in the weeks between. The Kelp hack is not an outlier. It is a pattern.

Cross-chain bridges are still among the most dangerous infrastructure in crypto. They are complex systems operating across multiple trust domains, and the attack surface grows every time a new chain is added to the network. A bridge that works across 20 chains has 20 times the configuration surfaces of a bridge that works across two.

The specific failure mode here, a single-verifier setup on a bridge managing hundreds of millions in assets, is the kind of thing that should be caught in a security review. LayerZero's own documentation flagged it. The fact that it was not caught suggests that the review either did not happen or did not carry enough weight to change the configuration.

## What Changes Now

Expect multi-verifier requirements to become a hard standard rather than a recommendation. Protocols that have been running 1-of-1 or 2-of-3 verifier setups are already reviewing their configurations. Insurance protocols that wrote coverage on rsETH-backed positions are processing claims.

The deeper structural problem is that restaked assets, tokens that represent claims on claims, inherit the risk of every system in their stack. rsETH is a receipt for staked ETH that has been restaked. When the bridge carrying those receipts fails, the unwinding is complicated. It is not just one protocol that needs to recover. It is every protocol that treated rsETH as a safe collateral asset.

The $13 billion TVL drop will recover. It always does. But the trust in cross-chain restaked collateral will take longer to rebuild than the capital will.
