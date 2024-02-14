################################################################################
###
###   Environment variables:
###   - SMOO_SERVER_*    servers that are probed in the format $host:$port
###   - SMOO_EXPIRE      default refresh rate for all servers in minutes (default: 10)
###   - SMOO_EXPIRE_*    overwrite for individual servers, format: $host:$port:$minutes
###   - SMOO_TOKEN_*     Secret JSON API Token, format: $host:$port:$token
###
###   Environment variables can also be provided by the following file:
###   - /var/www/html/data/.env
###
###   Volumes:
###   - /var/www/html/data/
###
################################################################################


FROM  scratch  as  html

COPY  ./html/  /

WORKDIR  /data/


################################################################################


FROM  php:8.3.2-apache-bookworm

# dependencies
RUN  DEBIAN_FRONTEND=noninteractive  \
 &&  apt-get  update                 \
 &&  apt-get  install  -y            \
       jq                            \
       locales                       \
       netcat-traditional            \
       nmap                          \
       parallel                      \
       sudo                          \
 &&  rm  -rf  /var/lib/apt/lists/*   \
;

# UTF-8 support
RUN  sed  -i  -e  's/# en_US.UTF-8/en_US.UTF-8/'  /etc/locale.gen  \
 &&  locale-gen  en_US.UTF-8                                       \
 &&  update-locale  LANG=en_US.UTF-8                               \
;

# apache modules
RUN  a2enmod  headers  \
 &&  a2enmod  rewrite  \
 &&  a2dismod  status  \
;

VOLUME   /var/www/html/data/

COPY  ./sudoers      /etc/sudoers.d/smoo
COPY  ./apache.conf  /etc/apache2/sites-enabled/000-default.conf

COPY  --from=html  --chown=www-data:www-data  /  /var/www/html/
