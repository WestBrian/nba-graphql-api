export interface ScoreboardResponse {
  _internal: Internal
  numGames: number
  games: Game[]
}

export interface Internal {
  pubDateTime: string
  igorPath: string
  routeName: string
  routeValue: string
  xslt: string
  xsltForceRecompile: string
  xsltInCache: string
  xsltCompileTimeMillis: string
  xsltTransformTimeMillis: string
  consolidatedDomKey: string
  endToEndTimeMillis: string
}

export interface Game {
  seasonStageId: number
  seasonYear: string
  leagueName: string
  gameId: string
  arena: Arena
  isGameActivated: boolean
  statusNum: number
  extendedStatusNum: number
  startTimeEastern: string
  startTimeUTC: string
  endTimeUTC: string
  startDateEastern: string
  homeStartDate: string
  homeStartTime: string
  visitorStartDate: string
  visitorStartTime: string
  gameUrlCode: string
  clock: string
  isBuzzerBeater: boolean
  isPreviewArticleAvail: boolean
  isRecapArticleAvail: boolean
  nugget: Nugget
  attendance: string
  tickets: Tickets
  hasGameBookPdf: boolean
  isStartTimeTBD: boolean
  isNeutralVenue: boolean
  gameDuration: GameDuration
  tags: string[]
  playoffs: Playoffs
  period: Period
  vTeam: VTeam2
  hTeam: HTeam2
  watch: Watch
}

export interface Arena {
  name: string
  isDomestic: boolean
  city: string
  stateAbbr: string
  country: string
}

export interface Nugget {
  text: string
}

export interface Tickets {
  mobileApp: string
  desktopWeb: string
  mobileWeb: string
  leagGameInfo: string
  leagTix: string
}

export interface GameDuration {
  hours: string
  minutes: string
}

export interface Playoffs {
  roundNum: string
  confName: string
  seriesId: string
  seriesSummaryText: string
  isSeriesCompleted: boolean
  gameNumInSeries: string
  isIfNecessary: boolean
  vTeam: VTeam
  hTeam: HTeam
}

export interface VTeam {
  seedNum: string
  seriesWin: string
  isSeriesWinner: boolean
}

export interface HTeam {
  seedNum: string
  seriesWin: string
  isSeriesWinner: boolean
}

export interface Period {
  current: number
  type: number
  maxRegular: number
  isHalftime: boolean
  isEndOfPeriod: boolean
}

export interface VTeam2 {
  teamId: string
  triCode: string
  win: string
  loss: string
  seriesWin: string
  seriesLoss: string
  score: string
  linescore: Linescore[]
}

export interface Linescore {
  score: string
}

export interface HTeam2 {
  teamId: string
  triCode: string
  win: string
  loss: string
  seriesWin: string
  seriesLoss: string
  score: string
  linescore: Linescore2[]
}

export interface Linescore2 {
  score: string
}

export interface Watch {
  broadcast: Broadcast
}

export interface Broadcast {
  broadcasters: Broadcasters
  video: Video
  audio: Audio
}

export interface Broadcasters {
  national: National[]
  canadian: Canadian[]
  vTeam: any[]
  hTeam: any[]
  spanish_hTeam: any[]
  spanish_vTeam: any[]
  spanish_national: any[]
}

export interface National {
  shortName: string
  longName: string
}

export interface Canadian {
  shortName: string
  longName: string
}

export interface Video {
  regionalBlackoutCodes: string
  canPurchase: boolean
  isLeaguePass: boolean
  isNationalBlackout: boolean
  isTNTOT: boolean
  isVR: boolean
  tntotIsOnAir: boolean
  isNextVR: boolean
  isNBAOnTNTVR: boolean
  isMagicLeap: boolean
  isOculusVenues: boolean
  streams: Stream[]
  deepLink: DeepLink[]
}

export interface Stream {
  streamType: string
  isOnAir: boolean
  doesArchiveExist: boolean
  isArchiveAvailToWatch: boolean
  streamId: string
  duration: number
}

export interface DeepLink {
  broadcaster: string
  regionalMarketCodes: string
  iosApp: string
  androidApp: string
  desktopWeb: string
  mobileWeb: string
}

export interface Audio {
  national: National2
  vTeam: VTeam3
  hTeam: HTeam3
}

export interface National2 {
  streams: Stream2[]
  broadcasters: any[]
}

export interface Stream2 {
  language: string
  isOnAir: boolean
  streamId: string
}

export interface VTeam3 {
  streams: Stream3[]
  broadcasters: Broadcaster[]
}

export interface Stream3 {
  language: string
  isOnAir: boolean
  streamId: string
}

export interface Broadcaster {
  shortName: string
  longName: string
}

export interface HTeam3 {
  streams: Stream4[]
  broadcasters: Broadcaster2[]
}

export interface Stream4 {
  language: string
  isOnAir: boolean
  streamId: string
}

export interface Broadcaster2 {
  shortName: string
  longName: string
}
