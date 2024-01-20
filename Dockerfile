FROM php:8.0.0-apache

# Instalar extensiones PHP necesarias
RUN docker-php-ext-install mysqli \
    && docker-php-ext-install mbstring \
    && docker-php-ext-install zip \
    && docker-php-ext-install gd

# Habilitar el módulo de Apache para rewrite
RUN a2enmod rewrite

# Copiar la configuración personalizada de errores a Apache
COPY custom-error.conf /etc/apache2/conf-available/
RUN a2enconf custom-error
