import CommandContext from "../structures/CommandContext";
import { Event } from "../structures/Event";
import {
  ApplicationCommandOptionType,
  AutocompleteInteraction,
  ChatInputCommandInteraction,
  Interaction,
} from "discord.js";
import client from "../main";
import { request } from 'undici';
import i18next, { TFunction } from 'i18next';
import colors from "colors";

export default new Event("interactionCreate", async (interaction: Interaction) => {
  
  if (interaction instanceof ChatInputCommandInteraction) {

    const command = client.commands.get(interaction.commandName);
    
    if (!command) return;

    let l: TFunction | undefined;

    switch (null) {
      case 'pt-BR':
        l = i18next.getFixedT('pt-BR');
        break;
      case 'en-US':
        l = i18next.getFixedT('en-US');
        break;
      default:
        l = i18next.getFixedT('en-US');
    }

    const args = [];

    const context = new CommandContext(client, interaction, args);

    await command.exec({
      context,
      client,
      interaction,
      l,
    });

  
  }
});
