---
title: "What is a crypto wallet?"
description: "A crypto wallet doesn't actually hold any crypto. Here's what it does hold, why that distinction matters, and how to think about keeping your funds safe."
category: "Chain 101"
publishedDate: "2026-03-05"
status: "live"
author: "Chain Brief"
---

The word "wallet" is misleading. A physical wallet holds money — you put cash in, cash stays there. A crypto wallet holds no crypto whatsoever.

Your crypto never leaves the blockchain. What a wallet holds is something far more important: the **keys** that prove you have the right to move it.

Understanding the difference between holding a wallet and holding keys is one of the most important things you can learn in crypto. It determines who actually controls your assets.

## Public keys and private keys

Blockchain accounts are built on **public-key cryptography**. Every account has two mathematically linked pieces of data:

- A **public key** (which becomes your wallet address) — this is like your bank account number. You can share it with anyone. People use it to send crypto to you.
- A **private key** — this is like the PIN and the physical card combined. Anyone who holds the private key can sign transactions and move the funds associated with that address. No one else can.

When you "send" crypto, you're not moving coins from one place to another. You're broadcasting a cryptographically signed message to the blockchain that says: "I, the holder of the private key for this address, authorise the transfer of X amount to this other address." The network verifies the signature, confirms you have the balance, and updates the ledger.

The wallet software handles this signing automatically — most of the time you never see the private key directly. But it's happening every time.

## The seed phrase

Managing raw private keys is impractical. Most wallets instead generate a **seed phrase** (sometimes called a recovery phrase or mnemonic): a sequence of 12 or 24 ordinary English words.

The seed phrase is a human-readable encoding of the master secret from which all the wallet's private keys are derived. If you lose access to your wallet — your phone breaks, your hardware device is stolen, you forget a PIN — the seed phrase lets you regenerate everything and recover your funds, on any compatible wallet.

This means the seed phrase *is* the wallet, in the most meaningful sense. Whoever has the seed phrase has the keys. Whoever has the keys controls the funds.

Write it down on paper. Store it somewhere physically secure — ideally more than one location. Never photograph it, type it into any website, share it in any chat, or store it in the cloud. There is no "I forgot my seed phrase" button. There is no account recovery. If it's gone, the funds are gone.

## Hot wallets vs cold wallets

Crypto wallets come in two broad categories based on their relationship to the internet:

**Hot wallets** are connected to the internet — browser extensions like MetaMask, mobile apps, or desktop software. They're convenient for frequent transactions. The tradeoff is that anything connected to the internet is, in principle, reachable by attackers. Hot wallets are appropriate for smaller amounts you actively use.

**Cold wallets** (also called hardware wallets) are physical devices — USB-like gadgets from manufacturers like Ledger or Trezor — that store your private keys entirely offline. To sign a transaction, you connect the device and confirm on its screen. The private key never touches an internet-connected machine. Cold wallets are the standard recommendation for storing larger amounts you don't need regular access to.

A useful analogy: a hot wallet is like cash in your pocket — accessible, but you wouldn't carry your life savings in it. A cold wallet is like a safe at home.

## Self-custody vs exchange custody

When you buy crypto on an exchange like Coinbase or Binance, you don't automatically hold the keys. The exchange holds the keys on your behalf. What you have is an account with the exchange that shows a balance — similar to a bank account.

This is called **custodial** storage. It's convenient: you can reset passwords, contact support, and the interface is familiar. But you're trusting the exchange entirely. If the exchange is hacked, goes bankrupt, or freezes withdrawals (all of which have happened), your access to those funds is at the exchange's discretion.

**Self-custody** means holding your own keys — in a hot or cold wallet you control. No counterparty can freeze your funds or go insolvent with your crypto on their books. The tradeoff is that you bear full responsibility for security. Lose the keys, lose the funds.

The phrase common in crypto communities is: **"not your keys, not your coins."** It's blunt, but accurate.

## Choosing what's right for you

There's no single right answer. Many people hold most of their crypto in self-custody cold storage and keep smaller amounts on an exchange for ease of trading. Others start with an exchange and move to self-custody as their holdings grow and their comfort with the technology increases.

What matters most is understanding the distinction — and making a conscious, informed choice rather than defaulting to convenience without knowing the risks on either side.

---

*This article is part of Chain 101 — our plain-English series covering crypto fundamentals.*
