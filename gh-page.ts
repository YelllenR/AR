import { publish } from 'gh-pages';

publish(
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