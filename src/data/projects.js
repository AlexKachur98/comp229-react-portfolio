/**
 * @file projects.js
 * @purpose Centralized data source for portfolio projects.
 * @author Alex Kachur
 * @since 2025-09-26
 */
export const projectsData = [
    {
        id: 'p1',
        title: 'C# Hangman Game',
        summary: 'A console-based word guessing game built in C# applying OOP basics.',
        tags: ['c#', 'oop', 'game'],
        image: '/images/project-hangman.jpg',
        github: 'https://github.com/AlexKachur98/csharp-hangman-game',
    },
    {
        id: 'p2',
        title: 'Prestige Exotics Website',
        summary: 'Luxury car showcase using HTML, CSS, JavaScript and jQuery animations.',
        tags: ['html', 'css', 'javascript', 'jquery'],
        image: '/images/project-exotics.jpg',
        demo: 'https://studentweb.cencol.ca/akachur/COMP125%20Assignment%2006/home.html',
        github: 'https://github.com/AlexKachur98/comp125-dealership-website',
    },
    {
        id: 'p3',
        title: 'UniLabBooker SRS',
        summary: 'Software Requirements Specification for a lab-booking system.',
        tags: ['srs', 'uml', 'requirements'],
        image: '/images/project-srs.jpg',
        download: '/documents/UniLabBooker-SRS.pdf',
        github: 'https://github.com/AlexKachur98/unilabbooker-srs',
    },
];