import { fileURLToPath as __fileURLToPath } from 'url';
import { dirname as __dirnamePath } from 'path';
import { readFileSync as __readJSONFileSync } from 'fs';
import fs from 'fs';
import toMs from 'ms';
const __filename = __fileURLToPath(import.meta.url);
const __dirname = __dirnamePath(__filename);
const loadJSON = (file) => JSON.parse(__readJSONFileSync(file, 'utf8'));

/**
 * Add user to bannedList datauser
 * @param {String} userId
 * @param {String} expired
 * @param {Object} _data
 */
 const addBanned = (userId, expired, _data) => {
    let success = false
    if (expired === undefined) {
        expired = 'PERMANENT'
    } else {
        expired = expired
    }
    
    let expired_at = 'PERMANENT'
    
    if (expired === 'PERMANENT') {
        expired_at = 'PERMANENT'
    } else {
        expired_at = Date.now() + toMs(expired)
    }
    
    const obj = {
        id: userId,
        expired: expired_at
    }
    
    _data.push(obj)
    fs.writeFileSync('./src/dados/usuarios/banned.json', JSON.stringify(_data))
}
/**
 * Unbanned someone.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
 const unBanned = (userId, _data) => {
    let position = null
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _data.splice(position, 1)
        fs.writeFileSync('./src/dados/usuarios/banned.json', JSON.stringify(_data))
    }
    return true
}
const BannedExpired = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (_dir[i].expired === 'PERMANENT') {
                position = null
            } else if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Banned expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
            fs.writeFileSync('./src/dados/usuarios/banned.json', JSON.stringify(_dir))
        }
    }, 1000)
}
/**
 * Check user is premium.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
 const cekBannedUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

export { addBanned, unBanned, BannedExpired, cekBannedUser };
