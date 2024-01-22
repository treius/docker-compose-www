FROM php:8.0.0-apache

# Instalar extensiones PHP necesarias
RUN apt-get update && \
    apt-get install -y libonig-dev && \
    docker-php-ext-install mbstring

# Habilitar el módulo de Apache para rewrite
RUN a2enmod rewrite

# Habilitar el módulo SSL
RUN a2enmod ssl

# Instalar Postfix sin interacciones interactivas
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y postfix

# Copiar la configuración personalizada de errores a Apache
COPY custom-error.conf /etc/apache2/conf-available/
RUN a2enconf custom-error

# Copiar los certificados SSL
COPY ssl/tu-dominio.crt /etc/apache2/ssl/tu-dominio.crt
COPY ssl/tu-dominio.key /etc/apache2/ssl/tu-dominio.key

# Configuración personalizada del sitio Apache con SSL
COPY apache-config-ssl.conf /etc/apache2/sites-available/default-ssl.conf
RUN a2ensite default-ssl.conf
