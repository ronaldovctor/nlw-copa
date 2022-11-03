import Fastify from 'fastify'
import cors from '@fastify/cors'
import { poolRoutes } from './routes/pool'
import { guessRoutes } from './routes/guess'
import { userRoutes } from './routes/user'

async function bootstrap() {
	const fastify = Fastify({
		logger: true,
	})

	await fastify.register(cors, {
		origin: true, // Allow access from any app
	})

	fastify.register(poolRoutes)
	fastify.register(guessRoutes)
	fastify.register(userRoutes)

	await fastify.listen({ port: 5000, host: '0.0.0.0' })
}
bootstrap()
