export function formatDateSafe(dateStr?: string | null) {
    if (!dateStr) return 'N/A'
    try {
        const d = new Date(dateStr)
        if (isNaN(d.getTime())) return 'Invalid date'
        return d.toISOString().split('T')[0] // YYYY-MM-DD
    } catch {
        return 'Invalid date'
    }
}
