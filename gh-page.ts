import { publish } from 'gh-pages';
const ghpages = require('gh-pages');

ghpages.publish(
    'build', 
    {
        branch: 'master',
        repo: 'https://github.com/YelllenR/AR',
        user: {
            name: 'YelllenR'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);