---
title: "What Is MEV?"
description: "Maximal Extractable Value is the profit validators earn by controlling transaction order — and it costs DeFi users millions per year."
category: "Chain 101"
publishedDate: "2026-03-22"
status: "live"
author: "Chain Brief"
image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"
---

Every time you swap tokens on Uniswap, there's a chance a bot has already read your pending transaction and placed its own trade ahead of yours to profit from the price move you're about to cause. That's MEV, and it costs DeFi users hundreds of millions of dollars per year.

## The basic mechanic

Before a transaction is confirmed on-chain, it sits in a public waiting room called the mempool. Validators pick transactions from the mempool to include in the next block. They can also reorder them, exclude them, or insert their own.

Maximal Extractable Value is the profit a validator can generate by using this power. The name comes from a 2019 paper by Phil Daian and colleagues, which originally called it "miner extractable value." It was renamed when Ethereum moved to proof-of-stake and block production shifted to validators.

## Three main forms

**Arbitrage** is the simplest. If a price difference exists between two DEXs, a bot can include trades on both in the same block to capture the spread. This is generally considered benign: it corrects price inefficiencies and keeps markets tighter.

**Front-running** is predatory. A bot spots your pending swap, submits an identical trade at a higher gas price so it lands first, then lets your trade execute after. Your swap pushes the price up; the bot sells into that move at your expense.

**Sandwich attacks** combine both. The bot buys before your transaction and sells immediately after, using your own trade to generate the spread. The attack is named for how your transaction gets sandwiched between the bot's opening and closing positions.

## How much does this cost?

The research firm Flashbots estimated cumulative MEV extraction on Ethereum reached into the billions of dollars since DeFi scaled up in 2020. Most individual users are affected by small amounts on any given trade, but the cost compounds across millions of transactions. On large swaps in thin markets, a single sandwich attack can cost several percentage points of the trade value.

## What the ecosystem is doing about it

**MEV-Boost** is Flashbots' most widely adopted solution. It separates block building from block proposing. A competitive market of specialized "block builders" constructs the most profitable block and passes it to validators. This concentrates MEV into a competitive marketplace rather than leaving it to individual validators to extract opportunistically. The tradeoff: it creates centralization pressure around a small number of large builders.

**Proposer-Builder Separation (PBS)** is the Ethereum protocol's longer-term answer. PBS codifies the MEV-Boost model at the protocol level, making the separation of building from proposing a core feature rather than an optional add-on. It remains on Ethereum's upgrade roadmap.

**Private mempools** let users submit transactions without broadcasting them publicly. Services like MEV Blocker and Flashbots Protect route transactions directly to block builders, bypassing the public mempool entirely. This eliminates front-running risk for the user but requires trusting the RPC provider to handle the transaction fairly.

**DEX-level mitigations** include slippage limits, which cap how far a price can move before a trade reverts automatically. Setting a tight slippage tolerance (0.1% to 0.5% on liquid pairs) makes sandwich attacks unprofitable on most trades because the potential profit doesn't justify the gas cost.

## What you should know as a user

MEV is a structural feature of public blockchains, not a bug that will be patched in a single upgrade. It exists because validators need discretion over block contents to function, and discretion creates extraction opportunities.

For ordinary users, the practical steps are these: on high-value swaps, use a protected RPC endpoint, set tight slippage, and prefer liquid pairs where sandwich attacks are harder to execute profitably. These steps reduce MEV exposure; they don't eliminate it.

The broader question the ecosystem is still working through is who should capture MEV: decentralized bots, institutional block builders, or the protocol itself through mechanisms that redistribute extraction back to users and stakers. That question remains unsettled, and the answer will shape how DeFi's market structure develops over the next few years.
