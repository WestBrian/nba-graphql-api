import { fetch } from '../utils/fetch'
import { PlayerProfileResponse } from './playerProfile.type'

class PlayerProfileService {
  private path = (personId: string) => `/2021/players/${personId}_profile.json`

  async getPlayerProfile(personId: string) {
    const data = await fetch<PlayerProfileResponse>(this.path(personId))
    return data.league.standard
  }
}

export const playerProfileService = new PlayerProfileService()
