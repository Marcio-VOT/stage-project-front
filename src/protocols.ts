type Team = {
  name: string
}

type SubProcess = {
  id: number
  name: string
  description: string
  team_id: number
  Team: Team
  _count: {
    Method: number
  }
}

type Stack = {
  id: number
  name: string
}

type Process = {
  id: number
  name: string
  Stack: Stack[]
  SubProcess: SubProcess[]
  _count: {
    Stack: number
    SubProcess: number
  }
}

export type Data = {
  id: number
  name: string
  Process: Process[]
  _count: {
    Process: number
  }
}
