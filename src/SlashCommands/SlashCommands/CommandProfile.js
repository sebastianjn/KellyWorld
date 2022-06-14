// importing the packages/libraries used this command!
const { MessageEmbed } = require('discord.js');
const { MessageAttachment } = require("discord.js");
const { profileImage } = require("discord-arts");

// slash command import module supported by hadler.
module.exports = {
    name: 'Profile',
    description: "📸 have you seen your profile today?",
    type: "CHAT_INPUT",
  options: [{
    name: 'USER',
    type: 'USER',
    description: 'select user',
    required: false,
  }],
  run: async (client, interaction, options) => {

  // we define the member variable that will show the avatar.
  const discordUser = interaction.options.getUser('USER') || interaction.member.user

   await interaction.deferReply();
   const bufferImg = await profileImage(discordUser);
   const imgAttachment = new MessageAttachment(bufferImg, "profile.png");
   
   //sending the image to the chat...
   interaction.followUp({ files: [imgAttachment] });

  }
};
