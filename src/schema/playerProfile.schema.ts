import { Field, ID, Int, ObjectType } from 'type-graphql'

@ObjectType()
class Total {
  @Field()
  ppg!: string

  @Field()
  rpg!: string

  @Field()
  apg!: string

  @Field()
  mpg!: string

  @Field()
  topg!: string

  @Field()
  spg!: string

  @Field()
  bpg!: string

  @Field()
  tpp!: string

  @Field()
  ftp!: string

  @Field()
  fgp!: string

  @Field()
  assists!: string

  @Field()
  blocks!: string

  @Field()
  steals!: string

  @Field()
  turnovers!: string

  @Field()
  offReb!: string

  @Field()
  defReb!: string

  @Field()
  totReb!: string

  @Field()
  fgm!: string

  @Field()
  fga!: string

  @Field()
  tpm!: string

  @Field()
  tpa!: string

  @Field()
  ftm!: string

  @Field()
  fta!: string

  @Field()
  pFouls!: string

  @Field()
  points!: string

  @Field()
  gamesPlayed!: string

  @Field()
  gamesStarted!: string

  @Field()
  plusMinus!: string

  @Field()
  min!: string

  @Field()
  dd2!: string

  @Field()
  td3!: string
}

@ObjectType()
class Team {
  @Field()
  teamId!: string

  @Field()
  ppg!: string

  @Field()
  rpg!: string

  @Field()
  apg!: string

  @Field()
  mpg!: string

  @Field()
  topg!: string

  @Field()
  spg!: string

  @Field()
  bpg!: string

  @Field()
  tpp!: string

  @Field()
  ftp!: string

  @Field()
  fgp!: string

  @Field()
  assists!: string

  @Field()
  blocks!: string

  @Field()
  steals!: string

  @Field()
  turnovers!: string

  @Field()
  offReb!: string

  @Field()
  defReb!: string

  @Field()
  totReb!: string

  @Field()
  fgm!: string

  @Field()
  fga!: string

  @Field()
  tpm!: string

  @Field()
  tpa!: string

  @Field()
  ftm!: string

  @Field()
  fta!: string

  @Field()
  pFouls!: string

  @Field()
  points!: string

  @Field()
  gamesPlayed!: string

  @Field()
  gamesStarted!: string

  @Field()
  plusMinus!: string

  @Field()
  min!: string

  @Field()
  dd2!: string

  @Field()
  td3!: string
}

@ObjectType()
class Season {
  @Field((type) => Int)
  seasonYear!: number

  @Field((type) => [Team])
  teams!: Team[]

  @Field()
  total!: Total
}

@ObjectType()
class RegularSeason {
  @Field((type) => [Season])
  season!: Season[]
}

@ObjectType()
class CareerSummary {
  @Field()
  tpp!: string

  @Field()
  ftp!: string

  @Field()
  fgp!: string

  @Field()
  ppg!: string

  @Field()
  rpg!: string

  @Field()
  apg!: string

  @Field()
  bpg!: string

  @Field()
  mpg!: string

  @Field()
  spg!: string

  @Field()
  assists!: string

  @Field()
  blocks!: string

  @Field()
  steals!: string

  @Field()
  turnovers!: string

  @Field()
  offReb!: string

  @Field()
  defReb!: string

  @Field()
  totReb!: string

  @Field()
  fgm!: string

  @Field()
  fga!: string

  @Field()
  tpm!: string

  @Field()
  tpa!: string

  @Field()
  ftm!: string

  @Field()
  fta!: string

  @Field()
  pFouls!: string

  @Field()
  points!: string

  @Field()
  gamesPlayed!: string

  @Field()
  gamesStarted!: string

  @Field()
  plusMinus!: string

  @Field()
  min!: string

  @Field()
  dd2!: string

  @Field()
  td3!: string
}

@ObjectType()
class LatestStats {
  @Field()
  seasonYear!: number

  @Field()
  seasonStageId!: number

  @Field()
  ppg!: string

  @Field()
  rpg!: string

  @Field()
  apg!: string

  @Field()
  mpg!: string

  @Field()
  topg!: string

  @Field()
  spg!: string

  @Field()
  bpg!: string

  @Field()
  tpp!: string

  @Field()
  ftp!: string

  @Field()
  fgp!: string

  @Field()
  assists!: string

  @Field()
  blocks!: string

  @Field()
  steals!: string

  @Field()
  turnovers!: string

  @Field()
  offReb!: string

  @Field()
  defReb!: string

  @Field()
  totReb!: string

  @Field()
  fgm!: string

  @Field()
  fga!: string

  @Field()
  tpm!: string

  @Field()
  tpa!: string

  @Field()
  ftm!: string

  @Field()
  fta!: string

  @Field()
  pFouls!: string

  @Field()
  points!: string

  @Field()
  gamesPlayed!: string

  @Field()
  gamesStarted!: string

  @Field()
  plusMinus!: string

  @Field()
  min!: string

  @Field()
  dd2!: string

  @Field()
  td3!: string
}

@ObjectType()
class Stats {
  @Field()
  latest!: LatestStats

  @Field()
  careerSummary!: CareerSummary

  @Field()
  regularSeason!: RegularSeason
}

@ObjectType()
export class PlayerProfile {
  @Field((type) => ID)
  teamId!: string

  @Field()
  stats!: Stats
}
