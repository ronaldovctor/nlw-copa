import Fastify from 'fastify'
import cors from '@fastify/cors'
import { poolRoutes } from './routes/pool'
import { guessRoutes } from './routes/guess'
import { userRoutes } from './routes/user'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'
import { gameRoutes } from './routes/game'

async function bootstrap() {
	const fastify = Fastify({
		logger: true,
	})

	await fastify.register(cors, {
		origin: true, // Allow access from any app
	})

	await fastify.register(jwt, {
		secret: process.env.JWT_SECRET as string,
	})

	await fastify.register(authRoutes)
	await fastify.register(poolRoutes)
	await fastify.register(guessRoutes)
	await fastify.register(gameRoutes)
	await fastify.register(userRoutes)

	await fastify.listen({ port: 5000, host: '0.0.0.0' })
}
bootstrap()
