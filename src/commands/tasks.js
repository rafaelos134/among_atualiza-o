const Command = require('../Command')

const GameStages = require('../GameStages')
const GameExistenceRequirement = require('../GameExistenceRequirement')
const GameParticipationRequirement = require('../GameParticipationRequirement')

module.exports = class Tasks extends Command {
  constructor () {
    super({
      name: 'tasks',
      aliases: [ 'ts' ],
      description: 'muta todos os participantes [,ts]',

      gameExistenceRequirement: GameExistenceRequirement.GAME,
      gameParticipationRequirement: GameParticipationRequirement.PARTICIPATING,
      voiceChannelOnly: true,
      hostOnly: true
    })
  }

  run ({ message, game }) {
    game.setStage(GameStages.TASKS)
    message.channel.send('Stage set to **tasks**')
  }
}
