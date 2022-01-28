# How to Add Taxonomy Term in Custom Post Permalink in WordPress
(1)[https://stackoverflow.com/questions/9263407/wordpress-custom-permalink-structure-for-pages-posts-and-custom-post-types]
(2)[https://travis.media/modifying-the-custom-taxonomy-permalink-structure-in-a-custom-post-type/]
(3)[https://wordpress.stackexchange.com/questions/188431/rewriting-rewrite-slug-for-custom-post-type-used-by-plugin]
``` php
/*
 * referencia
 * https://wisdmlabs.com/blog/add-taxonomy-term-custom-post-permalinks-wordpress/
 */
add_action('init', 'projects_cpt');
function projects_cpt()
{
    $labels = [
        'name' => 'Projects',
        'singular_name' => 'Project',
        'add_new' => 'Add New',
        'add_new_item' => 'Add New Project',
        'edit_item' => 'Edit Project',
        'new_item' => 'New Project',
        'all_items' => 'All Projects',
        'view_item' => 'View Project',
        'search_items' => 'Search Projects',
        'not_found' => 'No projects found',
        'not_found_in_trash' => 'No projects found in Trash',
        'parent_item_colon' => '',
        'menu_name' => 'Projects',
    ];
    $args = [
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'taxonomies' => ['projectstype'],
        'rewrite' => ['slug' => 'projects/%projectscategory%', 'with_front' => false],
        //Adding custom rewrite tag
        'capability_type' => 'post',
        'has_archive' => 'projectsarchives',
        'hierarchical' => false,
        'menu_position' => null,
        'supports' => ['title', 'editor', 'author', 'thumbnail', 'excerpt'],
    ];
    register_post_type('projects', $args);

    $labels = [
        'name' => 'Projects Categories',
        'singular_name' => 'Projects',
        'search_items' => 'Search Projects Categories',
        'all_items' => 'All Projects Categories',
        'parent_item' => 'Parent Project Category',
        'parent_item_colon' => 'Parent Project Category:',
        'edit_item' => 'Edit Project Category',
        'update_item' => 'Update Project Category',
        'add_new_item' => 'Add New Project Category',
        'new_item_name' => 'New Project Category',
    ];

    $args = [
        'hierarchical' => true,
        'rewrite' => ['slug' => 'projects'],
        'show_in_nav_menus' => true,
        'labels' => $labels,
    ];

    register_taxonomy('projectscategory', ['projects', 'post', 'page'], $args);

    unset($labels);
    unset($args);
}

add_filter('post_type_link', 'projectcategory_permalink_structure', 10, 4);
function projectcategory_permalink_structure($post_link, $post, $leavename, $sample)
{
    if (false !== strpos($post_link, '%projectscategory%')) {
        $projectscategory_type_term = get_the_terms($post->ID, 'projectscategory');
        var_dump($projectscategory_type_term);
        if (!empty($projectscategory_type_term)) {
            $post_link = str_replace('%projectscategory%', array_pop($projectscategory_type_term)->slug, $post_link);
        } else {
            $post_link = str_replace('%projectscategory%', 'uncategorized', $post_link);
        }
    }

    return $post_link;
}

// add_filter(
//     'register_post_type_args',
//     function ($args, $post_type) {
//         if ('post' !== $post_type) {
//             return $args;
//         }

//         $args['rewrite'] = [
//             'slug' => 'projects/%projectscategory%',
//             'with_front' => false,
//         ];

//         return $args;
//     },
//     10,
//     2
// );

add_filter(
    'pre_post_link',
    function ($post_link, $post) {
        if (false !== strpos($post_link, '%projectscategory%')) {
            $projectscategory_type_term = get_the_terms($post->ID, 'projectscategory');
            if (!empty($projectscategory_type_term)) {
                $post_link = str_replace('%projectscategory%', array_pop($projectscategory_type_term)->slug, $post_link);
            } else {
                $post_link = str_replace('%projectscategory%', 'uncategorized', $post_link);
            }
        }

        return $post_link;
    },
    10,
    2
);
```