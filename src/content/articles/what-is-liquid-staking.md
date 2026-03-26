---
title: "What Is Liquid Staking?"
description: "Liquid staking lets you earn Ethereum staking rewards without locking up your capital. Here's how it works, who the major players are, and what you're actually risking."
category: "Chain 101"
publishedDate: "2026-03-26"
status: "live"
author: "Chain Brief"
---

Staking Ethereum earns you yield. But the standard way to do it ties up your ETH and requires 32 ETH upfront. Liquid staking solves both problems. It's now the largest category in DeFi, with protocols like Lido holding tens of billions in deposits. Understanding it is foundational to understanding the Ethereum ecosystem.

## The Problem With Regular Staking

When Ethereum moved to proof-of-stake in 2022, it gave ETH holders a way to earn yield by helping validate the network. Validators stake ETH as collateral, process transactions, and earn rewards for doing so honestly.

There are two big friction points.

First, the minimum. Running a validator node requires exactly 32 ETH, which at any recent ETH price is a significant sum. Most people don't have it.

Second, the lock-up. Staked ETH can't be used for anything else while it's staked. Even after Ethereum's Shapella upgrade in April 2023 enabled withdrawals, there's a queue, and your capital isn't instantly liquid. You can't use staked ETH as collateral, trade it, or deploy it in DeFi.

Liquid staking protocols fix both problems.

## How It Works

A liquid staking protocol pools ETH from many depositors, runs validators on their behalf, and gives each depositor a token that represents their share of the pool.

That token is what makes it "liquid." You deposit ETH, you receive a liquid staking token (LST). You can use that LST anywhere - lend it, borrow against it, provide liquidity with it, or just sell it. Meanwhile, the underlying ETH is staked and earning rewards.

The LST accrues value over time to reflect staking rewards. Lido's stETH, for example, uses a rebasing model where your stETH balance increases daily. Rocket Pool's rETH uses an exchange-rate model where 1 rETH becomes worth more ETH over time. Both approaches deliver the same thing: staking yield without locking capital.

When you want your ETH back, you burn your LST and redeem the underlying, plus accumulated rewards.

## The Major Players

**Lido** is the dominant protocol. It holds more staked ETH than any other single entity, at one point exceeding 30% of all staked ETH on the network. Its stETH token is deeply integrated across DeFi, accepted as collateral on Aave and used in dozens of yield strategies.

**Rocket Pool** is the decentralized alternative. It allows anyone with 8 ETH (plus a matching bond in Rocket Pool's RPL token) to run a minipool. This makes it more permissionless than Lido, whose validators are a curated set of professional node operators. Rocket Pool commands a smaller but loyal share of the market among users who prioritize decentralization.

**Coinbase's cbETH**, **Binance's wBETH**, and **Frax Finance's sfrxETH** are other significant LSTs, each with their own tradeoffs and integrations.

## Why It Matters for DeFi

Liquid staking tokens don't just sit idle. They circulate through the entire DeFi ecosystem, and that integration is a big deal.

Lido's stETH became one of the most used collateral assets in lending protocols. Curve built a dedicated stETH-ETH pool that at its peak held several billion dollars. When that pool depegged briefly during the Terra collapse in 2022, it sent shockwaves through DeFi because so many protocols held stETH.

That event showed how interconnected things had become. An LST isn't just a staking receipt. It's a financial instrument that gets woven into complex yield strategies, and its stability matters for the broader system.

## The Risks

Liquid staking is not free lunch. There are several real risks.

**Smart contract risk.** Your ETH is controlled by code. If a liquid staking protocol gets exploited, deposits can be lost. This has happened to smaller protocols. Lido and Rocket Pool have years of audit history, but no smart contract is guaranteed safe.

**Slashing.** If a validator misbehaves or goes offline, the network can slash a portion of their staked ETH as a penalty. Most protocols socialize this risk across the pool, so a single slashing event doesn't wipe out individual depositors, but it does reduce the pool's value. A large coordinated slashing event would be significant.

**Depegging.** LSTs are meant to trade at or near the value of the underlying ETH they represent. But they are separate tokens, and in stress conditions they can trade at a discount. If you need to sell your stETH fast during a market panic, you might not get face value for it.

**Centralization risk.** Lido's scale creates a structural concern. If a single protocol controls enough validators to approach or exceed 33% of the network, it gains influence over the consensus process. Lido has remained below the theoretical danger threshold, but the concern is legitimate and has been a recurring debate in the Ethereum community.

## The Restaking Connection

Liquid staking set the stage for restaking, which takes the concept further. Protocols like EigenLayer let you restake your LSTs to secure additional networks beyond Ethereum, earning extra yield in exchange for additional risk.

The compounding of yield and risk that restaking enables only works because liquid staking already made ETH "productive capital." If you want to understand EigenLayer, you need to understand liquid staking first.

## The Bottom Line

Liquid staking is one of the most impactful financial innovations in crypto. It transformed staked ETH from locked capital into a productive, composable asset that can do work across DeFi while still earning base staking rewards.

The major protocols are battle-tested and deeply integrated into the ecosystem. The risks are real but well-understood. For anyone holding ETH and not using it, liquid staking is worth understanding in detail.

The one thing to watch is concentration. The more of Ethereum's validator set that flows through a single protocol, the more that protocol's health matters to Ethereum itself. That's a systemic risk the ecosystem is still working through.
