const generateAction = (namespace) => ({
    getAll: `[${namespace}] getAll`,
    create: `[${namespace}] create`,
    update: `[${namespace}] update`,
    delete: `[${namespace}] delete`,
    success: `[${namespace}] success`,
    error: `[${namespace}] error`,
});

export const images = generateAction('Images');