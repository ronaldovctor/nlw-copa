import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient({
	log: ['query'],
})

async function bootstrap() {
	const fastify = Fastify({
		logger: true,
	})

	await fastify.register(cors, {
		origin: true, // Allow access from any app
	})

	fastify.post('/pools', async (request, reply) => {
		const createPoolBody = z.object({
			title: z.string(),
		})
		const { title } = createPoolBody.parse(request.body)

		await prisma.pool.create({
			data: {
				title,
				code: '12$#@1',
			},
		})

		return reply.status(201).send({ title })
	})

	await fastify.listen({ port: 5000, host: '0.0.0.0' })
}
bootstrap()
