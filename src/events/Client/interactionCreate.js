import { InteractionType } from 'discord.js';
import i18next from 'i18next';

export default {
   name: 'interactionCreate',
   type: false,
 async exec(client, interaction) {
  
  const GUILD = await client.db.guild.findOne({
     _id: interaction.guild.id,
  });
   
  if (!GUILD) return await client.db.guild.create({
      _id: interaction.guild.id,
  });
  
  let lang = GUILD.lang || 1;
 
  switch(lang) {
    case 1:
       lang = i18next.getFixedT('pt-BR');
      break;
    case 2:
       lang = i18next.getFixedT('en-US');
      break;
    case 3:
       lang = i18next.getFixedT('es-ES');
      break;
  }
  
  if (interaction.type === InteractionType.ApplicationCommand)
	
	(await import(`#commands/${interaction.commandName}`)).KellyWorld(client, interaction, lang)
	
  }
}