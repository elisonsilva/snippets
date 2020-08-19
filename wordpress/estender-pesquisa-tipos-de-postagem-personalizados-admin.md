# Como estender a pesquisa de tipos de postagem personalizados no WordPress admin

``` php
    /**
     * Como estender a pesquisa de tipos de postagem personalizados no WordPress admin
     * ref. https://dominykasgel.com/extend-search-custom-post-types-wordpress-admin/
     */

    add_action( 'pre_get_posts', 'actionAdminFieldSearchDocations' );
    add_action( 'pre_get_posts', 'actionAdminFieldSearchDocationsTitle' );

    function actionAdminFieldSearchDocations( $query ) {
        
        // Extend search for document post type
        $post_type = 'POSTTYPE';

        // Custom fields to search for
        $custom_fields = array(
            "_file_name",
        );

        if( ! is_admin() )
            return;
        
        if ( $query->query['post_type'] != $post_type )
            return;

        $search_term = $query->query_vars['s'];

        // Set to empty, otherwise it won't find anything
        $query->query_vars['s'] = '';
        
        $query->set('_meta_or_title', $search_term);

        if ( $search_term != '' ) {
            $meta_query = array( 'relation' => 'OR' );

            foreach( $custom_fields as $custom_field ) {
                array_push( $meta_query, array(
                    'key' => $custom_field,
                    'value' => $search_term,
                    'compare' => 'LIKE'
                ));
            }
            $query->set( 'meta_query', $meta_query );
        };
    }

    function actionAdminFieldSearchDocationsTitle( $q ) {
        if( $title = $q->get( '_meta_or_title' ) ) {
            add_filter( 'get_meta_sql', function( $sql ) use ( $title ){
                global $wpdb;

                // Only run once:
                static $nr = 0; 
                if( 0 != $nr++ ) return $sql;

                // Modified WHERE
                $sql['where'] = sprintf(
                    " AND ( %s OR %s ) ",
                    $wpdb->prepare( "{$wpdb->posts}.post_title like '%%%s%%'", $title),
                    mb_substr( $sql['where'], 5, mb_strlen( $sql['where'] ) )
                );

                return $sql;
            }, 12, 1);
        }
    }
```