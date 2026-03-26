---
title: "What Is a Prediction Market?"
description: "Prediction markets let people bet on real-world outcomes using crypto. They've become one of the most-watched applications in onchain finance."
category: "Chain 101"
publishedDate: "2026-03-26"
status: "live"
author: "Chain Brief"
---

Prediction markets let you put money on whether something will happen. Will a specific candidate win an election? Will a central bank raise rates? Will a protocol get hacked? If you're right, you profit. If you're wrong, you lose your stake. The price of a bet reflects the crowd's collective probability estimate for that outcome.

Onchain prediction markets run without a central operator. Smart contracts hold the funds, determine outcomes through decentralized oracles, and pay winners automatically. No bookmaker sets the odds, and no exchange can freeze your account mid-event.

## How They Work

Most prediction markets use a binary format: a question with two possible outcomes. Each outcome is represented by a token. If you buy the YES token and the event happens, the token resolves to $1. If it doesn't happen, it resolves to $0. The NO token works in reverse.

Before resolution, both tokens trade freely. If traders think an event has a 70% chance of happening, the YES token trades near $0.70. You can buy in at any time, sell before resolution, or hold until the market settles.

The system runs on conditional tokens, a standard built on top of ERC-1155. The protocol mints a paired set of outcome tokens for every dollar deposited. After resolution, winners redeem their tokens for the collateral and losers receive nothing.

## Polymarket

Polymarket is the largest decentralized prediction market by volume. It runs on Polygon and uses USDC as its base currency. Users connect a wallet, deposit USDC, and trade outcome tokens directly in their browser.

The protocol uses UMA (Universal Market Access) as its dispute resolution layer. After an event concludes, UMA token holders can be called in to arbitrate contested outcomes, though most markets resolve automatically using widely available public data.

Polymarket gained significant attention during the 2024 US presidential election, when its markets drew widespread media coverage and became a reference point for political probability estimates. The site became one of the most-cited prediction tools among journalists and analysts tracking the race.

Polymarket is not available to US residents due to regulatory restrictions. The company settled with the Commodity Futures Trading Commission in 2022 over operating an unregistered facility.

## Augur and the Early Attempts

The concept of decentralized prediction markets predates Polymarket by several years. Augur launched on Ethereum in 2018 as one of the first serious attempts at a fully permissionless prediction market.

Augur used its own REP token for dispute resolution and allowed anyone to create a market on any topic. The design was technically sophisticated but suffered from poor usability, high gas costs on Ethereum mainnet, and slow resolution times. Volume remained thin.

Several iterations followed. Omen, built on Gnosis Chain, simplified the interface. Augur v2 launched in 2020 with improvements to the resolution process. None captured mass market adoption at the time.

Polymarket's success came partly from better UX and partly from timing: it launched at the same moment that USDC liquidity and Polygon's low-fee environment made small-dollar trading practical.

## Why Prediction Markets Matter

The core argument for prediction markets is informational efficiency. When people bet real money, they have a financial incentive to research carefully and update their beliefs when new information arrives. Markets aggregate these informed views into a single price.

This is the efficient market hypothesis applied to event outcomes rather than stocks. The theory predicts that prediction market prices should outperform polls, pundits, and traditional forecasts, because markets incorporate the full information set of all participants and punish overconfidence directly.

Academic research has generally supported this view for well-defined events with clear resolution criteria. Markets tend to do well on questions like election outcomes and policy decisions where the resolution date and criteria are unambiguous.

They do less well on subjective or open-ended questions, and they struggle when liquidity is thin, which allows individual large bets to move prices without new information.

## The Oracle Problem

For a prediction market to pay out correctly, it needs a reliable way to determine what actually happened. This is harder than it sounds.

Simple questions can resolve from public data feeds. Prediction markets about ETH price use Chainlink or similar oracles that pull prices from multiple exchanges. Questions about sports outcomes use established data providers.

Political and geopolitical questions are harder. Was a ceasefire agreement "reached"? Did a law "pass"? The phrasing of the question matters enormously, and edge cases can turn a straightforward market into a dispute.

UMA's optimistic oracle handles this by assuming the first proposed outcome is correct unless challenged. Anyone can dispute the result by posting a bond. If a dispute is filed, UMA token holders vote on the correct answer. The system works reasonably well for clear outcomes but can fail on ambiguous ones.

## Regulatory Uncertainty

Onchain prediction markets exist in a gray area in most jurisdictions. The CFTC treats certain event contracts as derivatives subject to its oversight. Betting on election outcomes has historically been classified as illegal gambling in the United States.

The SEC has also paid attention to political event contracts. In 2024, a federal court ruled that the CFTC could not ban Kalshi, a regulated prediction market, from listing contracts on congressional election outcomes. The ruling opened a path for regulated US-facing prediction markets.

The distinction between gambling and financial derivatives is an active legal debate. Regulated platforms like Kalshi argue that event contracts are a legitimate financial instrument. Critics argue that political markets can create incentives to manipulate outcomes.

Onchain protocols like Polymarket operate outside US jurisdiction by design, which limits their US user base but allows them to operate without registration.

## What Comes Next

Prediction markets have grown from a niche experiment into a reference tool used by journalists, analysts, and traders. Liquidity has improved, and the range of questions on offer has expanded well beyond elections to cover monetary policy, sports, crypto prices, and geopolitical events.

The next phase of growth likely depends on two things: better oracle infrastructure for complex outcomes, and clearer regulation that either blocks onchain markets entirely or gives them a legal path to operate in major jurisdictions.

For now, they remain one of the more watched corners of the onchain economy, combining financial incentives, information aggregation, and real-world events in a way that few other crypto applications do.
