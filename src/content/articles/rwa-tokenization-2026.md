---
title: "Real-World Assets on Chain: What's Actually Working in 2026"
description: "Tokenised Treasuries crossed $5 billion. Private credit protocols are originating real loans. The RWA narrative has moved from whitepaper promise to live infrastructure, but the hard problems haven't gone away."
category: "Deep Dive"
publishedDate: "2026-03-29"
status: "live"
author: "Chain Brief"
---

Real-world asset tokenisation has been a recurring crypto talking point for years. The pitch is simple: take an off-chain asset, a bond, a mortgage, a piece of commercial real estate, represent it as a token on a blockchain, and suddenly it inherits all the properties of on-chain finance. Programmable, composable, transferable at any hour without a broker.

For a long time, the gap between that pitch and actual deployed capital was embarrassing. Projects announced integrations and partnerships. Almost nothing moved.

That changed. Not completely, and not without caveats. But the numbers in 2026 are real enough to analyse.

## Where the volume went first: government debt

The fastest-growing segment of on-chain RWAs is tokenised US Treasuries and money market instruments. As of early 2026, total value locked in these products sits above $5 billion across the major issuers. That's up from a few hundred million in early 2024.

The logic here is straightforward. When on-chain dollar yields were near zero, there was little incentive to tokenise cash equivalents. Once the Fed pushed rates above 5%, suddenly it mattered a lot whether idle stablecoins in a DeFi protocol were earning anything. Tokenised T-bills let protocols and large holders put that cash to work without off-ramping.

Franklin Templeton's BENJI, BlackRock's BUIDL, and Ondo Finance's USDY and OUSG are the main vehicles. They differ in structure: some are ERC-20 tokens directly representing fund shares, others use a wrapper layer. Most carry KYC requirements at the point of purchase, meaning they're not permissionless. But the yield accrues on-chain, and the tokens can be used as collateral in certain DeFi protocols that have whitelisted them.

The KYC constraint is worth sitting with. It means these products are accessible to institutions and verified individuals, not to anonymous wallets. For the use case of "give DeFi protocols access to real yield," that may be fine. Treasury multisigs can complete KYC. DAOs are figuring out legal wrappers that let them hold compliant assets. But it does mean tokenised Treasuries haven't opened up access to US debt markets for people who couldn't previously access them. They've made it operationally easier for people who already could.

## Private credit: the more complicated story

Private credit protocols take a different approach. Instead of wrapping existing institutional products, they're attempting to originate loans on-chain to real-world borrowers: fintech lenders in emerging markets, small business lending platforms, invoice finance companies.

Goldfinch, Credix, and Maple Finance are the names that have been in this space the longest. Their combined loan books have at some points exceeded $1 billion in active originations, though defaults and retrenchments have periodically cut into that figure.

The mechanics involve a senior/junior tranche structure. Junior capital, typically provided by the protocol's community or specialist investors, absorbs first losses. Senior capital, drawn from stablecoin LPs seeking yield, sits above it. Borrowers are real companies, assessed by underwriters who have done off-chain due diligence.

The default experience has been instructive. Goldfinch suffered significant losses in 2023 when several borrowers in its portfolio experienced repayment problems. Maple had a high-profile blowup tied to crypto-native borrowers during the FTX contagion period. Both protocols retrenched, tightened underwriting standards, and rebuilt.

What emerged on the other side is more conservative but arguably more credible. Maple now focuses heavily on institutional borrowers with transparent cash flows. Goldfinch has moved toward markets where it has more direct borrower relationships. The lesson absorbed by both: on-chain transparency doesn't substitute for underwriting quality. A borrower with poor repayment capacity is still a bad loan whether it's on a blockchain or not.

## Collateral in DeFi: the integration challenge

For on-chain RWAs to matter to DeFi's core primitives, they need to function as collateral in lending protocols and as backing for stablecoins. This is where progress has been slower, for structural reasons.

MakerDAO (now Sky) spent 2023 and 2024 aggressively building out its RWA collateral base. At peak, real-world assets backed roughly 50-60% of DAI supply, primarily through Maker's relationship with Monetalis and similar structured finance vehicles holding short-term bonds. The strategy generated substantial revenue for the protocol but also concentrated counterparty risk in a way that made some community members uncomfortable.

The tension is genuine. DeFi protocols are permissionless and governed by token holders. The RWA structures needed to legally hold off-chain assets require trusts, legal entities, custodians, and jurisdiction-specific filings. Every time a protocol plugs into one of those structures, it's accepting a dependency on a legal and operational chain it can't fully verify on-chain. An oracle can tell you the current yield on a T-bill portfolio. It can't tell you whether the trust deed is valid in the jurisdiction of incorporation.

Aave has been more cautious. Its RWA integrations have been limited and carefully scoped, prioritising assets with clear legal enforceability. The argument from that camp: the value of DeFi's transparency is that users can verify what they're taking on. If the collateral backing a loan is a legal trust structure in the Cayman Islands audited annually, that's a different risk profile than ETH, and users should understand it as such.

## What tokenisation doesn't fix

The bullish case for RWA tokenisation often leans on friction reduction: settle faster, trade 24/7, eliminate intermediaries, improve liquidity. These are real benefits, in the right context.

But tokenisation doesn't change the underlying economics of an asset. A loan to a fintech lender in Southeast Asia carries the credit risk of that lender's borrowers. Putting it on-chain doesn't diversify that risk or make the borrower more creditworthy. A piece of commercial real estate still depends on occupancy rates, local property law, and whether the legal wrapper holding the token actually conveys enforceable ownership.

Secondary market liquidity for most RWA tokens is thin. The vision of fractionalized real estate trading fluidly on a DEX hasn't materialised, partly because legal transfer restrictions make such fractionalization complicated in most jurisdictions, and partly because the buyers for small slices of a specific office building don't naturally congregate on-chain.

The assets that have worked, tokenised government securities and to a lesser extent institutional credit, work because the underlying is already liquid, the legal structure is well-understood, and the token is mostly serving as an operational wrapper that makes custody and yield distribution easier, not as a fundamental transformation of the asset.

## What's actually next

The more credible near-term development isn't tokenising exotic assets for retail. It's institutional settlement infrastructure. Several major banks have begun piloting tokenised deposit systems, where interbank settlement happens via tokens on a permissioned ledger. That's less visible than a consumer-facing DeFi protocol, but represents far larger capital flows.

Cross-chain RWA composability is also developing slowly. The ability to use a tokenised T-bill held on one chain as collateral in a lending protocol on another requires oracle infrastructure, legal recognition of the transfer, and protocol governance decisions on both ends. Projects like Chainlink's CCIP are positioning as the messaging layer for this. Whether protocols standardise around a single cross-chain standard or fragment further is an open question.

The honest summary of where things stand: RWA tokenisation has found its first real product-market fit in the narrow case of on-chain yield for institutional and semi-institutional participants. It has not yet found that fit for democratising access to previously inaccessible asset classes. The latter remains a plausible long-term development. The former is simply a better-than-expected outcome for what started as a speculative infrastructure bet.
