#!/usr/bin/env bash
# andrew borgman
# pushes updates and content to our production server

scp public/images/* pub:/lab-site/public/images/
scp -r templates/* pub:/lab-site/templates/
scp -r models/* pub:/lab-site/models/
scp -r routes/* pub:/lab-site/routes/
scp -r routes/* pub:/lab-site/routes/

scp -r keystone.js pub:/lab-site/keystone.js
scp -r package.json pub:/lab-site/package.json


# our environment variables - needed for images...
scp .env pub:/lab-site/
