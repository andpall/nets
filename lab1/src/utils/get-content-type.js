const contentTypeMap = {
    '.html': 'text/html',
    '.json': 'application/json',
    '.js': 'application/javascript',
    '.pdf': 'application/pdf',
    '.xml': 'text/xml',
    '.doc': 'application/msword',
    '.docx': 'application/msword',
    '.gif': 'image/gif',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.css': 'text/css',
    '.csv': 'text/csv',
    '.php': 'text/php',
    '.md': 'text/markdown',
    '.': 'text/plain',
    '': 'text/plain',
}

const getContentType = fileExt => {
    return contentTypeMap[fileExt]
}

module.exports = getContentType