#!/bin/sh

# Substitute env vars in the template to generate actual nginx config
envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Start nginx in foreground
nginx -g 'daemon off;'