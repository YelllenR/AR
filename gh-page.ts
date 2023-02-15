import { publish } from 'gh-pages';


publish(
    'build',
    {
        branch: 'gh-pages',
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