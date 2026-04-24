---
title: "Tokenized Stocks Are Going Live on Solana -- and DeFi Is Ready to Use Them"
description: "xStocks brings 60-plus Nasdaq-listed equities on-chain with T+0 settlement, and Solana's DeFi stack is already treating them as collateral."
category: "Deep Dive"
publishedDate: "2026-04-24"
status: "live"
author: "Chain Brief"
---

For years, tokenized equities were a proof-of-concept looking for a home. In early 2026, they may have found one. A combination of regulatory progress, institutional partnerships, and composable DeFi infrastructure has pushed tokenized stocks from niche experiment to a product with more than 185,000 holders and over $1 billion in aggregate market cap.

The product at the center of this shift is xStocks, a suite of tokenized U.S. equities and ETFs built on Solana. Each xStock token represents a 1:1 claim on a real share, held in segregated accounts with qualified custodians in Switzerland and the United States. The issuer is Backed Assets (JE) Limited, a Jersey-registered special-purpose vehicle tied to Backed Finance AG. Settlement happens on-chain and clears in seconds, not two business days.

## What xStocks Actually Enables

The basic mechanics are straightforward. A user outside the United States (xStocks are not currently available to U.S. persons) purchases an xStock token through a supported venue. They receive a Solana-native token representing fractional ownership in, say, Apple or Nvidia shares. That token trades around the clock, not just during exchange hours, and transfers settle at the Solana network speed.

That last point matters more than it sounds. Traditional equity settlement in the U.S. runs on a T+1 cycle, meaning a trade today clears tomorrow. On Solana, settlement is measured in milliseconds. For global users who have historically been locked out of U.S. equity markets, or who have faced friction around clearing and custody, the difference is significant.

As of March 2026, xStocks listed more than 60 tokenized equities including Tesla, Circle, Nvidia, and the S&P 500 tracker. The platform grew from roughly $20 million in total value and fewer than 1,500 users in December 2024 to more than $1 billion and 185,000 holders in roughly 15 months.

## DeFi Composability Is the Unlock

What separates xStocks from earlier tokenized equity experiments is composability. Because xStock tokens are standard Solana assets, they can plug directly into the broader DeFi ecosystem. Kamino Finance, one of Solana's leading lending protocols, added collateral pools for xStock positions in early 2026, allowing users to borrow stablecoins against holdings in AAPLx or TSLAx.

This creates a genuinely new financial primitive: someone in Southeast Asia or Latin America can hold a tokenized U.S. equity position, borrow against it at any hour of the day without a broker, and deploy that capital elsewhere on-chain. The underlying share never moves from its custodian vault.

The composability works in the other direction too. Liquidity providers can supply xStocks to automated market makers, and vaults can hold them as yield-bearing collateral. The same asset that tracks Apple's stock price can also serve as DeFi collateral, something no traditional brokerage account allows.

## Nasdaq and Kraken Add Institutional Weight

In early March 2026, Nasdaq partnered with Kraken and xStocks to push tokenized equities further into institutional territory. Kraken now distributes xStocks directly to users via its existing platform, and the Nasdaq involvement signals that traditional exchange infrastructure is moving toward integration rather than resistance.

Solana Foundation executives have publicly described Solana's trajectory as becoming the "onchain Nasdaq." The framing is ambitious, but the infrastructure is starting to match the ambition. By late March, Solana had processed roughly 94% of all-time onchain tokenized equity spot volume across competing platforms.

## Competing Models and Open Questions

Not everyone is building tokenized equities the same way. At least four distinct models are competing on Solana alone: Ondo Finance's digital twin approach, Kraken's 24/7 automated market maker model, Superstate's direct transfer agent model, and asset-backed structures like Backed's. Each has different custody arrangements, regulatory footprints, and composability trade-offs.

Regulatory clarity is the primary unresolved question. xStocks are currently restricted to non-U.S. persons, which limits the addressable market considerably. Any expansion into U.S. retail would require coordination with the SEC, and the timeline for that remains uncertain.

There is also the question of price feed reliability. Tokenized stocks need accurate oracle prices to function as collateral. During market closures, price discovery shifts entirely to on-chain liquidity, which is still thin compared to traditional markets. A flash crash in a low-liquidity xStock pool could cascade into lending protocols holding it as collateral.

## The Bigger Picture

Tokenized equities are not replacing traditional markets. They are adding a layer on top of them, one that is accessible around the clock, composable with DeFi, and settles in seconds. For global users who lack access to U.S. brokerages, that layer represents a meaningful expansion of financial access.

The growth from $20 million to $1 billion in 15 months suggests genuine demand. Whether that demand can scale into the trillions that characterize actual equity markets depends on regulatory progress and deeper on-chain liquidity. But for the first time, the technical infrastructure to support a 24/7 global equities market exists and is running in production.
