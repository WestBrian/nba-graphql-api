import { fetch } from '../utils/fetch'
import { PlayersResponse } from './players.type'

interface PlayersFilterOptions {
  personId?: string
  name?: string
}

class PlayersService {
  private path = '/2021/players.json'

  async getAllPlayers(options: PlayersFilterOptions) {
    const { personId, name } = options
    const data = await fetch<PlayersResponse>(this.path)
    return data.league.standard
      .filter((player) => (personId ? player.personId === personId : player))
      .filter((player) =>
        name
          ? player.firstName.includes(name) || player.lastName.includes(name)
          : player
      )
  }

  async getPlayer(personId: string) {
    const data = await fetch<PlayersResponse>(this.path)
    return data.league.standard.find((player) => player.personId === personId)
  }
}

export const playersService = new PlayersService()
