'use client';

import { site } from '@/data/site';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const link = [
	{ href: '/booster', label: 'Booster' },
	{ href: '/collection', label: 'Collection' },
	{ href: '/market', label: 'Market' },
	{ href: '/groups', label: 'Groups' },
];

const profil = [{ href: '/profil', label: 'Profil' }];

export default function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		onScroll();
		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Bloquer le scroll lorsque le menu est ouvert
	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	// Fermer le menu au changement de page
	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<header
			className={cn(
				'fixed top-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-20',
				'transition-all duration-300',
				scrolled
					? 'bg-background/80 shadow-sm backdrop-blur-sm'
					: 'bg-transparent',
			)}
		>
			{/* Logo */}
			<Link href="/" className="flex items-center text-lg font-bold">
				<Image src={site.logo} alt={site.name} width={50} height={50} />
                <span>IDOLIX</span>
			</Link>

			{/* Navigation Desktop */}
			<nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
				{link.map((item) => (
					<Link
						key={item.label}
						href={item.href}
						className={cn(
							'transition-colors hover:text-primary',
							pathname === item.href ? 'text-primary' : 'text-muted-foreground',
						)}
					>
						{item.label}
					</Link>
				))}
			</nav>

			{/* Profil Desktop */}
			<nav className="hidden md:block">
				
				{profil.map((item) => (
					<Link
						key={item.label}
						href={item.href}
						className={cn(
							'text-sm font-medium transition-colors hover:text-primary',
							pathname === item.href ? 'text-primary' : 'text-muted-foreground',
						)}
					>
						{item.label}
					</Link>
				))}
			</nav>

			{/* Bouton Burger */}
			<button
				onClick={() => setOpen(!open)}
				aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
				aria-expanded={open}
				className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
			>
				<span
					className={cn(
						'h-0.5 w-6 rounded-full bg-foreground transition-all duration-300',
						open && 'translate-y-2 rotate-45',
					)}
				/>
				<span
					className={cn(
						'h-0.5 w-6 rounded-full bg-foreground transition-all duration-300',
						open && 'opacity-0',
					)}
				/>
				<span
					className={cn(
						'h-0.5 w-6 rounded-full bg-foreground transition-all duration-300',
						open && '-translate-y-2 -rotate-45',
					)}
				/>
			</button>

			{/* Overlay */}
			<div
				onClick={() => setOpen(false)}
				className={cn(
					'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden',
					open
						? 'pointer-events-auto opacity-100'
						: 'pointer-events-none opacity-0',
				)}
			/>

			{/* Menu Mobile */}
			<div
				className={cn(
					'fixed right-0 top-0 z-50 flex h-dvh w-[80%] max-w-sm flex-col',
					'border-l border-border bg-background p-8 pt-24 shadow-2xl',
					'transition-transform duration-300 ease-in-out md:hidden',
					open ? 'translate-x-0' : 'translate-x-full',
				)}
			>
				{/* Navigation */}
				<nav className="flex flex-col gap-2">
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
						Navigation
					</p>

					{link.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							onClick={() => setOpen(false)}
							className={cn(
								'rounded-lg px-4 py-3 text-base font-medium transition-colors',
								pathname === item.href
									? 'bg-primary/10 text-primary'
									: 'text-foreground hover:bg-muted',
							)}
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Profil */}
				<nav className="flex flex-col gap-2">
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
						Compte
					</p>

					{profil.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							onClick={() => setOpen(false)}
							className={cn(
								'rounded-lg px-4 py-3 text-base font-medium transition-colors',
								pathname === item.href
									? 'bg-primary/10 text-primary'
									: 'text-foreground hover:bg-muted',
							)}
						>
							{item.label}
						</Link>
					))}
				</nav>

				{/* Footer */}
				<div className="mt-auto border-t border-border pt-6">
					<p className="text-xs text-muted-foreground">{site.name}</p>
				</div>
			</div>
		</header>
	);
}
