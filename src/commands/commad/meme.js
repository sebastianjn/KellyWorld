const Discord = require("discord.js");
const got = require('got');
const { JsonDatabase } = require('kettraworld.db');
const db = new JsonDatabase({
  DatabaseJson:"./src/database/database.json"
});

module.exports = {
    name: "meme",
    aliases: ["meme"],

	run: async(client, message, args) => {
    
        let language = db.get(`language_${message.guild.id}`);
    if( language == null ) { 
      db.set(`language_${messag.guild.id}`, "pt");
    }
    
    if (language === "pt") {
        if(!message.guild.me.permissions.has("ADMINISTRATOR")) {
  return message.reply("<:K_zan:924366252024164363> eu tou sem ah permissão de `ADMINISTRADOR` infelizmente sou inútil ಥ╭╮ಥ")
  };
  
      let meme = new Discord.MessageEmbed()
	  got('https://www.reddit.com/r/MEMEBR/random/.json').then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;
		  const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
	
	    	meme.setColor('RANDOM')
    		meme.setImage(memeImage)
    		
		message.reply({ embeds: [meme] })
    }).catch(console.error);
	}
	
	if (language === "en") {
      if(!message.guild.me.permissions.has("ADMINISTRATOR")) {
    return message.reply("<:K_zan:924366252024164363> I'm without `ADMINISTRATOR` permission unfortunately I'm useless ಥ╭╮ಥ")
      };
      
	let meme = new Discord.MessageEmbed()
	  got('https://www.reddit.com/r/memes/random/.json').then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;
		  const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
	
	    	meme.setColor('RANDOM')
    		meme.setImage(memeImage)
    		
		message.reply({ embeds: [meme] })
    }).catch(console.error);
	}
	
	if (language === "es") {
	  if(!message.guild.me.permissions.has("ADMINISTRATOR")) {
    return message.reply("<:K_zan:924366252024164363> No tengo permiso de `ADMINISTRADOR` lamentablemente soy un inútil ಥ╭╮ಥ")
      };
      
	let meme = new Discord.MessageEmbed()
	  got('https://www.reddit.com/r/memesES/random/.json').then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;
		  const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
	
	    	meme.setColor('RANDOM')
    		meme.setImage(memeImage)
    		
		message.reply({ embeds: [meme] })
    }).catch(console.error);
	}
	}
}