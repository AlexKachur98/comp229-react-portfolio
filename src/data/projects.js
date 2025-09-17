/** @file projects.js
 *  @purpose Centralized portfolio data.
 *  @pattern list+keys mapping with stable IDs.
 */
export const projects = [
    {
        id: 'p1',
        title: 'C# Hangman Game',
        summary:
            'A council-based guessing game written in C#. Players try to solve the word puzzle with limited attempts, showcasing object-oriented design and event handling.',
        image: 'https://via.placeholder.com/640x360.png?text=Hangman+Game',
        tags: ['c#', 'oop', 'game'],
    },
    {
        id: 'p2',
        title: 'Prestige Exotics Website',
        summary:
            'An exotic car dealership site built with HTML, CSS, and JavaScript. Features jQuery animations, image galleries, and a gold-and-midnight-blue theme.',
        image: 'https://via.placeholder.com/640x360.png?text=Prestige+Exotics',
        tags: ['html', 'css', 'javascript', 'jquery'],
    },
    {
        id: 'p3',
        title: 'UniLabBooker SRS Project',
        summary:
            'A detailed Software Requirements Specification for a lab-equipment booking system. Includes stakeholder registry, functional/non-functional requirements, and UML diagrams.',
        image: 'https://via.placeholder.com/640x360.png?text=UniLabBooker+SRS',
        tags: ['srs', 'uml', 'requirements'],
    },
]