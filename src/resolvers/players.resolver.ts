import {
  Args,
  ArgsType,
  Field,
  FieldResolver,
  Query,
  Resolver,
  Root
} from 'type-graphql'
import { playersService } from '../services/players.service'
import { playerProfileService } from '../services/playerProfile.service'
import { Player } from '../schema/players.schema'
import { PlayerProfile } from '../schema/playerProfile.schema'

@ArgsType()
class PlayersArgs {
  @Field({ nullable: true })
  personId?: string

  @Field({ nullable: true })
  name?: string
}

@Resolver((of) => Player)
export class PlayersResolver {
  @Query((returns) => [Player])
  async players(@Args() args: PlayersArgs) {
    return await playersService.getAllPlayers(args)
  }

  @FieldResolver((returns) => PlayerProfile)
  async profile(@Root() player: Player) {
    return await playerProfileService.getPlayerProfile(player.personId)
  }
}
