export default {
  name: 'language',
  aliases: ['setlang', 'lang'],
  async exec({ client, args, message, t }) {
   
    if (!message.guild.members.me.permissions.has('ManageGuild')) return message.reply(`${t('permissions:bot.ManageGuild')}`);
        
    if (!message.member.permissions.has('ManageGuild') && !client.owners.some(id => id === message.author.id)) return message.reply(`${t('permissions:user.ManageGuild')}`);
  
    if (args[0] === 'pt') {
      await client.db.guild.findOneAndUpdate({ _id: message.guild.id }, { $set: { lang: 1 } });
      message.reply({ content: '🇧🇷 O idioma do servidor foi definido para **português.**' });
    }
  
    if (args[0] === 'en') {
      await client.db.guild.findOneAndUpdate({ _id: message.guild.id }, { $set: { lang: 2 } });  
      message.reply({ content: '🇺🇲 Server language has been set to **English.**' });
    }
  
    if (!args[0] || args[0] !== 'pt' && args[0] !== 'en') {
      message.reply({ content: `${t('language:language')}` });
   
    }
  }
};