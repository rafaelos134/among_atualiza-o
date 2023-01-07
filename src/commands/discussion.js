const Command = require('../Command')

const GameStages = require('../GameStages')
const GameExistenceRequirement = require('../GameExistenceRequirement')
const GameParticipationRequirement = require('../GameParticipationRequirement')

module.exports = class Discussion extends Command {
  constructor () {
    super({
      name: 'discussion',
      aliases: [ 'ds' ],
      description: 'Inicia o estagio de discursão, desmuta todos os jogadores vivos [,ds]',

      gameExistenceRequirement: GameExistenceRequirement.GAME,
      gameParticipationRequirement: GameParticipationRequirement.PARTICIPATING,
      voiceChannelOnly: true,
      hostOnly: true
    })
  }

  run ({ message, game, prefix }) {
    if (!game) return message.channel.send(`No game, type \`${prefix}newgame\` to start one!`)
    game.setStage(GameStages.DISCUSSION)
    message.channel.send('Stage set to **discussion**')
  }
}
