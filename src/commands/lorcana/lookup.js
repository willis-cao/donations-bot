const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

module.exports = {
    deleted: true,
    name: 'lookup',
    description: 'Look up a Lorcana card matching the query.',
    testOnly: true,
    options: [
        {
            name: 'query',
            description: 'Query',
            type: ApplicationCommandOptionType.String,
        },
    ],
    callback: (client, interaction) => {
        console.log(interaction.options.getString('query'));
        getJSON(interaction.options.getString('query')).then(data => {
            
        }).catch(error => {
            console.log(error);
        })

        async function getJSON(query) {
            fetch("https://api.lorcana-api.com/fuzzy/" + query).then(function(response) {
                return response.json();
            }).then(function(data) {
                
                // /fuzzy currently returns a single card
                const embed = new EmbedBuilder()
                    .setTitle(data['name'])
                    .setDescription(data['subtitle'])
                    .setImage(data['image-urls']['large']);
                    // .setColor('Random')
                    // .addFields(
                    // {
                    //     name: 'Field title',
                    //     value: 'Some random value',
                    //     inline: true,
                    // },
                    // {
                    //     name: '2nd Field title',
                    //     value: 'Some random value',
                    //     inline: true,
                    // });

                interaction.reply({ embeds: [embed] });
            }).catch(function(err) {
                console.log('Fetch Error :-S', err);
            }); 
        }
    }
};
