const { Command } = require('../../../../../');

class RemoveBotStarsCommand extends Command {
	constructor() {
		super({
			description: 'Toggles whether or not bot stars are removed.',
			memberPerms: 'MANAGE_MESSAGES',
		});
	}

	async run(msg) {
		const remove = this.client.settings.get(msg.guild.id, 'removebotstars', true);
		if (!msg.member.hasPermission('ADMINISTRATOR') && !msg.owner) return msg.channel.send(`Bot stars are ${remove ? '' : 'not'} removed.`);
		await this.client.settings.set(msg.guild.id, 'removebotstars', !remove);

		return msg.channel.send(`Bot stars are ${remove ? 'no longer' : 'now being'} removed.`);
	}
}

module.exports = RemoveBotStarsCommand;