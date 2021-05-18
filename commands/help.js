const embed_help = {
    "plainText": "All my help commands",
    "title": "BoOm-San",
    "description": "All commands:",
    "author": {
      "name": "BoOm-San"
    },
    "color": 53380,
    "footer": {
      "text": "BoOm-San"
    },
    "fields": [
      {
        "name": "Animegirl",
        "value": "gives you anime, use is ;animegirl",
        "inline": true
      },
      {
        "name": "Help",
        "value": "should be obvious??",
        "inline": true
      },
      {
        "name": "Ship",
        "value": "Shows the % of how mych somebody is loving somebody else, use is: ;ship <user1> <user2>",
        "inline": true
      },
      {
        "name": "Kick",
        "value": "Kicks the pinged use, use is -kick <user>",
        "inline": true
      },
      {
        "name": "Feet",
        "value": "I hate myself for this, ;feet",
        "inline": true
      },
      {
        "name": "Server",
        "value": "Displays some info about the server, use is -server",
        "inline": true
      },
      {
        "name": "stats",
        "value": "displays some info about the pinged use, or yourself, use is -user-info <user>",
        "inline": true
      },
    ]
  }
  module.exports = {
      name: 'help',
      description: "this is a help command!",
      execute(message, args){
        message.channel.send({ embed: embed_help });
      }
  }
  