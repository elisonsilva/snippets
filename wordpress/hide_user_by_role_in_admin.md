# Hide user by role in admin


## Hide tablist
```php
/**
 * Hide users by role
 */
add_filter('pre_get_users', function ($user_search) {
	global $wp_roles;
	$filter = array_map(
        function ($user) {
		    return ! in_array($user->name, array('editor', 'subscriber'));
	    }, 
        $wp_roles->role_objects
    );
	$user_search->set('role__in', array_keys(array_filter($filter)));
});

```

## Hide link top

```php
/**
 * Hidden users by role top bar
 */
add_filter("views_users", "removing_admin_tab_from_users_list");
function removing_admin_tab_from_users_list($views)
{
	unset($views['editor'], $views['subscriber']);

	return $views;
}
```