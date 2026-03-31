declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"ai-agents-crypto-wallets-world-coinbase-x402.md": {
	id: "ai-agents-crypto-wallets-world-coinbase-x402.md";
  slug: "ai-agents-crypto-wallets-world-coinbase-x402";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"base-l2-coinbase-deep-dive.md": {
	id: "base-l2-coinbase-deep-dive.md";
  slug: "base-l2-coinbase-deep-dive";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"berachain-proof-of-liquidity-deep-dive.md": {
	id: "berachain-proof-of-liquidity-deep-dive.md";
  slug: "berachain-proof-of-liquidity-deep-dive";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"bitcoin-20-million-mined-milestone.md": {
	id: "bitcoin-20-million-mined-milestone.md";
  slug: "bitcoin-20-million-mined-milestone";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"bitcoin-dominance-altcoin-season-2026.md": {
	id: "bitcoin-dominance-altcoin-season-2026.md";
  slug: "bitcoin-dominance-altcoin-season-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"bitcoin-etf-flows-institutional-structure-2026.md": {
	id: "bitcoin-etf-flows-institutional-structure-2026.md";
  slug: "bitcoin-etf-flows-institutional-structure-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ethereum-pectra-upgrade-analysis-2026.md": {
	id: "ethereum-pectra-upgrade-analysis-2026.md";
  slug: "ethereum-pectra-upgrade-analysis-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ethereum-roadmap-2026.md": {
	id: "ethereum-roadmap-2026.md";
  slug: "ethereum-roadmap-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"genius-act-occ-stablecoin-rules-march-2026.md": {
	id: "genius-act-occ-stablecoin-rules-march-2026.md";
  slug: "genius-act-occ-stablecoin-rules-march-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hyperliquid-deep-dive-2026.md": {
	id: "hyperliquid-deep-dive-2026.md";
  slug: "hyperliquid-deep-dive-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"occ-genius-act-stablecoin-rules-2026.md": {
	id: "occ-genius-act-stablecoin-rules-2026.md";
  slug: "occ-genius-act-stablecoin-rules-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"sec-cftc-crypto-classification-march-2026.md": {
	id: "sec-cftc-crypto-classification-march-2026.md";
  slug: "sec-cftc-crypto-classification-march-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"solana-spot-etf-filing-march-2026.md": {
	id: "solana-spot-etf-filing-march-2026.md";
  slug: "solana-spot-etf-filing-march-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"stablecoin-market-competition-2026.md": {
	id: "stablecoin-market-competition-2026.md";
  slug: "stablecoin-market-competition-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"strategy-bitcoin-treasury-761k-btc.md": {
	id: "strategy-bitcoin-treasury-761k-btc.md";
  slug: "strategy-bitcoin-treasury-761k-btc";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"tokenized-treasuries-rwa-analysis-2026.md": {
	id: "tokenized-treasuries-rwa-analysis-2026.md";
  slug: "tokenized-treasuries-rwa-analysis-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ton-telegram-network-analysis-2026.md": {
	id: "ton-telegram-network-analysis-2026.md";
  slug: "ton-telegram-network-analysis-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"week-in-crypto-march-17-21-2026.md": {
	id: "week-in-crypto-march-17-21-2026.md";
  slug: "week-in-crypto-march-17-21-2026";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-a-blockchain.md": {
	id: "what-is-a-blockchain.md";
  slug: "what-is-a-blockchain";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-a-crypto-oracle.md": {
	id: "what-is-a-crypto-oracle.md";
  slug: "what-is-a-crypto-oracle";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-a-crypto-wallet.md": {
	id: "what-is-a-crypto-wallet.md";
  slug: "what-is-a-crypto-wallet";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-a-layer-2.md": {
	id: "what-is-a-layer-2.md";
  slug: "what-is-a-layer-2";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-a-stablecoin.md": {
	id: "what-is-a-stablecoin.md";
  slug: "what-is-a-stablecoin";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-a-zero-knowledge-proof.md": {
	id: "what-is-a-zero-knowledge-proof.md";
  slug: "what-is-a-zero-knowledge-proof";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-account-abstraction.md": {
	id: "what-is-account-abstraction.md";
  slug: "what-is-account-abstraction";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-defi.md": {
	id: "what-is-defi.md";
  slug: "what-is-defi";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-mev.md": {
	id: "what-is-mev.md";
  slug: "what-is-mev";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"what-is-restaking-eigenlayer.md": {
	id: "what-is-restaking-eigenlayer.md";
  slug: "what-is-restaking-eigenlayer";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"why-bitcoin-hit-100k.md": {
	id: "why-bitcoin-hit-100k.md";
  slug: "why-bitcoin-hit-100k";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
