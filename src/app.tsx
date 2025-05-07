import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Router
			root={props => (
				<>
					<div class="min-h-screen flex flex-col bg-gray-900 text-gray-100">
						<Nav />
						<div class="grow">
							<Suspense>{props.children}</Suspense>
						</div>
						<Footer />
					</div>
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
