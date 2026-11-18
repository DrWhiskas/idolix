'use client';
import { site } from '@/data/site';
import Link from 'next/link';
import Image from 'next/image';

const link = [
	{ href: '/booster', label: 'Booster' },
	{ href: '/collection', label: 'Collection' },
	{ href: '/market', label: 'Market' },
	{ href: '/groups', label: 'Groups' },
];

export default function Footer() {
	return (
		<footer className="z-20 flex w-full items-center justify-between gap-12 px-20 py-6 text-sm">
			{/* Content */}
			<div className="flex flex-1 flex-col items-start gap-6 ">
				<p className="text-muted-foreground flex items-center">
					<Image src={site.logo} alt={site.name} width={50} height={50} />
					{site.name} © {new Date().getFullYear()}. All rights reserved.
				</p>
			</div>
			<nav className="flex flex-1 items-center justify-end gap-6 ">
				{link.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						className="text-muted-foreground hover:text-primary"
					>
						{item.label}
					</Link>
				))}
			</nav>
		</footer>
	);
}
