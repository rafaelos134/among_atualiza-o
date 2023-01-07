const Command = require('../Command')
const Utils = require('../Utils')

const ColorRequirement = require('../ColorRequirement')
const GameExistenceRequirement = require('../GameExistenceRequirement')

module.exports = class NewGame extends Command {
  constructor () {
    super({
      name: 'dead',
      aliases: [ 'd' ],
      usage: '<color>',
      description: ' marca o jogador que esta morto. Os mortos são mutados durante o estagio de discrusão [,d <color>].',

      gameExistenceRequirement: GameExistenceRequirement.GAME,
      voiceChannelOnly: true,
      colorRequirement: ColorRequirement.ALIVE,
      hostOnly: true
    })
  }

  run ({ message, game, emojis }) {
    const color = message.content.split(' ')[1].toLowerCase()
    const player = game.getPlayerByColor(color)
    game.setPlayerAlive(player.member, false)
    return message.channel.send(`**${player.member.user.tag}** (${player.color}) has been marked as dead. ${Utils.getPlayerEmoji(player, emojis)}`)
  }
}
