import { site } from '@/data/site';

export default function Hero() {
	return (
		<section className="z-20 flex min-h-screen w-full items-center justify-between gap-12 px-20">
			{/* Content */}
			<div className="flex flex-1 flex-col items-start gap-6">
				<h1 className="text-4xl font-bold tracking-tight md:text-6xl">
					{site.tagline}
				</h1>

				<p className="max-w-lg text-muted-foreground">{site.description}</p>

				<div className="flex gap-4">
					<button className="rounded-lg bg-purple-500 px-6 py-3 font-bold text-white transition-colors hover:bg-purple-700">
						Open a booster →
					</button>

					<button className="rounded-lg border border-border px-6 py-3 font-bold transition-colors hover:bg-muted">
						Collection
					</button>
				</div>
			</div>

			{/* Cards */}
			<div className="flex flex-1 items-center justify-center gap-4">
				<div className="h-64 w-44 rounded-2xl border border-border bg-muted" />
				<div className="mt-12 h-64 w-44 rounded-2xl border border-border bg-muted" />
			</div>
		</section>
	);
}
