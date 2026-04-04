---
title: "New Research Slashes the Qubit Count Needed to Break Bitcoin Encryption"
description: "A Caltech and Oratomic study finds a neutral-atom quantum computer with roughly 26,000 qubits could crack the elliptic curve cryptography securing Bitcoin and Ethereum wallets in about ten days — far fewer qubits than earlier estimates."
category: "Deep Dive"
publishedDate: "2026-03-31"
status: "live"
author: "Chain Brief"
---

A new paper from researchers at Caltech and quantum startup Oratomic has updated the threat model for blockchain security. Using Google's quantum circuits as a baseline, the authors calculate that a neutral-atom quantum computer with around 26,000 physical qubits could break ECC-256, the elliptic curve standard that secures Bitcoin and Ethereum wallets, in roughly ten days.

That is a significant revision. Earlier estimates placed the requirement in the hundreds of thousands of qubits, sometimes in the millions. The figure is still above what any publicly available quantum machine can do today, but the gap between theoretical risk and practical capability has narrowed faster than many expected.

## Why Elliptic Curve Cryptography Is the Weak Point

ECC-256 achieves strong security with comparatively small key sizes, which makes it efficient for blockchain use. That same efficiency, however, means a quantum attacker has less work to do. RSA-2048, by comparison, would require around 102,000 qubits and roughly three months to crack under the same model.

The exposure window matters too. When a Bitcoin user sends a transaction, the network temporarily reveals the public key. A sufficiently fast quantum machine could, in theory, derive the private key and intercept funds before the transaction confirms. Given that Bitcoin blocks take about ten minutes on average, the researchers estimate an attacker might succeed roughly 41% of the time within a nine-minute window.

## How Much Bitcoin Is Actually at Risk

About 7 million BTC sits in wallets that reuse addresses or expose public keys in ways that would become vulnerable to a capable quantum attacker. That includes an estimated 1 million coins widely attributed to Satoshi Nakamoto. At current prices, the exposure across those early and reused addresses is in the hundreds of billions of dollars.

## The Industry Is Not Standing Still

Responses vary across networks. Ethereum has outlined a phased roadmap toward quantum-resistant cryptography, and Coinbase has published similar long-term migration plans. Solana has made quantum-safe vaults available as an optional feature for users who want early protection.

Bitcoin's path is more contested. A proposal called BIP360 describes a mechanism for moving funds into quantum-resistant address types over time, without forcing an abrupt network-wide upgrade. No consensus has formed around it yet, partly because any migration plan must also decide what happens to coins in old addresses that can never be moved, including Satoshi's holdings.

The U.S. National Institute of Standards and Technology finalised its first post-quantum cryptography standards in August 2024, publishing CRYSTALS-Kyber for encryption and CRYSTALS-Dilithium and SPHINCS+ for digital signatures. Google has committed to transitioning its own systems to quantum-resistant cryptography by 2029, and Android 17 already ships with quantum-resistant signature support.

## Conflicting Timelines

Ark Invest has argued that the threat remains long-term rather than imminent. Current quantum hardware operates in what researchers call the NISQ era, roughly 100 logical qubits with circuit depths in the hundreds, well below the thresholds required to attack live blockchain infrastructure.

Still, experts at firms like Firgun Ventures note the crypto community was caught off guard by how quickly the qubit estimates dropped. If the Caltech and Oratomic findings can be replicated and validated in a lab setting, the timeline for a credible attack could compress to two or three years from where most assessments sat even twelve months ago.

## What This Means in Practice

The immediate risk to everyday users is low. No quantum computer close to 26,000 physical qubits with the necessary error correction is publicly operational. But the research reframes where the threshold sits, and that matters for how urgently the industry should treat a migration it has largely treated as a future problem.

Bitcoin's governance process is slow by design. Ethereum's is faster but still requires broad coordination. The next eighteen months will test whether the largest blockchain networks can align on post-quantum upgrades before the hardware catches up to the theory.
