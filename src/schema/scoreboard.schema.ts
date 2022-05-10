import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
class DeepLink {
  @Field()
  broadcaster!: string

  @Field()
  regionalMarketCodes!: string

  @Field()
  iosApp!: string

  @Field()
  androidApp!: string

  @Field()
  desktopWeb!: string

  @Field()
  mobileWeb!: string
}

@ObjectType()
class Stream {
  @Field()
  streamType!: string

  @Field()
  isOnAir!: boolean

  @Field()
  doesArchiveExist!: boolean

  @Field()
  isArchiveAvailToWatch!: boolean

  @Field()
  streamId!: string

  @Field()
  duration!: number
}

@ObjectType()
class Video {
  @Field()
  regionalBlackoutCodes!: string

  @Field()
  canPurchase!: boolean

  @Field()
  isLeaguePass!: boolean

  @Field()
  isNationalBlackout!: boolean

  @Field()
  isTNTOT!: boolean

  @Field()
  isVR!: boolean

  @Field()
  tntotIsOnAir!: boolean

  @Field()
  isNextVR!: boolean

  @Field()
  isNBAOnTNTVR!: boolean

  @Field()
  isMagicLeap!: boolean

  @Field()
  isOculusVenues!: boolean

  @Field((type) => [Stream])
  streams!: Stream[]

  @Field((type) => [DeepLink])
  deepLink!: DeepLink[]
}

@ObjectType()
class BroadcastSnippet {
  @Field()
  shortName!: string

  @Field()
  longName!: string
}

@ObjectType()
class Broadcasters {
  @Field((type) => [BroadcastSnippet])
  national!: BroadcastSnippet[]

  @Field((type) => [BroadcastSnippet])
  canadian!: BroadcastSnippet[]

  @Field((type) => [BroadcastSnippet])
  vTeam!: BroadcastSnippet[]

  @Field((type) => [BroadcastSnippet])
  hTeam!: BroadcastSnippet[]

  @Field((type) => [BroadcastSnippet])
  spanish_hTeam!: BroadcastSnippet[]

  @Field((type) => [BroadcastSnippet])
  spanish_vTeam!: BroadcastSnippet[]

  @Field((type) => [BroadcastSnippet])
  spanish_national!: BroadcastSnippet[]
}

@ObjectType()
class Broadcast {
  @Field()
  broadcasters!: Broadcasters

  @Field()
  video!: Video
}

@ObjectType()
export class Watch {
  @Field()
  broadcast!: Broadcast
}

@ObjectType()
export class Tickets {
  @Field()
  mobileApp!: string

  @Field()
  desktopWeb!: string

  @Field()
  mobileWeb!: string

  @Field()
  leagGameInfo!: string

  @Field()
  leagTix!: string
}

@ObjectType()
class Linescore {
  @Field()
  score!: string
}

@ObjectType()
export class TeamInfo {
  @Field()
  teamId!: string

  @Field()
  triCode!: string

  @Field()
  win!: string

  @Field()
  loss!: string

  @Field()
  seriesWin!: string

  @Field()
  seriesLoss!: string

  @Field()
  score!: string

  @Field((type) => [Linescore])
  linescore!: Linescore[]
}

@ObjectType()
export class Period {
  @Field()
  current!: number

  @Field()
  type!: number

  @Field()
  maxRegular!: number

  @Field()
  isHalftime!: boolean

  @Field()
  isEndOfPeriod!: boolean
}

@ObjectType()
class PlayoffTeamSnippet {
  @Field()
  seedNum!: string

  @Field()
  seriesWin!: string

  @Field()
  isSeriesWinner!: boolean
}

@ObjectType()
export class Playoffs {
  @Field()
  roundNum!: string

  @Field()
  confName!: string

  @Field()
  seriesId!: string

  @Field()
  seriesSummaryText!: string

  @Field()
  isSeriesCompleted!: boolean

  @Field()
  gameNumInSeries!: string

  @Field()
  isIfNecessary!: boolean

  @Field()
  vTeam!: PlayoffTeamSnippet

  @Field()
  hTeam!: PlayoffTeamSnippet
}

@ObjectType()
export class GameDuration {
  @Field()
  hours!: string

  @Field()
  minutes!: string
}

@ObjectType()
export class Nugget {
  @Field()
  text!: string
}

@ObjectType()
export class Arena {
  @Field()
  name!: string

  @Field()
  isDomestic!: boolean

  @Field()
  city!: string

  @Field()
  stateAbbr!: string

  @Field()
  country!: string
}

@ObjectType()
export class Scoreboard {
  @Field((type) => Int)
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
}
