'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { IdolixBackground } from '@/components/Background';

export default function CollectionPage() {
	return (
		<div>
			<div className="flex min-h-screen flex-col items-center justify-between">
				<IdolixBackground />
				<Header />
                
				<Footer />
			</div>
		</div>
	);
}
