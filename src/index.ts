import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-fastify'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { ApolloServerPlugin } from 'apollo-server-plugin-base'
import fastify, { FastifyInstance } from 'fastify'
import { buildSchema } from 'type-graphql'
import { PlayersResolver } from './resolvers/players.resolver'
import { PlayerProfileResolver } from './resolvers/playerProfile.resolver'
import { ScoreboardResolver } from './resolvers/scoreboard.resolver'
import { BoxscoreResolver } from './resolvers/boxscore.resolver'

function fastifyAppClosePlugin(app: FastifyInstance): ApolloServerPlugin {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close()
        }
      }
    }
  }
}

async function startApolloServer() {
  const app = fastify()
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        PlayersResolver,
        PlayerProfileResolver,
        ScoreboardResolver,
        BoxscoreResolver
      ]
    }),
    plugins: [
      fastifyAppClosePlugin(app),
      ApolloServerPluginDrainHttpServer({ httpServer: app.server })
    ]
  })
  const port = process.env.PORT || 4000

  await server.start()
  app.register(server.createHandler())
  await app.listen(port)
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
}

startApolloServer()
