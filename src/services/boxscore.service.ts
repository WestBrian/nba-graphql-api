import { fetch } from '../utils/fetch'
import { BoxscoreResponse } from './boxscore.type'

class BoxscoreService {
  /**
   *
   * @param date (format YYYY-MM-DD)
   */
  private path = (date: string, gameId: string) =>
    `/${date}/${gameId}_boxscore.json`

  async getBoxscore(date: string, gameId: string) {
    const data = await fetch<BoxscoreResponse>(this.path(date, gameId))
    return {
      basicGameData: data.basicGameData,
      previousMatchup: data.previousMatchup,
      stats: data.stats
    }
  }
}

export const boxscoreService = new BoxscoreService()
