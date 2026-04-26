---
title: "DeFi United: How Aave and Partners Are Rebuilding After the $292M KelpDAO Disaster"
description: "A coordinated industry response called DeFi United aims to cover Aave's $196 million bad debt and restore confidence after the largest DeFi exploit of 2026."
category: "Analysis"
publishedDate: "2026-04-26"
status: "live"
author: "Chain Brief"
---

The wreckage from the KelpDAO exploit is still smoldering, but the DeFi ecosystem is already mounting an organized recovery effort. A week after a $292 million attack drained rsETH from KelpDAO's LayerZero bridge, Aave, Lido Finance, EtherFi, and Aave founder Stani Kulechov are pooling resources to plug a gap that threatens the entire lending protocol.

## What Happened

On April 18, an attacker linked by LayerZero to North Korea's Lazarus Group exploited a misconfiguration in KelpDAO's cross-chain bridge. KelpDAO had set up a 1-of-1 validator configuration on its LayerZero integration, meaning a single compromised verifier was all the attacker needed to authorize fraudulent transactions.

The attacker minted 116,500 rsETH tokens unbacked by any actual ETH, deposited them into Aave V3 as collateral, and borrowed heavily against them. When the fraud became clear, Aave was left holding the bag: roughly $196 million in bad debt from loans that can never be repaid.

The downstream panic was swift. Aave's TVL collapsed from $26.4 billion on April 18 to around $20 billion within 48 hours. Across all DeFi, total value locked dropped by $13 billion. Bitcoin briefly dipped below $76,000 before bouncing.

## The Recovery Plan

The initiative, dubbed "DeFi United," was proposed publicly on Aave governance forums and represents something relatively rare in crypto: coordinated cross-protocol bailout action.

Lido Finance, EtherFi, and individual whales are being asked to contribute ETH to restore backing for the compromised rsETH. Aave has already raised around $160 million of the roughly $200 million it needs to fully cover its bad debt position. Discussions are ongoing about whether remaining shortfalls will be covered by Aave's Safety Module, which holds AAVE tokens earmarked for exactly these kinds of emergencies.

## Capital Rotation, Not Exodus

One notable detail: much of the TVL drop at Aave was leveraged positions unwinding, not depositors permanently leaving DeFi. Spark Protocol, a lending platform spun out from MakerDAO, saw its TVL jump from $1.8 billion to $2.9 billion in the same window that Aave was hemorrhaging deposits. Users were moving to perceived safer ground, not cashing out entirely.

That distinction matters. If the $13 billion drop were pure capital flight from the sector, the prognosis would be grim. The fact that much of it was rotation to other DeFi venues suggests the infrastructure remains trusted even if specific protocols face scrutiny.

## The Cross-Chain Risk Problem

The KelpDAO hack is the latest in a string of bridge-related exploits that have now cost the industry well over $3 billion in aggregate over several years. Cross-chain messaging is structurally hard to secure because it requires trusting external validators to faithfully report the state of one blockchain to another.

LayerZero argued after the incident that KelpDAO ignored repeated warnings to use a more robust multi-verifier setup. KelpDAO countered that LayerZero's default configuration enabled the dangerous single-verifier option in the first place. Regulators and security researchers watching the blame game are unlikely to accept either defense as sufficient.

What is clear is that liquid restaking tokens like rsETH have become deeply embedded as collateral across DeFi. A single exploit in any one of those assets can propagate through lending markets almost instantly.

## What Comes Next

The immediate question is whether Aave closes its bad debt gap before community patience runs out. If the Safety Module is tapped, it will mean diluting AAVE holders, which carries its own political and market risks.

Longer term, the incident is likely to accelerate calls for standardized bridge security requirements and mandatory audits for any token accepted as collateral on major lending platforms. Several governance proposals along those lines have already been floated on Aave and Compound forums this week.

For DeFi to move beyond its reputation as a hacking target, the ecosystem needs protocols to make coordination on risk standards routine, not a crisis response. DeFi United is a promising signal. Whether it becomes a template or a one-off remains to be seen.
