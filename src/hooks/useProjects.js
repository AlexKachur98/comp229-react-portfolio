/**
 * @file useProjects.js
 * @purpose Custom React hook to provide portfolio project data throughout the app. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Encapsulates fetching logic. Returns synchronously for now but can be
 * swapped for a real API in the future without changing consumers.
 * Returns { data, loading, error }.
 */
import { useMemo } from 'react';
import { projectsData } from '../data/projects.js';

export function useProjects() {
    const data = useMemo(() => projectsData, []);
    return { data, loading: false, error: null };
}
