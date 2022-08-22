# Hide role types in admin panel from user listing

Ref.: ([1](https://wordpress.stackexchange.com/questions/10742/remove-ability-for-other-users-to-view-administrator-in-user-list)) ([2](https://stackoverflow.com/questions/70472874/wordpress-how-to-hide-user-role-tab-from-users-list))

```php

// pre_user_query
add_action('pre_user_query','yoursite_pre_user_query');
function yoursite_pre_user_query($user_search) {
    $user = wp_get_current_user();

    if ( $user->roles[0] != 'administrator' ) { 
        global $wpdb;

        $user_search->query_where = 
        str_replace('WHERE 1=1', 
            "WHERE 1=1 AND {$wpdb->users}.ID IN (
                 SELECT {$wpdb->usermeta}.user_id FROM $wpdb->usermeta 
                    WHERE {$wpdb->usermeta}.meta_key = '{$wpdb->prefix}user_level' 
                    AND {$wpdb->usermeta}.meta_value = 0)", 
            $user_search->query_where
        );

    }
}
```


```php

add_filter("views_users", "removing_admin_tab_from_users_list");

function removing_admin_tab_from_users_list($views)
{
    unset($views['administrator']);
    return $views;
}

```