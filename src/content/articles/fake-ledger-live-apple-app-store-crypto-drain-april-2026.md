---
title: "A Fake Ledger App on the Apple App Store Just Drained $9.5 Million in Crypto"
description: "A malicious Ledger Live clone passed Apple's App Store review and stole millions from users by requesting their seed phrases on first launch."
category: "Market Brief"
publishedDate: "2026-04-14"
status: "live"
author: "Chain Brief"
---

A fake version of Ledger Live spent nearly a week on Apple's Mac App Store before being removed, draining roughly $9.5 million in crypto from dozens of victims. The most high-profile casualty was Philadelphia musician G. Love, who lost 5.92 BTC -- approximately $424,000 -- representing close to a decade of savings.

## How It Worked

The scam followed a deceptively simple playbook. A user searches "Ledger Live" in the Mac App Store. They find an app with the correct icons, polished interface, and convincing Ledger branding. The app is listed under a third-party developer name -- not Ledger SAS -- but nothing about that is flagged during the download process.

On first launch, the app asks the user to enter their 24-word seed phrase to "restore their device."

That is the moment the theft happens. A hardware wallet's entire security model rests on the seed phrase never leaving the device. Once those 24 words are typed into a connected computer and transmitted to an attacker's server, the hardware wallet is irrelevant. The attacker can recreate the wallet on any machine and move every asset out within minutes.

G. Love told reporters he did not suspect anything was wrong. The interface looked legitimate. The request seemed routine. He entered the phrase. The bitcoin was gone within hours.

## Apple's Review Process Under Scrutiny

The core issue is not that crypto users fell for a phishing attempt. It is that the fraudulent app cleared Apple's App Store review process in the first place.

Apple markets the App Store as a trusted, curated environment. The review process is positioned as a layer of protection that distinguishes iOS and macOS ecosystems from open platforms. A crypto wallet impersonation app that explicitly requests seed phrases -- the most sensitive possible data in self-custody -- should not survive review.

Apple removed the app after reports surfaced publicly, but offered no explanation for how it passed review or how long it had been available. Blockchain investigator ZachXBT criticized Apple directly on social media, arguing that the platform's review process failed its users.

This is not the first time this has happened. In 2023, a nearly identical fake Ledger app appeared on Microsoft's app store and drained roughly $600,000 from multiple victims before Microsoft acknowledged the software had bypassed its internal review. The pattern is repeating, and the amounts lost are growing.

## What Users Should Know

A few principles apply directly to this incident and to crypto security more broadly:

**Never enter your seed phrase into any app, for any reason.** Ledger Live -- the real one -- does not ask for your seed phrase. No legitimate hardware wallet software does. The seed phrase exists solely on the physical device. Any software requesting it is, by definition, a scam.

**Download wallet software only from the official website.** The real Ledger Live is available at ledger.com. App stores, even Apple's, are not reliable distribution channels for hardware wallet software.

**Verify the developer name before installing.** The real Ledger Live is published by Ledger SAS. If the developer name is anything else, do not install it.

**Hardware wallets protect against remote compromise, not social engineering.** Ledger and similar devices are excellent at preventing attackers from accessing funds remotely. They provide no protection if the user is tricked into handing over the keys voluntarily.

## A Systemic Problem

Apple and Google have significant leverage here. Both platforms have policies against apps that collect sensitive financial credentials. Applying those policies consistently -- particularly for apps in categories like crypto wallets and banking -- would prevent most of these incidents before they happen.

Until platform enforcement improves, the responsibility falls on users. The rule is simple and worth repeating: your seed phrase stays on your hardware wallet. It never goes anywhere else.
