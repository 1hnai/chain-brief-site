---
title: "Tokenized Real-World Assets Hit $20 Billion. The Hard Part Starts Now."
description: "RWA tokenization has crossed a significant threshold. Treasury bills, credit, and real estate are on-chain. The infrastructure gaps that follow are less glamorous but more important."
category: "Analysis"
publishedDate: "2026-03-25"
status: "live"
author: "Chain Brief"
---

The total value of tokenized real-world assets on public blockchains crossed $20 billion in early 2026. That figure, tracked across protocols including Ondo Finance, Maple, Centrifuge, and the tokenized Treasury products issued by Franklin Templeton and BlackRock's BUIDL fund, represents a meaningful step change from the $5 billion figure that was the headline number at the start of 2025.

The growth narrative has been straightforward: on-chain yield products denominated in stablecoins, collateralised by US Treasury bills, offer institutional and sophisticated retail participants a way to hold yield-bearing assets inside DeFi infrastructure. When on-chain stablecoin yields were competing with 5 percent risk-free rates, the demand case was obvious. The Fed's rate cycle has shifted since then, but the structural case for tokenizing liquid assets has not gone away — it has widened.

## What Is Actually On-Chain

The category called RWA contains several distinct subcategories that behave quite differently:

**Tokenized Treasuries and Money Market Instruments** are the largest and most liquid segment. BUIDL, Franklin Templeton's FOBXX, and Ondo's USDY and OUSG collectively account for roughly 60 percent of total RWA TVL. These are simple instruments: the issuer holds short-duration US government paper, mints tokens representing shares, and pays yield. The regulatory structure is established, the underlying instruments are liquid, and the on-chain mechanics are relatively uncomplicated.

**Private Credit** is the second-largest category and a structurally different animal. Protocols like Maple Finance and Centrifuge connect on-chain capital with off-chain borrowers — typically fintechs, trade finance facilities, or real estate bridge loans. Yields are higher, but so is the risk profile. The 2022 credit cycle exposed the weakness here: undercollateralised lending to crypto-native borrowers who were net short risk when prices fell. The post-2022 iteration of on-chain private credit has moved toward over-collateralisation and real-world borrowers, but the counterparty risk is still more complex than holding a T-bill.

**Tokenized Real Estate** remains a small fraction of the total, despite being the category that generates the most non-crypto media coverage. The legal and operational complexity of tokenizing property title, handling jurisdiction-specific transfer restrictions, and managing the ongoing responsibilities of property ownership have made real estate a slow mover. Several platforms are live, but total TVL remains in the hundreds of millions, not billions.

**Commodities and Other Assets** — tokenized gold via Paxos and Tether Gold, tokenized carbon credits, and a range of experimental infrastructure — make up the remainder. Tokenized gold is functionally a stablecoin with a different peg. Carbon credit tokenization has been complicated by the ongoing quality dispute over voluntary carbon market methodologies that has affected the underlying credit market regardless of whether the credits are on-chain.

## The Infrastructure Gaps

The $20 billion figure is real, but it obscures the infrastructure gaps that become more significant as the market grows.

**Legal enforceability** is the first and most important gap. Most tokenized asset products are structured as wrapper funds — the token represents a share in a fund that holds the underlying asset, rather than a direct claim on the asset itself. This structure works for T-bills. It creates complexity for anything where direct ownership matters, including real estate, where property rights are enforced through jurisdiction-specific legal systems that do not recognise on-chain transfers.

The smart contract holds a legal agreement that says the token holder has a claim. Whether that claim is enforceable in a foreign jurisdiction, in a bankruptcy, or in an adverse ownership dispute depends on legal structures that are still being developed. Several RWA protocols have had to update their terms of service multiple times in the past two years as their legal teams have worked through edge cases.

**Secondary market liquidity** is thinner than the TVL numbers suggest. A T-bill product with $500 million in TVL is not the same as $500 million of liquidity. Many tokenized asset tokens trade in small sizes or have redemption delays that make them unsuitable as DeFi collateral in the same way that USDC or WETH is collateral. The promise that tokenized RWAs would become deeply integrated into DeFi composability — used as collateral in lending protocols, for instance — is partially realised in a few products and not yet realised in most.

**Institutional custody** remains unresolved for large allocators. The current tokenized RWA market is dominated by crypto-native participants using DeFi wallets and a small number of institutional entrants who have built or sourced compliant custody solutions. The broad wave of traditional asset managers does not yet have a standardised, regulated custody path for holding tokenized assets at scale. This is a solved problem in traditional finance — custody for securities has worked reliably for decades — but the on-chain version requires agreement on token standards, custody key management, and regulatory treatment that is still being worked out.

## The Regulatory Picture

The GENIUS Act, which is working through the US Senate, addresses stablecoins directly but has only indirect implications for tokenized RWAs. The more relevant regulatory developments are the SEC's ongoing work on tokenized securities and the application of broker-dealer rules to platforms that facilitate secondary market trading of tokenized products.

The EU's MiCA framework, which took full effect at the end of 2024, provides a clearer path for tokenized asset issuers operating in European markets, though it applies primarily to crypto-assets rather than security tokens. The DLT Pilot Regime allows regulated firms to issue and trade tokenized securities under modified rules, and several European banks have used it to issue tokenized bonds and structured notes. Uptake has been slower than the initial optimism suggested, but the regulatory infrastructure is more developed in Europe than in the US for this specific category.

## What Comes Next

The RWA market at $20 billion is large enough to take seriously and small enough that most of its infrastructure problems remain workable. The same credit quality and legal enforceability issues that are inconvenient at $20 billion become systemic at $200 billion.

The protocols that will matter in the next phase are not necessarily the ones with the most TVL today. The winners will be the ones that solve the legal enforceability question in multiple jurisdictions, build or integrate with compliant institutional custody, and create secondary market liquidity deep enough to support the collateralisation use cases that DeFi composability requires.

The T-bill tokenization market is effectively solved. The interesting and difficult work is everything else.
