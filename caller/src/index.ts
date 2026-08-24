export default {
	async fetch(_request: Request, env: CallerEnv): Promise<Response> {
		const greeting = await env.NAMED_ENTRYPOINT.greet("local dev");

		return Response.json({ greeting });
	},
};
