import { createSignal, Show } from 'solid-js';

export default function Nav() {
	const [isMenuOpen, setIsMenuOpen] = createSignal(false);

	return (
		<header class="border-b shrink-0 bg-gray-900 border-gray-800">
			<div class="container mx-auto px-4 py-4 flex justify-between items-center">
				<div class="flex items-center space-x-2">
					<div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
						<span class="text-white font-bold">V</span>
					</div>
					<span class="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">VYRN</span>
				</div>

				<nav class="hidden md:flex items-center space-x-8">
					<a href="/" class="text-gray-300 hover:text-emerald-400 transition duration-200">Blogg</a>
					<a href="/projects" class="text-gray-300 hover:text-emerald-400 transition duration-200">Prosjekter</a>
					<a href="/about" class="text-gray-300 hover:text-emerald-400 transition duration-200">Om oss</a>
					<button class="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-md hover:opacity-90 transition duration-200">
						Kontakt
					</button>
				</nav>

				<button
					class="md:hidden text-gray-300 hover:text-white"
					onClick={() => setIsMenuOpen(!isMenuOpen())}
				>
					{isMenuOpen() ?
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> :
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
					}
				</button>
			</div>

			<Show when={isMenuOpen()}>
				<nav class="md:hidden py-4 px-4 bg-gray-800 flex flex-col space-y-4">
					<a href="/" class="text-gray-300 hover:text-emerald-400 transition duration-200">Hjem</a>
					<a href="/projects" class="text-gray-300 hover:text-emerald-400 transition duration-200">Prosjekter</a>
					<a href="/about" class="text-gray-300 hover:text-emerald-400 transition duration-200">Om oss</a>
					<button class="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-md hover:opacity-90 transition duration-200 w-full">
						Kontakt
					</button>
				</nav>
			</Show>
		</header>
	);
};
