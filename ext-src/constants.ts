const constants = {
    BUILD: "build",
    DEPLOY: "deploy",
    UPLOAD: "upload",
    INSTANTIATE: "instantiate",
    // DEV_MODE: "dev-mode",
    INIT_SCHEMA: "init_msg",
    HANDLE_SCHEMA: {
        OLD_VERSION: "handle_msg",
        NEW_VERSION: "execute_msg",
    },
    QUERY_SCHEMA: "query_msg",
    MIGRATE_SCHEMA: "migrate_msg"
}

export default constants;