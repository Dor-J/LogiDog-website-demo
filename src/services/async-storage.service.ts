export const storageService = {
    post,
    get,
    put,
    remove,
    query
}

interface EntityId {
    _id: string
}

/**
 * Public CRUD helpers
 */

function query<T>(entityType: string, delay = 200): Promise<T[]> {
    const raw: string = localStorage.getItem(entityType) ?? '[]'
    const entities: T[] = JSON.parse(raw) as T[]

    return new Promise((resolve) => {
        setTimeout(() => resolve(entities), delay)
    })
}

async function get<T extends EntityId>(
    entityType: string,
    entityId: string
): Promise<T> {
    const entities = await query<T>(entityType)
    const entity = entities.find((entity_1) => entity_1._id === entityId)
    if (!entity)
        throw new Error(
            `Get failed, cannot find entity with id: ${entityId} in: ${entityType}`
        )
    return entity
}

async function post<T extends EntityId>(
    entityType: string,
    newEntity: Omit<T, '_id'>
): Promise<T> {
    const entity: T = { ...(newEntity as T), _id: _makeId() }
    const entities = await query<T>(entityType)

    entities.push(entity)
    _save(entityType, entities)

    return entity
}

async function put<T extends EntityId>(
    entityType: string,
    updated: T
): Promise<T> {
    const entities = await query<T>(entityType)
    const idx = entities.findIndex((e) => e._id === updated._id)

    if (idx === -1) {
        throw new Error(
            `Update failed: cannot find id "${updated._id}" in "${entityType}"`
        )
    }
    entities[idx] = { ...updated }
    _save(entityType, entities)
    return updated
}

async function remove<T extends EntityId>(
    entityType: string,
    entityId: string
): Promise<void> {
    const entities = await query<T>(entityType)
    const idx = entities.findIndex((e) => e._id === entityId)

    if (idx === -1) {
        throw new Error(
            `Remove failed: cannot find id "${entityId}" in "${entityType}"`
        )
    }
    entities.splice(idx, 1)
    _save(entityType, entities)
}

/**
 * Private functions
 */
function _save<T>(entityType: string, entities: T[]): void {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5): string {
    let txt = ''
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return txt
}
