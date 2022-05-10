import { Arg, Query, Resolver } from 'type-graphql'
import { Boxscore } from '../schema/boxscore.schema'
import { boxscoreService } from '../services/boxscore.service'

@Resolver()
export class BoxscoreResolver {
  @Query((returns) => Boxscore)
  async boxscore(@Arg('date') date: string, @Arg('gameId') gameId: string) {
    return await boxscoreService.getBoxscore(date, gameId)
  }
}
