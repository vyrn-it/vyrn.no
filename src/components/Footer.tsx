
export default function Footer() {
	return (<footer class="bg-gray-950 py-12 border-t border-gray-800">
		<div class="container mx-auto px-4">
			<div class="flex flex-col md:flex-row justify-between items-center">
				<div class="flex items-center space-x-2 mb-6 md:mb-0">
					<div class="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
						<span class="text-white font-bold">V</span>
					</div>
					<span class="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">VYRN</span>
				</div>

				<div class="flex flex-wrap justify-center gap-x-8 gap-y-4">
					<a href="#" class="text-gray-400 hover:text-emerald-400 transition duration-200">Home</a>
					<a href="#" class="text-gray-400 hover:text-emerald-400 transition duration-200">About</a>
					<a href="#" class="text-gray-400 hover:text-emerald-400 transition duration-200">Services</a>
					<a href="#" class="text-gray-400 hover:text-emerald-400 transition duration-200">Contact</a>
					<a href="#" class="text-gray-400 hover:text-emerald-400 transition duration-200">Privacy</a>
					<a href="#" class="text-gray-400 hover:text-emerald-400 transition duration-200">Terms</a>
				</div>
			</div>

			<div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
				© {new Date().getFullYear()} VYRN. All rights reserved.
			</div>
		</div>
	</footer>
	)
}
