import { Arg, FieldResolver, Query, Resolver } from 'type-graphql'
import { PlayerProfile } from '../schema/playerProfile.schema'
import { Player } from '../schema/players.schema'
import { playerProfileService } from '../services/playerProfile.service'
import { playersService } from '../services/players.service'

@Resolver((of) => PlayerProfile)
export class PlayerProfileResolver {
  @Query((returns) => PlayerProfile)
  async playerProfile(@Arg('personId') personId: string) {
    return await playerProfileService.getPlayerProfile(personId)
  }

  @FieldResolver((returns) => Player)
  async player(@Arg('personId') personId: string) {
    return await playersService.getPlayer(personId)
  }
}
