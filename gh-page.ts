import { publish } from 'gh-pages';

publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/YelllenR/AR', 
        user: {
            name: 'Aurélie ROSE', 
            email: 'aurelie@rosedarbon.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy done!!!');
    }
);