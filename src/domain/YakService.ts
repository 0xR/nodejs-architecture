interface YakRepository {
}

type MilkYakCommand = {
}

type ShaveYakCommand = {
}

export class YakService {
  constructor(private yakRepository: YakRepository) {
  }

  async milkYak(milkCommand: MilkYakCommand) {

  }

  async shave(shaveCommand: ShaveYakCommand ) {

  }
}
