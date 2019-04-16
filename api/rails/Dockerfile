FROM ruby:2.5.3-alpine

ENV APP_ROOT /var/www/conduit

RUN apk --update --no-cache add build-base tzdata mariadb-dev netcat-openbsd curl \
  && curl https://raw.githubusercontent.com/eficode/wait-for/master/wait-for \
    -o /bin/wait-for \
  && chmod u+x /bin/wait-for

RUN mkdir -p $APP_ROOT

WORKDIR $APP_ROOT

COPY Gemfile* ./
RUN bundle install

COPY . ./
