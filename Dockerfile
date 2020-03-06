FROM node:8-alpine


COPY . /opt/eici-slackfeedback-server

RUN cd /opt/eici-slackfeedback-server && npm install

CMD ["node", "/opt/eici-slackfeedback-server/app.js" ]