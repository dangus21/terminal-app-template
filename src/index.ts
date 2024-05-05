import { prompt } from "prompts";

type ExampleResponse = "npm" | "yarn" | "pnpm";

(async () => {
	const { packageManager }: { packageManager: ExampleResponse } = await prompt({
		name: "Select an option",
		message: "What package manager that you have do you prefer?",
		type: "select",
		choices: [
			{
				title: "Npm",
				value: "npm",
			},
			{
				title: "Yarn",
				value: "yarn",
			},
			{
				title: "Pnpm",
				value: "pnpm",
			},
		],
		validate: (option) => (!option ? "Select an option" : true),
	})
})()
