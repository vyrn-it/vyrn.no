
export default function Home() {
	return (
		<>
			<section class="container mx-auto px-4 py-20 md:py-32">
				<div class="flex flex-col md:flex-row items-center justify-between">
					<div class="md:w-1/2 mb-10 md:mb-0">
						<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
							Vi realiserer <span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Drømmer</span>
						</h1>
						<p class="text-gray-400 text-lg mb-8 max-w-lg">
							Vi er en gjeng engasjerte, profesjonelle og kompetente spesialister som designer, spesifiserer og utvikler moderne løsninger.
						</p>
						<div class="flex flex-col sm:flex-row gap-4">
							<button class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-md hover:opacity-90 transition duration-200 flex items-center justify-center">
								Geitene
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><path d="m9 18 6-6-6-6" /></svg>
							</button>
						</div>
					</div>

					<div class="md:w-1/2 flex justify-center">
						<div class="w-full max-w-md h-64 md:h-80 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30 relative overflow-hidden">
							<img src="/images/CTA.jpg" alt="VYRN Logo" class="bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center" />
						</div>
					</div>
				</div>
			</section>

			<section class="bg-gray-800/50 py-20">
				<div class="container mx-auto px-4">
					<h2 class="text-3xl font-bold text-center mb-12">
						<span class="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Prosjekter</span>
					</h2>

					<div class="grid md:grid-cols-3 gap-8">
						<div class="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition duration-300">
							<div class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
								<div class="w-6 h-6 text-emerald-400">✨</div>
							</div>
							<h3 class="text-xl font-semibold mb-3">Prosjekt 1</h3>
							<p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
						</div>

						<div class="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition duration-300">
							<div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
								<div class="w-6 h-6 text-cyan-400">⚡</div>
							</div>
							<h3 class="text-xl font-semibold mb-3">Prosjekt 2</h3>
							<p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
						</div>

						<div class="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition duration-300">
							<div class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
								<div class="w-6 h-6 text-emerald-400">🛡️</div>
							</div>
							<h3 class="text-xl font-semibold mb-3">Prosjekt 3</h3>
							<p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
