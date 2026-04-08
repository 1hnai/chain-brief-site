---
title: "Drift Loses $280 Million in Novel Solana Attack Tied to North Korea"
description: "Hackers drained $280 million from Solana DeFi protocol Drift by exploiting a rarely-abused Solana feature called durable nonces to seize administrative control."
category: "Market Brief"
publishedDate: "2026-04-08"
status: "live"
author: "Chain Brief"
---

Drift Protocol, one of Solana's largest decentralized exchanges, lost approximately $280 million in a sophisticated attack that unfolded on April 1, 2026. The exploit has since been linked to North Korean state-backed hackers by blockchain analytics firm Elliptic, and it has renewed urgent questions about governance security in DeFi.

## What Happened

The attacker used a Solana mechanism called **durable nonces** in a way that few protocols had considered in their threat models. Normally, Solana transactions must be submitted and processed quickly before their blockhash expires. Durable nonces bypass this constraint, allowing a signed transaction to remain valid indefinitely until it is submitted.

In the Drift attack, the malicious actor obtained pre-approved transactions from members of Drift's Security Council, the multisig body responsible for protocol governance. Because those transactions were signed with durable nonces, they did not need to be submitted immediately. Weeks later, the attacker submitted them all at once, effectively seizing administrative control of the protocol and draining funds before anyone could respond.

Drift had over $400 million in total deposits at the time of the attack. The platform suspended deposits and withdrawals immediately after the breach.

## North Korea Connection

Elliptic's on-chain analysis flagged behavioral patterns consistent with the Lazarus Group, the North Korean hacking collective that has been linked to billions in crypto theft over the past several years. In 2025 alone, North Korea was attributed with roughly $2 billion in stolen digital assets, accounting for about 60 percent of all crypto theft worldwide that year.

The Drift attack follows the February 2025 Bybit hack, in which North Korean actors stole $1.5 billion from the centralized exchange. That attack was the largest single theft in crypto history at the time. The Drift incident now ranks among the largest DeFi exploits ever recorded.

## Why Durable Nonces Are Dangerous

Durable nonces are a legitimate and useful Solana feature. They allow developers to prepare transactions in advance, which is helpful for things like scheduled payments or cold-storage signing workflows where a device cannot be kept online. Most protocol risk frameworks, however, have not modeled the scenario where a governance signer unknowingly approves a transaction that will execute at an unknown future date.

The attack required social engineering or a compromise of at least some Security Council members to get valid signatures. Once those signatures were in hand, the timing of the exploit was entirely in the attacker's control.

This kind of latent authorization attack is difficult to detect. Standard monitoring systems look for unusual on-chain activity at the time of execution, but the signatures themselves may have been collected weeks earlier under normal-looking circumstances.

## Implications for DeFi Governance

The Drift hack exposes a structural weakness that extends beyond Solana. Any protocol that uses multisig governance and allows pre-signed transactions faces a version of this risk. The specific durable nonce mechanism is Solana-native, but the broader pattern of collecting signatures over time and submitting them later exists in various forms across chains.

Several immediate responses are being discussed across the DeFi community:

- Requiring time-bounded transaction expiries enforced at the governance layer, not just at the network level
- Implementing on-chain transaction simulation before execution so signers can verify exact outcomes
- Adding timelocks with cancellation windows so the community can react before approved transactions finalize
- Rotating Security Council keys on a regular schedule to reduce the window of exposure from any compromised key

For users, the immediate lesson is that total value locked figures alone do not capture protocol risk. Governance architecture matters as much as smart contract code.

## Where Drift Stands Now

As of this writing, Drift has suspended normal operations while the team works with law enforcement and blockchain analytics firms to trace the stolen funds. Recovery of assets in North Korean-linked attacks has historically been extremely limited, given the sophistication of the laundering operations involved.

The broader Solana DeFi ecosystem saw a brief spike in outflows following the news, though most protocols stabilized within 48 hours. Drift's incident will likely accelerate governance security audits across major Solana protocols and prompt a closer look at how durable nonces interact with multisig frameworks industry-wide.
