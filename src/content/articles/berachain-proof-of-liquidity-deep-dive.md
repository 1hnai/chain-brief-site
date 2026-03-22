---
title: "Berachain's Proof of Liquidity: What the New Consensus Model Actually Does"
description: "Berachain launched mainnet in February 2026 with a novel consensus mechanism that ties validator rewards directly to protocol liquidity. Here's how it works and where the risks are."
category: "Deep Dive"
publishedDate: "2026-03-22"
status: "draft"
author: "Chain Brief"
---

Berachain went live on February 6, 2026, ending a two-year public testnet period that drew more developer attention than most chains see after launch. The project raised a reported $100 million in a Series B round at a $1.5 billion valuation in April 2024, backed by Polychain Capital, Framework Ventures, and Hack VC. The marketing was loud. The mechanism, however, is worth understanding on its own terms.

The core idea is called Proof of Liquidity. It keeps a validator-based consensus structure but changes what drives validator rewards. If you've dismissed Berachain as another Cosmos chain with better branding, this is the part that deserves a second look.

## Three Tokens, One Loop

Berachain runs on three tokens, each with a distinct function.

**BERA** is the gas token. It pays for transactions, trades freely on the open market, and has no governance rights.

**BGT** (Berachain Governance Token) is the mechanism's core. BGT is non-transferable. You cannot buy it on an exchange. The only way to earn it is by depositing liquidity into whitelisted Berachain vaults that receive BGT emissions. BGT holders can delegate it to validators, which increases validator rewards, or burn it 1:1 for BERA.

**HONEY** is the native stablecoin, minted against approved collateral and backed by liquidation mechanics if collateral ratios fall below required thresholds.

The three tokens create a closed loop: validators need BGT delegation to earn block rewards, BGT can only be earned through protocol liquidity, so validators have a structural incentive to attract liquidity providers to the vaults they influence.

## How Proof of Liquidity Differs From Standard PoS

On a standard proof-of-stake chain, a validator's influence is proportional to the native token staked behind it. On Ethereum, that's ETH. On Solana, SOL. Validators are rewarded for including transactions, and those rewards flow to stakers.

Berachain keeps the validator structure but adds a second layer: block rewards are weighted by BGT delegation, not just stake. To attract BGT delegation, validators typically offer incentives to users depositing liquidity into the vaults they manage.

This separates passive capital (holding BERA) from active participation (providing liquidity, earning BGT, delegating it). The designers argue this eliminates what they call "mercenary liquidity," where capital arrives for high yields and exits when they compress. By making liquidity provision structurally load-bearing for the chain's security model, Berachain tries to give liquidity providers a reason to stay.

The skeptical reading: the mechanism is complex enough that most users will simply hold BERA and ignore BGT entirely. That would concentrate governance and validator influence among sophisticated actors who understand and can navigate the flywheel, which is its own centralization problem.

## Native Applications

Berachain launched with three applications built by the core team, each earning BGT emissions from whitelisted vaults.

**BEX** is the native automated market maker, functioning similarly to Uniswap v2-style pools. Liquidity provided to BEX pools is one of the primary paths to earning BGT.

**Bend** is the native lending protocol, with depositors earning BGT emissions from vault allocations.

**Berps** is the native perpetuals exchange, also BGT-eligible.

The team controls which vaults receive BGT emissions at launch. Third-party protocols can apply for vault whitelisting, but in the early period, BEX, Bend, and Berps carry structural advantages. Critics have noted that this concentrates early BGT accumulation among teams with insider access to the whitelist process. The counter-argument is that every new chain bootstraps native liquidity first, and vault access is permissionless over time.

## EVM on Cosmos

Berachain is built on the Cosmos SDK but runs an EVM-equivalent execution environment. Solidity contracts deploy without modification. Existing Ethereum tooling (Foundry, Hardhat, MetaMask) works out of the box.

The Cosmos base gives Berachain a customizable consensus layer that makes Proof of Liquidity mechanics possible. The EVM layer on top gives it access to the existing pool of Ethereum developers and audited contract code.

This combination is increasingly common. The Cosmos SDK's modularity has attracted projects that want custom consensus without rebuilding EVM compatibility from scratch. Berachain's version is more deeply modified than most, given the BGT emission hooks into the consensus logic, but the general pattern is established.

## Early Signals

Berachain's mainnet launch attracted a substantial initial TVL across BEX and Bend, placing it among the larger new chain launches by that metric, according to DeFiLlama. However, TVL figures for new chains need context: they typically reflect incentive farming rather than durable usage, and they fall sharply once initial emissions slow or alternatives emerge.

More than 100 external protocols deployed on Berachain within the first month of mainnet, according to the team's public updates. The breadth includes established names seeking BGT vault allocations, which suggests the mechanism has some genuine pull for DeFi teams looking for protocol-level liquidity support.

The data that matters, and that isn't yet available at the time of writing, is retention: how much liquidity and how many active addresses remain after the initial incentive cycle runs its course.

## The Risk Worth Watching

Proof of Liquidity addresses a real problem. DeFi protocols struggle with liquidity durability because there's no structural reason for capital to stay once yields drop. Berachain tries to fix that by making liquidity provision part of the chain's security model, not just an optional yield strategy.

The mechanism only holds, though, if BGT delegation remains reasonably distributed. If early validators and insider-adjacent protocols capture most BGT flow in the first few months, the flywheel becomes a moat. Governance and validator rewards would concentrate in a small group, and the "aligned liquidity" thesis collapses into a standard plutocracy with extra steps.

**What to watch:** BGT distribution across validators over the first two quarters, the pace and criteria of third-party vault whitelisting, and whether BEX liquidity holds once external AMMs deploy and compete for the same allocations.

The architecture is coherent. Whether the incentives stay aligned at scale is the open question, and mainnet is still too new to answer it.
