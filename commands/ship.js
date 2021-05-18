module.exports = {
    name: 'ship',
    description: "this is a ping command!",
    execute(message, args){
        message.reply("calculating the love :heart:").then(m => { 
            setTimeout(() => {
            m.edit(+ Math.floor(Math.random() * 101) + "% in love :heart_exclamation::heart_exclamation:")
            }, 5000)
        }
        )}
}