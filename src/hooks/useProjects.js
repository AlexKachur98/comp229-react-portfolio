/**
 * @file useProjects.js
 * @purpose Custom hook to provide project data throughout the application.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Encapsulates the logic for fetching project data. This pattern makes
 * it easy to switch to a real API fetch later without changing components.
 * Currently simulates a network request with a short delay.
 * @returns {{data: Project[], loading: boolean, error: Error|null}}
 */
import { useEffect, useState } from 'react'

export function useProjects() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        let ignore = false
        const timer = setTimeout(() => {
            if (ignore) return
            try {
                setData([
                    {
                        id: 'p1',
                        title: 'C# Hangman Game',
                        summary: 'A console-based word guessing game built in C# applying OOP basics.',
                        tags: ['c#', 'oop', 'game'],
                        image: '/images/project-hangman.jpg',
                        details:
                            'A straightforward Hangman console app where I practiced classes, loops, and state management. The focus was on creating clean, readable methods and handling user input gracefully.',
                        github: 'https://github.com/AlexKachur98/csharp-hangman-game',
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
                        github: 'https://github.com/AlexKachur98/comp125-dealership-website',
                    },
                    {
                        id: 'p3',
                        title: 'UniLabBooker SRS',
                        summary: 'Software Requirements Specification for a lab-booking system.',
                        tags: ['srs', 'uml', 'requirements'],
                        image: '/images/project-srs.jpg',
                        details:
                            'This was a collaborative SRS document following IEEE standards. My role involved leading the creation of UML use cases and sequence diagrams, which clarified the system\'s logic for both the stakeholders and the development team. The outcome was a comprehensive and approved specification document that served as the blueprint for the project.',
                        download: '/documents/UniLabBooker-SRS.pdf',
                        github: 'https://github.com/AlexKachur98/unilabbooker-srs',
                    },
                ])
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false)
            }
        }, 300)

        // Cleanup function to prevent state updates on unmounted components
        return () => { ignore = true; clearTimeout(timer) }
    }, [])

    return { data, loading, error }
}