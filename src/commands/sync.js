const Command = require('../Command')
const Utils = require('../Utils')

const ColorRequirement = require('../ColorRequirement')
const GameExistenceRequirement = require('../GameExistenceRequirement')
const { MessageEmbed } = require('discord.js')

module.exports = class Sync extends Command {
  constructor () {
    super({
      name: 'sync',
      aliases: [ 's' ],
      description: 'Lets you control the bot through your phone',
      new: true,

      gameExistenceRequirement: GameExistenceRequirement.GAME,
      voiceChannelOnly: true,
      hostOnly: true
    })
  }

  run ({ message, game }) {
    message.channel.send(
      new MessageEmbed()
        .setColor(0x7289DA)
        .setTitle(`${game.syncId}`)
    )
    // message.channel.send(`Open https://sync.amongcord.xyz in a browser/smartphone and enter **\`${game.syncId}\`** to control the bot.`)
  }
}
