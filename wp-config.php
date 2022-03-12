<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'customer_jdm' );

/** MySQL database username */
define( 'DB_USER', 'customer_jdm' );

/** MySQL database password */
define( 'DB_PASSWORD', '{TU59giyj8SG' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'rEEtD=Oe1tg^if/DZzWNU$!m |1PldD bPm(8$3ftMkjH)RB9sMkvDC_sd8+9kNL' );
define( 'SECURE_AUTH_KEY',  '7v]d@,C)#$E&]q}Wx&V|!B6ZdGzO4>hATJS#q5%M$wNll>G&+:BFR9W)i|v]AYJs' );
define( 'LOGGED_IN_KEY',    '[FKO/+qEk?UPW<|/B1uS/(?fmT=R}6H+tiEdhDs%%jW/fm^{t{Abiq@Nm8n(gvH!' );
define( 'NONCE_KEY',        '5@2B[3,tW}83C6-6@MI1+hxevWPN$, M?W|S[?P ]*9MA;2d2I*X U7amBMN>6Lg' );
define( 'AUTH_SALT',        'Ml0{r[V&Aq2e[fJ3ZM<*vPcJ,t&4:69!p4sS)0}v,)n(>&w@a2S$M[74nyVU:tEh' );
define( 'SECURE_AUTH_SALT', ' V=4Bl#lZ!M4tucJk_V9{JQ3BieU,5O7i| P7GU/VNqgHuTnwF%>!Zlm[+M=Kv28' );
define( 'LOGGED_IN_SALT',   '*>.<M{%lv0VbHJyRNmZn9B ryjWsGNW!M)WJHJ/~|wZ}s.5{OK(0oS]hS>z%mwR,' );
define( 'NONCE_SALT',       'db.g.L~UG~c+b-K`!k+?$]Ny|byV)d,;{O@{X)]X.IPaqAn/rfHPtZ=.NA{;Y:lc' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'jdm_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
