'use client'


interface IdolixBackgroundProps {
	children?: React.ReactNode;
	className?: string;
}

export const IdolixBackground: React.FC<IdolixBackgroundProps> = ({
	children,
	className = '',
}) => {
	return (
		<div
			className={`z-10 absolute min-h-screen w-full overflow-x-hidden bg-[#161233] text-white ${className}`}
			style={{
				backgroundImage: `
          radial-gradient(circle at 72% 42%, rgba(168, 120, 255, 0.34) 0%, rgba(110, 74, 200, 0.14) 38%, transparent 65%),
          radial-gradient(circle at 18% 65%, rgba(114, 82, 214, 0.25) 0%, transparent 55%),
          radial-gradient(circle at 92% 92%, rgba(188, 142, 255, 0.36) 0%, transparent 50%),
          linear-gradient(135deg, #171336 0%, #241b4e 48%, #35266e 100%)
        `,
				backgroundAttachment: 'fixed',
			}}
		>
			{/* Calque d'effets lumineux */}
			<div
				aria-hidden="true"
				className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
			>
				{/* Rayon lumineux diagonal 1 */}
				<div
					className="absolute -top-[15%] right-[18%] h-[120vh] w-[340px] origin-top rotate-[32deg] blur-[42px]"
					style={{
						background:
							'linear-gradient(180deg, rgba(210, 178, 255, 0.18) 0%, rgba(160, 115, 255, 0) 100%)',
					}}
				/>

				{/* Rayon lumineux diagonal 2 */}
				<div
					className="absolute -top-[10%] -right-[2%] h-[110vh] w-[240px] origin-top rotate-[28deg] opacity-65 blur-[42px]"
					style={{
						background:
							'linear-gradient(180deg, rgba(210, 178, 255, 0.18) 0%, rgba(160, 115, 255, 0) 100%)',
					}}
				/>

				{/* Étoile 4 branches supérieure */}
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					className="absolute top-[19%] left-[44%] h-7 w-7 animate-pulse text-[#ebdaff]/45 drop-shadow-[0_0_18px_rgba(196,152,255,0.8)]"
					style={{ animationDuration: '4s' }}
				>
					<path d="M12 1L14.8 9.2L23 12L14.8 14.8L12 23L9.2 14.8L1 12L9.2 9.2L12 1Z" />
				</svg>

				{/* Étoile 4 branches inférieure */}
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					className="absolute top-[66%] left-[48%] h-4 w-4 animate-pulse text-[#ebdaff]/45 drop-shadow-[0_0_18px_rgba(196,152,255,0.8)]"
					style={{ animationDuration: '4s', animationDelay: '1.8s' }}
				>
					<path d="M12 1L14.8 9.2L23 12L14.8 14.8L12 23L9.2 14.8L1 12L9.2 9.2L12 1Z" />
				</svg>
			</div>

			{/* Contenu de ta page au-dessus du fond */}
			<div className="relative z-10">{children}</div>
		</div>
	);
};

export default IdolixBackground;
