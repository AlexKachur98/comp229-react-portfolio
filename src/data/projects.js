/**
 * @file projects.js
 * @purpose Centralized static data source for portfolio projects. 
 * @author Alex Kachur
 * @since 2025-09-26
 * @description Provides consistent structure for project metadata. 
 * Future-ready for dynamic fetching from backend API.
 */
export const projectsData = [
    {
        id: 'p1',
        title: 'C# Hangman Game',
        summary: 'A console-based word guessing game built in C# applying OOP basics.',
        tags: ['c#', 'oop', 'game'],
        image: '/images/project-hangman.jpg',
        details:
            'A straightforward Hangman console app where I practiced classes, loops, and state management. The focus was on creating clean, readable methods and handling user input gracefully.',
        github: 'https://github.com/AlexKachur98/csharp-hangman-game'
    },
    {
        id: 'p2',
        title: 'Prestige Exotics Website',
        summary: 'Luxury car showcase using HTML, CSS, JavaScript and jQuery animations.',
        tags: ['html', 'css', 'javascript', 'jquery'],
        image: '/images/project-exotics.jpg',
        details:
            'This project involved building responsive cards, gallery modals, and smooth jQuery transitions. I focused on a polished color theme (gold/midnight) and clear calls to action.',
        demo: 'https://studentweb.cencol.ca/akachur/COMP125%20Assignment%2006/home.html',
        github: 'https://github.com/AlexKachur98/comp125-dealership-website'
    },
    {
        id: 'p3',
        title: 'UniLabBooker SRS',
        summary: 'Software Requirements Specification for a lab-booking system.',
        tags: ['srs', 'uml', 'requirements'],
        image: '/images/project-srs.jpg',
        details:
            'This was a collaborative SRS document following IEEE standards. My role involved leading the creation of UML use cases and sequence diagrams, which clarified the system’s logic for both the stakeholders and the development team. The outcome was a comprehensive and approved specification document that served as the blueprint for the project.',
        download: '/documents/UniLabBooker-SRS.pdf',
        github: 'https://github.com/AlexKachur98/unilabbooker-srs'
    }
];
