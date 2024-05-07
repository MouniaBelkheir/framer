import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";
function App() {
	return (
		<div className="flex flex-col gap-10 overflow-x-hidden">
			<motion.section>
				<h1 className="text-rose-500">hello</h1>
				<Button>Button</Button>
			</motion.section>
		</div>
	);
}

export default App;
