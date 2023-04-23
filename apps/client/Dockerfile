FROM node:alpine AS dev

SHELL ["/bin/sh", "-c"]

ENV PNPM_HOME="/usr/local/pnpm"
ENV PATH="${PATH}:${PNPM_HOME}"

RUN apk update
RUN apk add --no-cache libc6-compat
RUN npm install --global pnpm \
    && SHELL=bash pnpm setup \
    && source /root/.bashrc \
COPY . .
WORKDIR /app/apps/client
CMD pnpm run dev
