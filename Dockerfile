FROM php:8.0.0-apache

# Instalar extensiones PHP necesarias
RUN apt-get update && \
    apt-get install -y libonig-dev && \
    docker-php-ext-install mbstring

# Habilitar el módulo de Apache para rewrite
RUN a2enmod rewrite

# Copiar la configuración personalizada de errores a Apache
COPY custom-error.conf /etc/apache2/conf-available/
RUN a2enconf custom-error
