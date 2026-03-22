---
title: "AI Agents Are Getting Crypto Wallets - What World and Coinbase Just Built"
description: "Sam Altman's World and Coinbase launched AgentKit, a toolkit letting AI agents make verified stablecoin payments on behalf of real humans."
category: "Analysis"
publishedDate: "2026-03-21"
status: "live"
author: "Chain Brief"
---

A new piece of internet infrastructure quietly launched on March 17, and it could define how AI agents spend money on your behalf.

World, the digital identity project co-founded by OpenAI CEO Sam Altman, released **AgentKit**: a developer toolkit that lets AI agents prove they are backed by a verified human when transacting online. It integrates World's identity layer with **x402**, an open payments protocol built by Coinbase and Cloudflare. Together, they form what developers are calling a "complete trust stack" for agentic commerce.

## The Problem They Are Solving

AI agents are already booking flights, buying concert tickets, and placing e-commerce orders on behalf of users. But to most websites, that traffic looks identical to a malicious bot. Sites block it, throttle it, or demand CAPTCHAs that agents cannot solve.

At the same time, platforms have no way to know whether the agent making a purchase is backed by a real person with genuine intent, or part of a mass-automation scheme designed to scalp inventory or abuse free trials.

AgentKit tackles both problems at once.

## How It Works

When a user registers an AI agent with World, the agent receives a cryptographic credential tied to the user's **World ID**, a biometric identity verified via World's Orb hardware. Critically, the proof is generated using **zero-knowledge cryptography**, meaning platforms can confirm a real human stands behind the agent without ever seeing personal data.

For payments, the agent uses Coinbase's x402 protocol to transact in **USDC on Base**, Coinbase's Ethereum layer-2 network. Platforms that support x402 can charge agents directly for API access, reservation slots, digital goods, or any other service, and they receive instant cryptographic proof that the payer is human-backed.

The result: a legitimate AI agent can shop, pay, and interact at scale without being flagged as a threat.

## Why This Matters for Crypto

This is one of the clearest real-world use cases for crypto payments that has emerged in years, and it does not rely on speculation.

Stablecoins are the obvious currency for machine-to-machine transactions: they are programmable, settle instantly, carry no exchange-rate volatility, and work across borders without a bank. USDC on Base already settles for fractions of a cent, making it viable for micropayments that would be uneconomical on traditional payment rails.

The x402 protocol has processed over 100 million transactions since its May 2025 launch. <!-- FACT-CHECK: fixed "50 million" → "100 million"; Cloudflare/Coinbase reported over 100 million payments processed as of late 2025 --> Stripe has integrated it to bill agents directly. Cloudflare and Coinbase co-founded the x402 Foundation to push adoption across the open web.

World, meanwhile, now covers nearly **18 million verified users** across 160+ countries. For developers building agentic products, that installed base makes World ID a serious identity primitive, not just a biometric curiosity.

## The Bigger Picture

McKinsey projects agentic commerce could reach **$3–5 trillion globally by 2030**. Coinbase CEO Brian Armstrong has said he expects AI agents to outnumber human transactors "very soon." Binance founder Changpeng Zhao went further, predicting agents will make one million times more payments than people, and that they will use crypto to do it.

Whether those figures prove accurate, the infrastructure bet is clear: the companies building the payment rails and identity layers for AI agents are positioning themselves at the centre of the next wave of internet commerce. World and Coinbase just laid a significant stretch of track.

*This article is for informational purposes only and does not constitute financial advice.*
