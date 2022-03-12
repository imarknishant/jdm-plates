<?php
/**
 * Twenty Nineteen functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since Twenty Nineteen 1.0
 */

/**
 * Twenty Nineteen only works in WordPress 4.7 or later.
 */
if ( version_compare( $GLOBALS['wp_version'], '4.7', '<' ) ) {
	require get_template_directory() . '/inc/back-compat.php';
	return;
}

if ( ! function_exists( 'twentynineteen_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function twentynineteen_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Twenty Nineteen, use a find and replace
		 * to change 'twentynineteen' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'twentynineteen', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1568, 9999 );

		// This theme uses wp_nav_menu() in two locations.
		register_nav_menus(
			array(
				'menu-1' => __( 'Primary', 'twentynineteen' ),
				'footer' => __( 'Footer Menu', 'twentynineteen' ),
				'social' => __( 'Social Links Menu', 'twentynineteen' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'script',
				'style',
				'navigation-widgets',
			)
		);

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 190,
				'width'       => 190,
				'flex-width'  => false,
				'flex-height' => false,
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		// Add support for Block Styles.
		add_theme_support( 'wp-block-styles' );

		// Add support for full and wide align images.
		add_theme_support( 'align-wide' );

		// Add support for editor styles.
		add_theme_support( 'editor-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style-editor.css' );

		// Add custom editor font sizes.
		add_theme_support(
			'editor-font-sizes',
			array(
				array(
					'name'      => __( 'Small', 'twentynineteen' ),
					'shortName' => __( 'S', 'twentynineteen' ),
					'size'      => 19.5,
					'slug'      => 'small',
				),
				array(
					'name'      => __( 'Normal', 'twentynineteen' ),
					'shortName' => __( 'M', 'twentynineteen' ),
					'size'      => 22,
					'slug'      => 'normal',
				),
				array(
					'name'      => __( 'Large', 'twentynineteen' ),
					'shortName' => __( 'L', 'twentynineteen' ),
					'size'      => 36.5,
					'slug'      => 'large',
				),
				array(
					'name'      => __( 'Huge', 'twentynineteen' ),
					'shortName' => __( 'XL', 'twentynineteen' ),
					'size'      => 49.5,
					'slug'      => 'huge',
				),
			)
		);

		// Editor color palette.
		add_theme_support(
			'editor-color-palette',
			array(
				array(
					'name'  => 'default' === get_theme_mod( 'primary_color' ) ? __( 'Blue', 'twentynineteen' ) : null,
					'slug'  => 'primary',
					'color' => twentynineteen_hsl_hex( 'default' === get_theme_mod( 'primary_color' ) ? 199 : get_theme_mod( 'primary_color_hue', 199 ), 100, 33 ),
				),
				array(
					'name'  => 'default' === get_theme_mod( 'primary_color' ) ? __( 'Dark Blue', 'twentynineteen' ) : null,
					'slug'  => 'secondary',
					'color' => twentynineteen_hsl_hex( 'default' === get_theme_mod( 'primary_color' ) ? 199 : get_theme_mod( 'primary_color_hue', 199 ), 100, 23 ),
				),
				array(
					'name'  => __( 'Dark Gray', 'twentynineteen' ),
					'slug'  => 'dark-gray',
					'color' => '#111',
				),
				array(
					'name'  => __( 'Light Gray', 'twentynineteen' ),
					'slug'  => 'light-gray',
					'color' => '#767676',
				),
				array(
					'name'  => __( 'White', 'twentynineteen' ),
					'slug'  => 'white',
					'color' => '#FFF',
				),
			)
		);

		// Add support for responsive embedded content.
		add_theme_support( 'responsive-embeds' );

		// Add support for custom line height.
		add_theme_support( 'custom-line-height' );
	}
endif;
add_action( 'after_setup_theme', 'twentynineteen_setup' );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function twentynineteen_widgets_init() {

	register_sidebar(
		array(
			'name'          => __( 'Footer', 'twentynineteen' ),
			'id'            => 'sidebar-1',
			'description'   => __( 'Add widgets here to appear in your footer.', 'twentynineteen' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);

}
add_action( 'widgets_init', 'twentynineteen_widgets_init' );

/**
 * Replaces "[...]" (appended to automatically generated excerpts) with ... and
 * a 'Continue reading' link.
 *
 * @since Twenty Nineteen 2.0
 *
 * @param string $link Link to single post/page.
 * @return string 'Continue reading' link prepended with an ellipsis.
 */
function twentynineteen_excerpt_more( $link ) {
	if ( is_admin() ) {
		return $link;
	}

	$link = sprintf(
		'<p class="link-more"><a href="%1$s" class="more-link">%2$s</a></p>',
		esc_url( get_permalink( get_the_ID() ) ),
		/* translators: %s: Post title. */
		sprintf( __( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'twentynineteen' ), get_the_title( get_the_ID() ) )
	);
	return ' &hellip; ' . $link;
}
add_filter( 'excerpt_more', 'twentynineteen_excerpt_more' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width Content width.
 */
function twentynineteen_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'twentynineteen_content_width', 640 );
}
add_action( 'after_setup_theme', 'twentynineteen_content_width', 0 );

/**
 * Enqueue scripts and styles.
 */
function twentynineteen_scripts() {
	wp_enqueue_style( 'twentynineteen-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );

	wp_style_add_data( 'twentynineteen-style', 'rtl', 'replace' );

	if ( has_nav_menu( 'menu-1' ) ) {
		wp_enqueue_script( 'twentynineteen-priority-menu', get_theme_file_uri( '/js/priority-menu.js' ), array(), '20181214', true );
		wp_enqueue_script( 'twentynineteen-touch-navigation', get_theme_file_uri( '/js/touch-keyboard-navigation.js' ), array(), '20181231', true );
	}

	wp_enqueue_style( 'twentynineteen-print-style', get_template_directory_uri() . '/print.css', array(), wp_get_theme()->get( 'Version' ), 'print' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'twentynineteen_scripts' );

/**
 * Fix skip link focus in IE11.
 *
 * This does not enqueue the script because it is tiny and because it is only for IE11,
 * thus it does not warrant having an entire dedicated blocking script being loaded.
 *
 * @link https://git.io/vWdr2
 */
function twentynineteen_skip_link_focus_fix() {
	// The following is minified via `terser --compress --mangle -- js/skip-link-focus-fix.js`.
	?>
	<script>
	/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
	</script>
	<?php
}
add_action( 'wp_print_footer_scripts', 'twentynineteen_skip_link_focus_fix' );

/**
 * Enqueue supplemental block editor styles.
 */
function twentynineteen_editor_customizer_styles() {

	wp_enqueue_style( 'twentynineteen-editor-customizer-styles', get_theme_file_uri( '/style-editor-customizer.css' ), false, '1.1', 'all' );

	if ( 'custom' === get_theme_mod( 'primary_color' ) ) {
		// Include color patterns.
		require_once get_parent_theme_file_path( '/inc/color-patterns.php' );
		wp_add_inline_style( 'twentynineteen-editor-customizer-styles', twentynineteen_custom_colors_css() );
	}
}
add_action( 'enqueue_block_editor_assets', 'twentynineteen_editor_customizer_styles' );

/**
 * Display custom color CSS in customizer and on frontend.
 */
function twentynineteen_colors_css_wrap() {

	// Only include custom colors in customizer or frontend.
	if ( ( ! is_customize_preview() && 'default' === get_theme_mod( 'primary_color', 'default' ) ) || is_admin() ) {
		return;
	}

	require_once get_parent_theme_file_path( '/inc/color-patterns.php' );

	$primary_color = 199;
	if ( 'default' !== get_theme_mod( 'primary_color', 'default' ) ) {
		$primary_color = get_theme_mod( 'primary_color_hue', 199 );
	}
	?>

	<style type="text/css" id="custom-theme-colors" <?php echo is_customize_preview() ? 'data-hue="' . absint( $primary_color ) . '"' : ''; ?>>
		<?php echo twentynineteen_custom_colors_css(); ?>
	</style>
	<?php
}
add_action( 'wp_head', 'twentynineteen_colors_css_wrap' );

/**
 * SVG Icons class.
 */
require get_template_directory() . '/classes/class-twentynineteen-svg-icons.php';

/**
 * Custom Comment Walker template.
 */
require get_template_directory() . '/classes/class-twentynineteen-walker-comment.php';

/**
 * Common theme functions.
 */
require get_template_directory() . '/inc/helper-functions.php';

/**
 * SVG Icons related functions.
 */
require get_template_directory() . '/inc/icon-functions.php';

/**
 * Enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Custom template tags for the theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Block Patterns.
 */
require get_template_directory() . '/inc/block-patterns.php';



add_action( 'wp_ajax_nopriv_change_plate_size', 'change_plate_size' );
add_action( 'wp_ajax_change_plate_size', 'change_plate_size' );

function change_plate_size() {
    global $wpdb;
    $response = array();
    $product_id = $_POST['plateSize'];
    $plate = $_POST['plate'];
    $textStyle = $_POST['textStyle'];
    $plateSide = $_POST['platSide'];
    $frontImg = get_field('front_image',$product_id);
    $rearImg = get_field('back_image',$product_id);
    
    $response['front'] = $frontImg;
    $response['rear'] = $rearImg;   
    
    if($_POST['textStyle'] != '' && $_POST['plateSize'] != ''){
        
    $font_key = strtolower($_POST['textStyle']);
        
    $font_key = str_replace(' ', '_', $font_key);
        
    $key = $font_key.'_'.$plateSide.'_price';
    
    $response['price'] = get_field($key,$product_id);

    }else if($_POST['plateSize'] != ''){
    $key = 'printed_'.$plateSide.'_price';
        
    $response['price'] = get_field($key,$product_id);
        
    }else{
        $response['price'] = 00.00;
    }
    $response['product_id'] = $product_id;
    echo json_encode($response);
    
    exit();
}


add_action( 'wp_ajax_nopriv_get_price', 'get_price' );
add_action( 'wp_ajax_get_price', 'get_price' );

function get_price(){
    global $wpdb;
    $response = array();
    $textStyle = $_POST['textStyle'];
    $product_id = $_POST['plateType'];
    $plateSide = $_POST['view'];
    
    if($_POST['textStyle'] != '' && $_POST['plateType'] != ''){
        
    $font_key = strtolower($_POST['textStyle']);
        
    $key = $font_key.'_'.$plateSide.'_price';
    
    $response['price'] = get_field($key,$product_id);
    
    }else if($_POST['plateType'] != ''){
    $key = 'printed_'.$plateSide.'_price';
        
    $response['price'] = get_field($key,$product_id);
        
    }else{
        $response['price'] = 00.00;
    }
    
    echo json_encode($response);
    
    exit();
    
}


add_action( 'wp_ajax_nopriv_add_to_basket', 'add_to_basket' );
add_action( 'wp_ajax_add_to_basket', 'add_to_basket' );

function add_to_basket(){
    session_start();
    global $woocommerce,$product;
    
    $product_id = (int)$_POST['product_id'];
    $plateSide = $_POST['plate_side'];
    $font_key = strtolower($_POST['textType']);
    $response = array();
    $price = (float)$_POST['price'];
    
    if(update_post_meta($product_id, '_price', $price)){
        
        $response['status'] = 1;
        $_SESSION['plate_material'] = $_POST['plate_material'];
        $_SESSION['plate_text_style'] = $_POST['textType'];
        $_SESSION['plate_required'] = $_POST['plate_side'];
        $_SESSION['plate_number'] = $_POST['plate_number'];
        
        if(isset($_POST['image_1']) && $_POST['image_1'] != ''){
            $front_img_id = save_image( $_POST['image_1'], 'front_image' );
            $_SESSION['plate_front_img'] = $front_img_id;
            update_post_meta($product_id,'front_image_id',$front_img_id);    
        }else{
            unset($_SESSION['plate_front_img']);
        }
        
        if(isset($_POST['image_2']) && $_POST['image_2'] != ''){
            $rear_img_id = save_image( $_POST['image_2'], 'rear_image' );
            $_SESSION['plate_rear_img'] = $rear_img_id;
            update_post_meta($product_id,'rear_image_id',$rear_img_id);    
        }else{
            unset($_SESSION['plate_rear_img']);
        }
        
        
        $woocommerce->cart->add_to_cart( $product_id );
        
    }else{
        $response['status'] = 0;
    }

    echo json_encode($response);
    
    exit();
}

/**
 * Add engraving text to cart item.
 *
 * @param array $cart_item_data
 * @param int   $product_id
 * @param int   $variation_id
 *
 * @return array
 */
function iconic_add_engraving_text_to_cart_item( $cart_item_data, $product_id, $variation_id ) {
    session_start();
    
	$cart_item_data['cart_plate_material'] = $_SESSION['plate_material'];
	$cart_item_data['cart_plate_text_style'] = $_SESSION['plate_text_style'];
	$cart_item_data['cart_plate_required'] =  $_SESSION['plate_required'];
	$cart_item_data['cart_plate_number'] =  $_SESSION['plate_number'];
	$cart_item_data['cart_plate_front_img'] = $_SESSION['plate_front_img'];
	$cart_item_data['cart_plate_rear_img'] = $_SESSION['plate_rear_img'];

	return $cart_item_data;
}

add_filter( 'woocommerce_add_cart_item_data', 'iconic_add_engraving_text_to_cart_item', 10, 3 );


/**
 * Display engraving text in the cart.
 *
 * @param array $item_data
 * @param array $cart_item
 *
 * @return array
 */
function iconic_display_engraving_text_cart( $item_data, $cart_item ) {

    
    $item_data[] = array(
		'key'     => __( 'Material', 'iconic' ),
		'value'   => wc_clean( $cart_item['cart_plate_material'] ),
		'display' => '',
	);
    
    $item_data[] = array(
		'key'     => __( 'Text Style', 'iconic' ),
		'value'   => wc_clean( $cart_item['cart_plate_text_style'] ),
		'display' => '',
	);
    
    $item_data[] = array(
		'key'     => __( 'Plates Required', 'iconic' ),
		'value'   => wc_clean( $cart_item['cart_plate_required'] ),
		'display' => '',
	);
    
    if(wp_get_attachment_url($cart_item['cart_plate_front_img']) != ''){
        $item_data[] = array(
            'key'     => __( 'Front Image', 'iconic' ),
            'value'   => '<img src="'.wp_get_attachment_url($cart_item['cart_plate_front_img']).'">',
            'display' => '',
        );    
    }
    
    if(wp_get_attachment_url($cart_item['cart_plate_rear_img']) != ''){
      $item_data[] = array(
		'key'     => __( 'Back Image', 'iconic' ),
		'value'   => '<img src="'.wp_get_attachment_url($cart_item['cart_plate_rear_img']).'">',
		'display' => '',
      );
    }

    
     $item_data[] = array(
		'key'     => __( 'Registration Number', 'iconic' ),
		'value'   => wc_clean( $cart_item['cart_plate_number'] ),
		'display' => '',
	);

	return $item_data;
}

add_filter( 'woocommerce_get_item_data', 'iconic_display_engraving_text_cart', 10, 2 );



/**
 * Add engraving text to order.
 *
 * @param WC_Order_Item_Product $item
 * @param string                $cart_item_key
 * @param array                 $values
 * @param WC_Order              $order
 */
function iconic_add_engraving_text_to_order_items( $item, $cart_item_key, $values, $order ) {

	$item->add_meta_data( __( 'Material', 'iconic' ), $values['cart_plate_material'] );
	$item->add_meta_data( __( 'Text Style', 'iconic' ), $values['cart_plate_text_style'] );
	$item->add_meta_data( __( 'Plates Required', 'iconic' ), $values['cart_plate_required'] );
	$item->add_meta_data( __( 'Front Image', 'iconic' ), '<img src="'.wp_get_attachment_url($values['cart_plate_front_img']).'">' );
	$item->add_meta_data( __( 'Back Image', 'iconic' ), '<img src="'.wp_get_attachment_url($values['cart_plate_rear_img']).'">' );
	$item->add_meta_data( __( 'Vehical Number', 'iconic' ), $values['cart_plate_number'] );
}

add_action( 'woocommerce_checkout_create_order_line_item', 'iconic_add_engraving_text_to_order_items', 10, 4 );


/**
 * Save the image on the server.
 */
function save_image( $base64_img, $title) {

	// Upload dir.
	$upload_dir  = wp_upload_dir();
	$upload_path = str_replace( '/', DIRECTORY_SEPARATOR, $upload_dir['path'] ) . DIRECTORY_SEPARATOR;

	$img             = str_replace( 'data:image/png;base64,', '', $base64_img );
	$img             = str_replace( ' ', '+', $img );
	$decoded         = base64_decode( $img );
	$filename        = $title . '.png';
	$file_type       = 'image/png';
	$hashed_filename = md5( $filename . microtime() ) . '_' . $filename;

	// Save the image in the uploads directory.
	$upload_file = file_put_contents( $upload_path . $hashed_filename, $decoded );

	$attachment = array(
		'post_mime_type' => $file_type,
		'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $hashed_filename ) ),
		'post_content'   => '',
		'post_status'    => 'inherit',
		'guid'           => $upload_dir['url'] . '/' . basename( $hashed_filename )
	);


	$attach_id = wp_insert_attachment( $attachment, $upload_dir['path'] . '/' . $hashed_filename );
    
    return $attach_id;
}


function ss_cart_updated( $cart_item_key, $cart ) {

    $line_item = $cart->removed_cart_contents[ $cart_item_key ];
    $product_id = $line_item[ 'product_id' ];
    
    if($product_id != ''){
         $front_img_id = get_post_meta($product_id,'front_image_id',true);
         $rear_img_id = get_post_meta($product_id,'rear_image_id',true);

        if($front_img_id != ''){
            wp_delete_attachment( $front_img_id, 'true' );
        }

        if($rear_img_id != ''){
            wp_delete_attachment( $rear_img_id, 'true' );
        }
    }

}
add_action( 'woocommerce_remove_cart_item', 'ss_cart_updated', 10, 2 );


function drick_delete_expired_uploads() {
    
global $wpdb;
$orders = wc_get_orders( array('numberposts' => -1) );
// Loop through each WC_Order object
foreach( $orders as $order ){
    $order_data = $order->get_data(); // The Order data
    $order_date_created = $order_data['date_created']->date('Y-m-d H:i:s');
    $CurrentDate = date('Y-m-d H:i:s');
    $CurrentDateStr = strtotime($CurrentDate);
    $order_date_createdStr = strtotime($order_date_created);

    foreach( $order->get_items() as $item_id => $item){
        $items_meta_data[]  = $item->get_meta_data();
        $product_id[] = $item->get_product_id();
    }
    
    $html[] = $items_meta_data[0][3]->value;
    $html[] = $items_meta_data[0][4]->value;

    $i=0;
    foreach($html as $h){
        
        $term_list = get_the_terms($product_id[$i], 'product_cat');
        
        print_r($term_list);
        
        $doc = new DOMDocument();
        $doc->loadHTML($h);
        $xpath = new DOMXPath($doc);
        $src = $xpath->evaluate("string(//img/@src)");

        $imgLink = explode('/',$src);
        $imageName = end($imgLink);
        $imageName = substr($imageName, 0, strpos($imageName, "."));

        $ImageData = $wpdb->get_results("SELECT * FROM `jdm_posts` WHERE `post_title` LIKE '%$imageName%'");
        
        if($CurrentDateStr > $order_date_createdStr){
            if(!empty($ImageData)){
                wp_delete_attachment( $ImageData[0]->ID, true );
            }
        }
        $i++;
    }
  }

}
add_action('admin_init', 'drick_delete_expired_uploads');