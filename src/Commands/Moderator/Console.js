import { exec } from 'child_process';
// eslint-disable-next-line no-control-regex
const ANSI_REGEX = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
export default {
  name: 'shell',
  aliases: ['terminal', 'sh'],
  ownerOnly: true,
  async exec({ message, t, args }) {
 
    const cmd = args.join(' ');
 
    if (!cmd) return message.reply(`${t('language:console')}`);

    exec(cmd, (err, res) => {
      if(err) return message.reply(`\`\`\`${err}\`\`\``);
      message.reply({ content: `\`\`\`\n$ ${cmd}\n\n${res.replace(ANSI_REGEX, '').slice(0, 1900)}\`\`\`` });
    });
  },
};