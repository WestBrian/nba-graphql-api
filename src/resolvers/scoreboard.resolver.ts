import { Arg, Query, Resolver } from 'type-graphql'
import { Scoreboard } from '../schema/scoreboard.schema'
import { scoreboardService } from '../services/scoreboard.service'

@Resolver()
export class ScoreboardResolver {
  @Query((returns) => [Scoreboard])
  async scoreboard(@Arg('date') date: string) {
    return await scoreboardService.getScoreboards(date)
  }
}
