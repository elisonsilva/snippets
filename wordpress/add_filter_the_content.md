# Filtragem

``` php
    # 
    add_filter('the_content', function ($content) {
        preg_match('#<figure[^>]*alignfull[^>]*>.*?</figure>#is', $content, $matches);
        $content = preg_replace('#<figure[^>]*alignfull[^>]*>.*?</figure>#is', '<div clas="newclass">'.$matches[0].'</div>', $content);
        // return str_replace(array("<iframe", "</iframe>"), array('<div class="iframe-container embed-responsive  embed-responsive-16by9"><iframe', "</iframe></div>"), $content);
        return $content;
    });

    add_filter('embed_oembed_html', function ($html, $url, $attr, $post_id) {
        if (strpos($html, 'youtube.com') !== false || strpos($html, 'youtu.be') !== false) {
            return '<div class="embed-responsive  embed-responsive-16by9">' . $html . '</div>';
        } else {
            return $html;
        }
    }, 10, 4);
    
    
    add_filter('embed_oembed_html', function ($code) {
        return str_replace('<iframe', '<iframe class="embed-responsive-item"  ', $code);
    });

```