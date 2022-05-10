import { fetch } from '../utils/fetch'
import { ScoreboardResponse } from './scoreboard.type'

class ScoreboardService {
  /**
   *
   * @param date (format YYYY-MM-DD)
   */
  private path = (date: string) => `/${date}/scoreboard.json`

  async getScoreboards(date: string) {
    const data = await fetch<ScoreboardResponse>(this.path(date))
    return data.games
  }
}

export const scoreboardService = new ScoreboardService()
