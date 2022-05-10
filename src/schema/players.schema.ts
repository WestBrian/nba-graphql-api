import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
class Draft {
  @Field((type) => ID)
  teamId!: string

  @Field()
  pickNum!: string

  @Field()
  roundNum!: string

  @Field()
  seasonYear!: string
}

@ObjectType()
class TeamSnippet {
  @Field((type) => ID)
  teamId!: string

  @Field()
  seasonStart!: string

  @Field()
  seasonEnd!: string
}

@ObjectType()
class TeamSitesOnly {
  @Field()
  playerCode!: string

  @Field()
  posFull!: string

  @Field()
  displayAffiliation!: string

  @Field()
  freeAgentCode!: string
}

@ObjectType()
export class Player {
  @Field((type) => ID)
  personId!: string

  @Field()
  firstName!: string

  @Field()
  lastName!: string

  @Field({ nullable: true })
  temporaryDisplayName?: string

  @Field()
  teamId!: string

  @Field()
  jersey!: string

  @Field()
  isActive!: boolean

  @Field()
  pos!: string

  @Field()
  heightFeet!: string

  @Field()
  heightInches!: string

  @Field()
  heightMeters!: string

  @Field()
  weightPounds!: string

  @Field()
  weightKilograms!: string

  @Field()
  dateOfBirthUTC!: string

  @Field({ nullable: true })
  teamSitesOnly?: TeamSitesOnly

  @Field((type) => [TeamSnippet])
  teams!: TeamSnippet[]

  @Field()
  draft!: Draft

  @Field()
  nbaDebutYear!: string

  @Field()
  yearsPro!: string

  @Field()
  collegeName!: string

  @Field()
  lastAffiliation!: string

  @Field()
  country!: string

  @Field({ nullable: true })
  isallStar?: boolean
}
