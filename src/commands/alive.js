const Command = require('../Command')
const Utils = require('../Utils')

const ColorRequirement = require('../ColorRequirement')
const GameExistenceRequirement = require('../GameExistenceRequirement')

module.exports = class Alive extends Command {
  constructor () {
    super({
      name: 'alive',
      aliases: [ 'a' ],
      usage: '<color>',
      description: 'Torna o jogador como vivo [,a <color>]',

      gameExistenceRequirement: GameExistenceRequirement.GAME,
      voiceChannelOnly: true,
      colorRequirement: ColorRequirement.DEAD,
      hostOnly: true
    })
  }

  run ({ message, game, emojis }) {
    const color = message.content.split(' ')[1].toLowerCase()
    const player = game.getPlayerByColor(color)
    game.setPlayerAlive(player.member, true)
    return message.channel.send(`**${player.member.user.tag}** (${player.color}) has been marked as alive. ${Utils.getPlayerEmoji(player, emojis)}`)
  }
}
