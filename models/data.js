const { v4: uuid } = require('uuid');
let posts = [{
        username: 'Aman',
        content: 'my home is look so  bad how can I fix my home color dark to white and suggest which paint is best for my house',
        id: uuid(),
    },
    {
        username: 'Faijan',
        content: 'Chaina become super power . it is insipration for us.',
        id: uuid(),



    },
    {
        username: 'Lalit',
        content: 'The dark side of Japan',
        id: uuid(),
    },
    {
        username: 'Manish',
        content: 'I love travelling . it  is my passion',
        id: uuid(),
    }, {
        username: 'Amit',
        content: 'Why fear I am hear',
        id: uuid(),
    }
];
console.log(posts)

module.exports = posts;