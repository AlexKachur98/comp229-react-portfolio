/**
 * @file projects.js
 * @purpose Centralized project data for portfolio.
 * @description Each project includes id, title, summary, tags, image, and details.
 *              This supports Projects list and ProjectDetails page.
 * @author
 * @since 2025-09-17
 */

export const projects = [
    {
        id: 'p1',
        title: 'C# Hangman Game',
        summary: 'A council-based word guessing game built in C#.',
        details:
            'This was one of my first C# projects where I applied object-oriented programming concepts to build a simple but fun Hangman game. It reinforced my knowledge of loops, conditionals, and event handling in Windows console apps.',
        image: 'https://via.placeholder.com/640x360.png?text=Hangman+Game',
        tags: ['c#', 'oop', 'game'],
    },
    {
        id: 'p2',
        title: 'Prestige Exotics Website',
        summary:
            'A luxury car dealership website using HTML, CSS, JavaScript, and jQuery.',
        details:
            'This project applied my frontend web dev skills to create an exotic car showcase. I used HTML and CSS for structure and styling, JavaScript for interactivity, and jQuery animations for gallery effects. Theme colors: gold + midnight blue.',
        image: 'https://via.placeholder.com/640x360.png?text=Prestige+Exotics',
        tags: ['html', 'css', 'javascript', 'jquery'],
    },
    {
        id: 'p3',
        title: 'UniLabBooker SRS',
        summary: 'A Software Requirements Specification for a lab-booking system.',
        details:
            'This was a group SRS project where I worked on stakeholder registry, FR/NFR requirements, UML diagrams, and sequence flows. It taught me documentation standards (IEEE), collaboration, and aligning requirements with system design.',
        image: 'https://via.placeholder.com/640x360.png?text=UniLabBooker+SRS',
        tags: ['srs', 'uml', 'requirements'],
    },
]
