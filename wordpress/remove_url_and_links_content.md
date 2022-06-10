# Remove url and links <a> to content;

Ref. [[1](https://stackoverflow.com/questions/21999753/how-to-hide-oembed-links-from-wordpress-excerpt) [2](https://wordpress.org/support/topic/remove-hyperlinks-from-categories-and-tags-in-single-posts/)]

```php

function remove_links($text) 
{
    if ('' == $text ) 
    {
        // preg_replace('#<a.*?>([^<]*)</a>#i', '$1', $thelist);

        $pattern = '~http://[^\s]*~i'; //what we want to remove, the http link
        $text = get_the_content('');
        $text = preg_replace($pattern, '', $text);
    }
    return $text;
}
remove_filter('get_the_excerpt', 'wp_trim_excerpt');
add_filter('get_the_excerpt', 'remove_links');

```