export interface BoxscoreResponse {
  _internal: Internal
  basicGameData: BasicGameData
  previousMatchup: PreviousMatchup
  stats: Stats
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

export interface BasicGameData {
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
  officials: Officials
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

export interface Officials {
  formatted: Formatted[]
}

export interface Formatted {
  firstNameLastName: string
}

export interface PreviousMatchup {
  gameId: string
  gameDate: string
}

export interface Stats {
  timesTied: string
  leadChanges: string
  vTeam: VTeam4
  hTeam: HTeam4
  activePlayers: ActivePlayer[]
}

export interface VTeam4 {
  fastBreakPoints: string
  pointsInPaint: string
  biggestLead: string
  secondChancePoints: string
  pointsOffTurnovers: string
  longestRun: string
  totals: Totals
  leaders: Leaders
}

export interface Totals {
  points: string
  fgm: string
  fga: string
  fgp: string
  ftm: string
  fta: string
  ftp: string
  tpm: string
  tpa: string
  tpp: string
  offReb: string
  defReb: string
  totReb: string
  assists: string
  pFouls: string
  steals: string
  turnovers: string
  blocks: string
  plusMinus: string
  min: string
  short_timeout_remaining: string
  full_timeout_remaining: string
  team_fouls: string
}

export interface Leaders {
  points: Points
  rebounds: Rebounds
  assists: Assists
}

export interface Points {
  value: string
  players: Player[]
}

export interface Player {
  personId: string
  firstName: string
  lastName: string
}

export interface Rebounds {
  value: string
  players: Player2[]
}

export interface Player2 {
  personId: string
  firstName: string
  lastName: string
}

export interface Assists {
  value: string
  players: Player3[]
}

export interface Player3 {
  personId: string
  firstName: string
  lastName: string
}

export interface HTeam4 {
  fastBreakPoints: string
  pointsInPaint: string
  biggestLead: string
  secondChancePoints: string
  pointsOffTurnovers: string
  longestRun: string
  totals: Totals2
  leaders: Leaders2
}

export interface Totals2 {
  points: string
  fgm: string
  fga: string
  fgp: string
  ftm: string
  fta: string
  ftp: string
  tpm: string
  tpa: string
  tpp: string
  offReb: string
  defReb: string
  totReb: string
  assists: string
  pFouls: string
  steals: string
  turnovers: string
  blocks: string
  plusMinus: string
  min: string
  short_timeout_remaining: string
  full_timeout_remaining: string
  team_fouls: string
}

export interface Leaders2 {
  points: Points2
  rebounds: Rebounds2
  assists: Assists2
}

export interface Points2 {
  value: string
  players: Player4[]
}

export interface Player4 {
  personId: string
  firstName: string
  lastName: string
}

export interface Rebounds2 {
  value: string
  players: Player5[]
}

export interface Player5 {
  personId: string
  firstName: string
  lastName: string
}

export interface Assists2 {
  value: string
  players: Player6[]
}

export interface Player6 {
  personId: string
  firstName: string
  lastName: string
}

export interface ActivePlayer {
  personId: string
  firstName: string
  lastName: string
  jersey: string
  teamId: string
  isOnCourt: boolean
  points: string
  pos: string
  position_full: string
  player_code: string
  min: string
  fgm: string
  fga: string
  fgp: string
  ftm: string
  fta: string
  ftp: string
  tpm: string
  tpa: string
  tpp: string
  offReb: string
  defReb: string
  totReb: string
  assists: string
  pFouls: string
  steals: string
  turnovers: string
  blocks: string
  plusMinus: string
  dnp: string
  sortKey: SortKey
}

export interface SortKey {
  name: number
  pos: number
  points: number
  min: number
  fgm: number
  fga: number
  fgp: number
  ftm: number
  fta: number
  ftp: number
  tpm: number
  tpa: number
  tpp: number
  offReb: number
  defReb: number
  totReb: number
  assists: number
  pFouls: number
  steals: number
  turnovers: number
  blocks: number
  plusMinus: number
}
