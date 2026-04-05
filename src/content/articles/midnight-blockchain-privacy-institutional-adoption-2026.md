---
title: "Midnight Goes Mainnet: Cardano's Privacy Chain Lands First Bank Deal"
description: "Charles Hoskinson's $200M-backed privacy blockchain Midnight has launched on mainnet, securing a £250M deposit tokenization deal with UK-regulated Monument Bank and attracting nine major institutions to run nodes."
publishedDate: "2026-04-05"
status: "live"
author: "Chain Brief"
category: "Deep Dive"
---

Privacy blockchains have long promised to make enterprise adoption of public ledgers viable. Most have failed to close the gap between genuine privacy and the regulatory requirements that institutions cannot sidestep. Midnight, the privacy-focused partner chain to Cardano, is making a credible attempt to change that — and it just landed its first major regulated deal to prove the point.

## What Midnight Actually Is

Midnight is a layer-1 blockchain built around zero-knowledge proofs, specifically zk-SNARKs, that runs as a partner chain to Cardano. It generated its genesis block on March 17, 2026, and made its full public debut on April 1 after a testing period. Charles Hoskinson, who co-founded Ethereum before building Cardano, backed the project with roughly $200 million.

The core technical idea is a hybrid ledger that separates public and private data at the protocol level. Transactions can include private state — data visible only to the parties involved — while still anchoring to a public chain that anyone can audit for integrity. The ZK proofs handle compliance checks client-side, meaning a bank can verify a transaction meets regulatory requirements without broadcasting the underlying details to every node on the network.

The fee model is also unusual. Rather than charging native token gas fees directly, Midnight uses a dual-token system: NIGHT is the staking and governance token, and DUST is the consumable resource for transaction fees. NIGHT holders receive DUST continuously, proportional to their holdings. The design separates price speculation from operational costs, which matters for institutions building on top of it.

## The Monument Bank Deal

The most significant signal of institutional traction came when UK-regulated Monument Bank announced a partnership with the Midnight Foundation. Monument is authorized by the Bank of England, manages roughly £7 billion in deposits, and serves over 100,000 mass-affluent clients. The first phase targets up to £250 million in tokenized retail deposits.

The structure is straightforward: savings are converted into digital tokens representing interest-bearing accounts, held on Midnight's network while retaining full regulatory compliance. Clients continue earning interest as normal. The bank handles KYC and compliance off-chain; the ZK layer confirms those checks occurred without exposing customer data on a public ledger.

For privacy blockchain advocates, this is the use case they have been pointing to for years. Deposit tokenization on a public chain has always run into the wall of data protection law and banking secrecy requirements. Midnight's architecture is designed specifically to navigate that conflict.

## Who Else Is Running Nodes

Beyond Monument Bank, nine major finance and technology firms are running Midnight nodes. Worldpay is exploring USDG stablecoin payments for merchants using the network. Bullish, the crypto exchange, is building proof-of-reserves ZK layers on top of the infrastructure. Neither partnership is a small announcement — Worldpay processes more transaction volume than most banks, and proof-of-reserves has been a persistent credibility problem for centralized exchanges since the FTX collapse in 2022.

The node operator list signals that Midnight is being taken seriously as infrastructure, not just as a research project. Running a node implies operational commitment, integration work, and an expectation that the network will be around long enough to justify the investment.

## The Bigger Picture

Midnight is entering a market that has tried and largely failed to gain traction with enterprises. Hyperledger Fabric, R3 Corda, and various permissioned chains attracted pilots and proofs of concept throughout the 2017-2022 cycle, but few scaled to production use. The common failure mode was that permissioned chains solved for privacy by removing the public ledger entirely, which also removed most of the reasons to use a blockchain in the first place.

Midnight's approach — keeping the public chain for integrity while using ZK proofs to protect private data — is technically more demanding but preserves the properties that make public blockchains worth building on: censorship resistance, transparent settlement finality, and the ability to interoperate with other on-chain assets.

Whether institutional adoption materializes at scale depends on execution, regulation, and whether the ZK tooling is accessible enough for enterprise development teams. The Monument Bank deal is a meaningful first data point. The next question is whether it becomes a reference case or an outlier.
