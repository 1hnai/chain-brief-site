---
title: "How a $280M Drift Protocol Hack Used Solana's Own Tools Against It"
description: "A North Korean-linked attacker exploited Solana's durable nonce feature to pre-sign governance transactions weeks in advance, draining $280 million from Drift Protocol in under 12 minutes."
publishedDate: "2026-04-05"
status: "live"
author: "Chain Brief"
category: "Analysis"
---

On April 1, Drift Protocol — one of Solana's largest decentralized exchange and perpetuals platforms — was drained of roughly $280 million in under 12 minutes. The attack did not rely on a zero-day vulnerability or a novel smart contract bug. It turned a convenience feature built into Solana itself into a weapon.

## What Are Durable Nonces?

Solana transactions normally expire within a short window, tied to a recent blockhash. Durable nonces replace that expiring blockhash with a fixed, stored code that never times out. The feature exists to serve legitimate use cases: hardware wallets that need time to physically approve transactions, multisig setups that require multiple offline signers, and exchanges that need to pre-prepare transactions for batch submission.

The mechanic is simple. A nonce account holds a one-time code. A transaction references that code instead of a blockhash. As long as nobody advances the nonce, the transaction stays valid indefinitely. Submit it today, in three weeks, or in three months — it will go through.

That indefinite validity is exactly what the attacker used.

## How the Attack Unfolded

On-chain staging began on March 11, when 10 ETH was withdrawn from Tornado Cash to fund the operation. Over the following days, the attacker deployed a token called CarbonVote (CVT) and positioned it as a Drift governance token. By March 23, four durable nonce accounts had been created — two associated with legitimate Drift Security Council members and two controlled by the attacker.

The attacker had somehow obtained valid signatures from two of five Security Council members, locked into durable nonce transactions that would not expire. Whether those signatures were obtained through social engineering, compromised keys, or an inside access vector has not been confirmed publicly.

With those pre-signed transactions in hand, the attacker waited. On April 1, the execution began. The attacker submitted the pre-approved transactions, hijacked the Security Council's administrative powers, minted and dumped the CVT token to manipulate Drift's governance mechanism, and drained the protocol's vaults. The whole drain took roughly 12 minutes.

## Why This Attack Is Different

Most large DeFi exploits target code — a reentrancy vulnerability, an oracle manipulation, a miscalculated liquidation threshold. The Drift attack targeted process. The smart contracts behaved exactly as written. The governance mechanism did what it was designed to do. The nonce feature performed correctly.

The failure was operational: the Security Council members signed transactions without fully understanding that durable nonces meant those signatures would remain valid and submittable indefinitely, independent of any future context. A signature that feels routine in March becomes catastrophic authority in April.

This is a meaningful distinction. Code audits would not have caught it. The vulnerability was in the human and operational layer around the protocol, not in the contracts themselves.

## Attribution and Aftermath

TRM Labs has linked the attack with moderate confidence to North Korean hackers, consistent with the group's established playbook of sophisticated, multi-week preparation phases before executing rapid drains. The group has been responsible for several of the largest crypto thefts on record.

Drift suspended deposits and withdrawals immediately after detecting the exploit. The team published an initial post-mortem on April 2 and has indicated a recovery and compensation plan is in development. The exploit ranks as the largest DeFi hack of 2026 and the second-largest in Solana's history, behind the $326 million Wormhole bridge hack in 2022.

## What Protocols Should Take Away

Durable nonces are not going away — they solve real problems for custodians, multisig setups, and institutional users. But the Drift incident makes a strong case for governance hygiene changes across Solana-based protocols:

- Pre-signed transactions should carry clear, bounded context about what they authorize and under what conditions they are valid.
- Security Councils need explicit policy around durable nonce usage, including time locks or cancellation procedures.
- Any transaction with indefinite validity should require a separate review layer before it is submitted.

The feature worked as designed. The process around it did not.
