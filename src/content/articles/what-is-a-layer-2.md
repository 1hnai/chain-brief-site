---
title: "What Is a Layer 2?"
description: "Layer 2 networks move Ethereum computation off-chain to cut costs and increase throughput, while inheriting the security of Ethereum's main chain. Here is how they work."
category: "Chain 101"
publishedDate: "2026-03-21"
status: "draft"
author: "Chain Brief"
---

By 2021, sending a token on Ethereum cost between $20 and $200, depending on network congestion. A simple swap on Uniswap could cost more than the transaction was worth. Ethereum had a scaling problem, and it could not fix it by simply making the chain faster without compromising security or decentralization.

Layer 2 networks are the solution Ethereum settled on: move most computation off the main chain, but anchor the result to Ethereum so users can inherit its security guarantees.

## The Core Problem

Ethereum's capacity is limited by its block size and block time. Every validator in the network must process every transaction, which creates a ceiling on how much activity the network can handle per second.

During high-demand periods, users bid against each other to get transactions included. The bidding war is why fees spike: you pay more gas to be prioritized. The ceiling on throughput is the root cause.

Increasing block size would let Ethereum process more transactions, but validators would need more storage and bandwidth to keep up. More requirements mean fewer people can run validators, which means the network becomes more centralized. This trade-off is why Ethereum did not simply increase throughput.

Layer 2 networks move the work somewhere else, then report back.

## Rollups: The Dominant Solution

A rollup takes a batch of transactions, executes them outside of Ethereum, compresses the result, and posts a summary to Ethereum's main chain. The main chain does not re-execute the transactions. It stores the data and processes the final state change.

The "roll up" refers to this batching: instead of posting 1,000 individual transactions to Ethereum, a rollup posts one summary that represents all 1,000. The cost of Ethereum's block space is split across all those transactions, which is why fees drop significantly.

There are two main types of rollups, and they differ in how they prove to Ethereum that the transactions were executed correctly.

## Optimistic Rollups

An optimistic rollup assumes all submitted transactions are valid by default, which is what makes it "optimistic." It posts the batch to Ethereum and then waits.

There is a challenge window, typically seven days, during which anyone can submit a fraud proof: a cryptographic argument that a specific transaction in the batch was executed incorrectly. If a valid fraud proof is submitted, the incorrect batch is rejected and the sequencer who submitted it is penalized.

If no valid challenge arrives within the window, the batch is considered final.

The seven-day window is the significant trade-off. Withdrawing assets from an optimistic rollup back to Ethereum mainnet takes up to seven days unless you use a third-party bridge that provides immediate liquidity in exchange for a fee. For most users, this delay is invisible: they interact with the rollup and never need to wait because their assets stay on the rollup.

Major optimistic rollups include Arbitrum One, OP Mainnet, and Base. All three use variants of the same technical approach, though Arbitrum and the OP Stack (which powers OP Mainnet and Base) differ in their proving systems and governance structures.

## ZK Rollups

A ZK rollup (zero-knowledge rollup) does not ask anyone to trust that the transactions are valid. Instead, it generates a cryptographic proof, called a validity proof, that mathematically guarantees the batch of transactions was executed correctly. Ethereum verifies this proof when the batch is posted.

If the proof is valid, the state is final immediately. There is no challenge window and no seven-day withdrawal delay.

The trade-off is computation. Generating validity proofs is expensive and technically complex. The proving systems required are sophisticated, and the cost of generating proofs adds overhead that optimistic rollups do not have.

Major ZK rollups include zkSync Era, StarkNet, Linea, and Scroll. Polygon also runs a ZK-based system. The technology is maturing: proving times that took minutes in 2022 have come down to seconds as the hardware and algorithms improved.

## What "Inheriting Ethereum Security" Means

Both types of rollups post data to Ethereum. This is the key phrase.

If a rollup's operators disappear, act maliciously, or shut down, users can always reconstruct the state of the rollup from the data posted to Ethereum and withdraw their assets. The data is there, on-chain, permanently. Users are not dependent on any rollup operator remaining honest or operational.

For optimistic rollups, this guarantee is maintained by the fraud proof system: anyone can verify the data and challenge incorrect state transitions. For ZK rollups, the validity proofs themselves provide the guarantee: an invalid state transition cannot generate a valid proof.

This is why rollups are categorically different from sidechains, which have their own validator sets and security models independent of Ethereum. A sidechain's security depends on its own validators. A rollup's security ultimately depends on Ethereum.

## The Sequencer Problem

Every major rollup runs a sequencer: a server that orders and processes transactions before batching them to Ethereum. The sequencer is the bottleneck.

Most production rollups run a single sequencer operated by the founding team. This sequencer can, in theory, reorder transactions, exclude specific addresses, or go offline.

Decentralizing the sequencer is a stated goal of every major rollup team. The progress toward that goal varies considerably. As of early 2026, most major rollups still rely on a single sequencer, and the practical decentralization of rollup operation remains an open engineering problem.

## Which L2 for What

For most users, the practical choice depends on where the applications they want to use are deployed, not on the technical differences between rollup types.

Arbitrum has the most mature DeFi ecosystem. Base has the strongest consumer application distribution via Coinbase. OP Mainnet is the reference implementation of the OP Stack. For high-value DeFi activity with fast finality requirements, ZK rollups are increasingly competitive.

The underlying point: Layer 2 networks are not experimental. They handle billions of dollars in daily transaction volume and are the primary infrastructure for most Ethereum-based applications. Understanding how they work, and where their guarantees hold and where they do not, is prerequisite knowledge for anyone using them.

---

*Chain Brief publishes first-principles explainers for readers new to crypto.*
