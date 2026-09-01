ARG VARIANT="latest"
FROM mcr.microsoft.com/devcontainers/universal:${VARIANT}

USER root

RUN npm install -g \
      eslint \
      @eslint/js \
      globals \
      prettier

RUN set -e; \
    GLOBAL_NPM_DIR="$(npm root -g)";      \
    mkdir -p /opt/global-lint            \
 && ln -s "${GLOBAL_NPM_DIR}" /opt/global-lint/node_modules

COPY eslint.config.js  /opt/global-lint/eslint.config.js

ARG USERNAME=vscode
USER ${USERNAME}
WORKDIR /workspaces/${USERNAME}
