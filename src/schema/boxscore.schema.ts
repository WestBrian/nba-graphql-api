import { Field, Int, ObjectType } from 'type-graphql'
import {
  Arena,
  Nugget,
  Tickets,
  GameDuration,
  Playoffs,
  Watch,
  Period,
  TeamInfo
} from './scoreboard.schema'

@ObjectType()
class SortKey {
  @Field((type) => Int)
  name!: number

  @Field((type) => Int)
  pos!: number

  @Field((type) => Int)
  points!: number

  @Field((type) => Int)
  min!: number

  @Field((type) => Int)
  fgm!: number

  @Field((type) => Int)
  fga!: number

  @Field((type) => Int)
  fgp!: number

  @Field((type) => Int)
  ftm!: number

  @Field((type) => Int)
  fta!: number

  @Field((type) => Int)
  ftp!: number

  @Field((type) => Int)
  tpm!: number

  @Field((type) => Int)
  tpa!: number

  @Field((type) => Int)
  tpp!: number

  @Field((type) => Int)
  offReb!: number

  @Field((type) => Int)
  defReb!: number

  @Field((type) => Int)
  totReb!: number

  @Field((type) => Int)
  assists!: number

  @Field((type) => Int)
  pFouls!: number

  @Field((type) => Int)
  steals!: number

  @Field((type) => Int)
  turnovers!: number

  @Field((type) => Int)
  blocks!: number

  @Field((type) => Int)
  plusMinus!: number
}

@ObjectType()
class ActivePlayer {
  @Field()
  personId!: string

  @Field()
  firstName!: string

  @Field()
  lastName!: string

  @Field()
  jersey!: string

  @Field()
  teamId!: string

  @Field()
  isOnCourt!: boolean

  @Field()
  points!: string

  @Field()
  pos!: string

  @Field()
  position_full!: string

  @Field()
  player_code!: string

  @Field()
  min!: string

  @Field()
  fgm!: string

  @Field()
  fga!: string

  @Field()
  fgp!: string

  @Field()
  ftm!: string

  @Field()
  fta!: string

  @Field()
  ftp!: string

  @Field()
  tpm!: string

  @Field()
  tpa!: string

  @Field()
  tpp!: string

  @Field()
  offReb!: string

  @Field()
  defReb!: string

  @Field()
  totReb!: string

  @Field()
  assists!: string

  @Field()
  pFouls!: string

  @Field()
  steals!: string

  @Field()
  turnovers!: string

  @Field()
  blocks!: string

  @Field()
  plusMinus!: string

  @Field()
  dnp!: string

  @Field()
  sortKey!: SortKey
}

@ObjectType()
class TeamBoxscorePlayerSnippet {
  @Field()
  personId!: string

  @Field()
  firstName!: string

  @Field()
  lastName!: string
}

@ObjectType()
class TeamBoxscoreLeaderSnippet {
  @Field()
  value!: string

  @Field((type) => [TeamBoxscorePlayerSnippet])
  players!: TeamBoxscorePlayerSnippet[]
}

@ObjectType()
class TeamBoxscoreLeaders {
  @Field()
  points!: TeamBoxscoreLeaderSnippet

  @Field()
  rebounds!: TeamBoxscoreLeaderSnippet

  @Field()
  assists!: TeamBoxscoreLeaderSnippet
}

@ObjectType()
class TeamBoxscoreTotals {
  @Field()
  points!: string

  @Field()
  fgm!: string

  @Field()
  fga!: string

  @Field()
  fgp!: string

  @Field()
  ftm!: string

  @Field()
  fta!: string

  @Field()
  ftp!: string

  @Field()
  tpm!: string

  @Field()
  tpa!: string

  @Field()
  tpp!: string

  @Field()
  offReb!: string

  @Field()
  defReb!: string

  @Field()
  totReb!: string

  @Field()
  assists!: string

  @Field()
  pFouls!: string

  @Field()
  steals!: string

  @Field()
  turnovers!: string

  @Field()
  blocks!: string

  @Field()
  plusMinus!: string

  @Field()
  min!: string

  @Field()
  short_timeout_remaining!: string

  @Field()
  full_timeout_remaining!: string

  @Field()
  team_fouls!: string
}

@ObjectType()
class TeamBoxscoreStats {
  @Field()
  fastBreakPoints!: string

  @Field()
  pointsInPaint!: string

  @Field()
  biggestLead!: string

  @Field()
  secondChancePoints!: string

  @Field()
  pointsOffTurnovers!: string

  @Field()
  longestRun!: string

  @Field()
  totals!: TeamBoxscoreTotals

  @Field()
  leaders!: TeamBoxscoreLeaders
}

@ObjectType()
class BoxscoreStats {
  @Field()
  timesTied!: string

  @Field()
  leadChanges!: string

  @Field()
  vTeam!: TeamBoxscoreStats

  @Field()
  hTeam!: TeamBoxscoreStats

  @Field((type) => [ActivePlayer])
  activePlayers!: ActivePlayer[]
}

@ObjectType()
class PreviousMatchup {
  @Field()
  gameId!: string

  @Field()
  gameDate!: string
}

@ObjectType()
class Formatted {
  @Field()
  firstNameLastName!: string
}

@ObjectType()
class Officials {
  @Field((type) => [Formatted])
  formatted!: Formatted[]
}

@ObjectType()
class BasicGameData {
  @Field()
  seasonStageId!: number

  @Field()
  seasonYear!: string

  @Field()
  leagueName!: string

  @Field()
  gameId!: string

  @Field()
  arena!: Arena

  @Field()
  isGameActivated!: boolean

  @Field()
  statusNum!: number

  @Field()
  extendedStatusNum!: number

  @Field()
  startTimeEastern!: string

  @Field()
  startTimeUTC!: string

  @Field()
  endTimeUTC!: string

  @Field()
  startDateEastern!: string

  @Field()
  homeStartDate!: string

  @Field()
  homeStartTime!: string

  @Field()
  visitorStartDate!: string

  @Field()
  visitorStartTime!: string

  @Field()
  gameUrlCode!: string

  @Field()
  clock!: string

  @Field()
  isBuzzerBeater!: boolean

  @Field()
  isPreviewArticleAvail!: boolean

  @Field()
  isRecapArticleAvail!: boolean

  @Field()
  nugget!: Nugget

  @Field()
  attendance!: string

  @Field()
  tickets!: Tickets

  @Field()
  hasGameBookPdf!: boolean

  @Field()
  isStartTimeTBD!: boolean

  @Field()
  isNeutralVenue!: boolean

  @Field()
  gameDuration!: GameDuration

  @Field((type) => [String])
  tags!: string[]

  @Field()
  playoffs!: Playoffs

  @Field()
  period!: Period

  @Field()
  vTeam!: TeamInfo

  @Field()
  hTeam!: TeamInfo

  @Field()
  watch!: Watch

  @Field()
  officials!: Officials
}

@ObjectType()
export class Boxscore {
  @Field()
  basicGameData!: BasicGameData

  @Field()
  previousMatchup!: PreviousMatchup

  @Field()
  stats!: BoxscoreStats
}
