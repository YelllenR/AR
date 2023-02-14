import { publish } from 'gh-pages';

publish(
    'build', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/YelllenR/AR',
        user: {
            name: 'Aurélie ROSE'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);