---
title: "What Is a Stablecoin?"
description: "Stablecoins are the part of crypto that acts like normal money. Here is how they work, why they exist in three different forms, and what can go wrong with each."
category: "Chain 101"
publishedDate: "2026-03-21"
status: "draft"
author: "Chain Brief"
---

Stablecoins are cryptocurrency tokens designed to hold a fixed value, usually $1. Unlike Bitcoin or Ethereum, whose prices change constantly, a stablecoin is supposed to be worth exactly what it says: stable.

They are, by almost any measure, the most practically useful part of crypto today. Stablecoins move billions of dollars per day across blockchains, settle payments between businesses, power most of decentralized finance, and serve as a savings vehicle in countries where the local currency is in freefall.

## Why Stablecoins Exist

Crypto's volatility is a feature in some contexts and a serious problem in others. If you are a trader moving between positions, holding everything in Bitcoin means your cash position fluctuates with the market. If you are a business paying a supplier in another country, you cannot invoice them in something that might be worth 20% less by the time the payment clears.

Stablecoins solve this by providing a unit of account and store of value that sits on a blockchain but behaves like a dollar. You get the speed and programmability of crypto with the price stability of fiat currency.

## The Three Models

Not all stablecoins work the same way. There are three main approaches, each with different tradeoffs.

**Fiat-backed stablecoins** hold actual dollars (or dollar-equivalent assets like Treasury bills) in reserve for every token issued. Tether's USDT is the largest stablecoin in existence, and it operates on this model: for every USDT in circulation, Tether claims to hold $1 in reserves. Circle's USDC works similarly and publishes monthly reserve attestations from a major accounting firm.

The risk here is straightforward: you have to trust the issuer. If the reserves are not actually there, or are invested in something that loses value quickly, the peg can break.

**Crypto-backed stablecoins** use other cryptocurrencies as collateral. Because crypto is volatile, these systems require overcollateralization: to mint $100 worth of stablecoin, you might need to lock up $150 worth of Ethereum. The extra collateral absorbs price drops before they threaten the peg. Sky (formerly MakerDAO) pioneered this model with DAI, now rebranded as USDS.

The risk: if collateral prices drop faster than the system can liquidate positions, the peg fails. These systems are more decentralized but significantly more complex to understand.

**Algorithmic stablecoins** attempt to maintain a peg through supply and demand mechanics rather than collateral. When the price rises above $1, the protocol mints more tokens to push it back down. When it falls below $1, it burns tokens or uses incentives to reduce supply. No collateral is required.

This model failed spectacularly in May 2022, when TerraUSD (UST) collapsed from $1 to near zero in a matter of days, wiping out tens of billions in combined value and triggering one of crypto's worst market crises. The algorithmic model has not recovered its credibility since.

## How the Peg Holds (And How It Breaks)

For fiat-backed stablecoins, the mechanism is simple. If USDC trades at $0.98, large holders can buy it cheaply and redeem it with Circle for $1 in actual dollars, pocketing the difference. This arbitrage pressure pulls the price back up. The same works in reverse if it trades above $1.

This mechanism requires that redemptions actually work. During the March 2023 banking crisis, USDC briefly fell to around $0.87 after Circle disclosed it held $3.3 billion at Silicon Valley Bank, which had just failed. Redemptions resumed when it became clear Circle would recover the funds, and USDC returned to $1 within days.

That episode illustrated the point: a stablecoin is only as stable as the infrastructure behind it.

## Who Uses Them and Why

Stablecoins have three large use cases today.

**DeFi** runs almost entirely on stablecoins. Lending protocols, decentralized exchanges, and yield strategies all rely on a stable unit of account that can move between smart contracts instantly. Without stablecoins, DeFi collapses into a system of pure speculation with no stable numeraire.

**Cross-border payments** are a growing commercial use. Sending stablecoins between wallets settles in seconds and costs far less than traditional wire transfers, particularly for high-frequency corridors between the US and Latin America or Southeast Asia.

**Dollarization in emerging markets** is the least-discussed use case and potentially the largest. In countries with high inflation or currency controls, holding USDT gives people access to dollar-denominated savings without a US bank account. This is documented, widespread behavior in Argentina, Turkey, Nigeria, and elsewhere.

## The Regulatory Picture

The US Congress has been debating stablecoin legislation for years. The GENIUS Act, signed into law in July 2025, requires fiat-backed stablecoin issuers to hold 1:1 reserves in high-quality liquid assets and obtain a federal or state banking licence or equivalent. <!-- FACT-CHECK: fixed "would require" and "has passed committee but has not cleared the full Senate" → GENIUS Act was signed into law by President Trump on July 18, 2025 -->

The direction is clear even if the timeline is not: stablecoin issuers in the US will face bank-like regulation. That is not necessarily bad. Clearer rules would let more institutions use stablecoins for payments with less legal risk, and would force weaker issuers to either meet reserve standards or exit the market.

## The Bottom Line

Stablecoins are not exotic. They are the practical plumbing of crypto: the part that lets value move between blockchains, across borders, and in and out of DeFi without every transaction being a bet on price direction. They have real risks, including counterparty risk, reserve opacity, and regulatory uncertainty.

The best ones have survived stress tests. The worst ones have failed catastrophically. Knowing which model a stablecoin uses, and who is responsible for its reserves, matters more than tracking its price.
