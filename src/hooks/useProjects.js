/**
 * @file useProjects.js
 * @purpose Custom React hook to provide portfolio project data throughout the app. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Encapsulates fetching logic. Currently simulates a network request 
 * with a delay, but can be swapped for a real API in the future. 
 * Returns { data, loading, error }.
 */
import { useEffect, useState } from 'react';
import { projectsData } from '../data/projects.js';

export function useProjects() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        const timer = setTimeout(() => {
            if (ignore) return;
            try {
                setData(projectsData);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }, 300); // simulate network latency

        return () => {
            ignore = true;
            clearTimeout(timer);
        };
    }, []);

    return { data, loading, error };
}
