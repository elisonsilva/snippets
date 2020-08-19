# Como estender a pesquisa de tipos de postagem personalizados no WordPress admin

``` php
    /**
     * * Como estender a pesquisa de tipos de postagem personalizados no WordPress admin
     * ref.: https://wordpress.stackexchange.com/questions/11758/extending-the-search-context-in-the-admin-list-post-screen
     */
    add_filter( 'posts_join', '_search_join' );
    function _search_join ( $join ) {
        global $pagenow, $wpdb;

        // I want the filter only when performing a search on edit page of Custom Post Type named "POSTTYPE".
        if ( is_admin() && 'edit.php' === $pagenow && 'POSTTYPE' === $_GET['post_type'] && ! empty( $_GET['s'] ) ) {    
            $join .= 'LEFT JOIN ' . $wpdb->postmeta . ' ON ' . $wpdb->posts . '.ID = ' . $wpdb->postmeta . '.post_id ';
        }
        return $join;
    }

    add_filter( 'posts_where', '_search_where' );
    function _search_where( $where ) {
        global $pagenow, $wpdb;

        // I want the filter only when performing a search on edit page of Custom Post Type named "POSTTYPE".
        if ( is_admin() && 'edit.php' === $pagenow && 'POSTTYPE' === $_GET['post_type'] && ! empty( $_GET['s'] ) ) {
            $where = preg_replace(
                "/\(\s*" . $wpdb->posts . ".post_title\s+LIKE\s*(\'[^\']+\')\s*\)/",
                "(" . $wpdb->posts . ".post_title LIKE $1) OR (" . $wpdb->postmeta . ".meta_value LIKE $1)", $where );
        }
        return $where;
    }


    // Add the code above update it and it will work with no duplicates.
    add_filter( 'posts_distinct', '_search_distinct' );
    function _search_distinct( $where ){
        global $pagenow, $wpdb;

        if ( is_admin() && $pagenow=='edit.php' && $_GET['post_type']=='POSTTYPE' && $_GET['s'] != '') {
        return "DISTINCT";

        }
        return $where;
    }

```