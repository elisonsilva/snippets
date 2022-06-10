# Disqus
Ref. [[1](https://help.disqus.com/en/articles/1717112-universal-embed-code)][[2](https://help.disqus.com/en/articles/1717084-javascript-configuration-variables)]

## Embed inline
```html
<div id="disqus_thread"></div>
<script>
    var disqus_config = function () {
        this.page.url = 'a unique URL for each page where Disqus is present';
        this.page.identifier = 'a unique identifier for each page where Disqus is present';
        this.page.title = 'a unique title for each page where Disqus is present';
    };
    
    (function() { 

        var shortname = 'SHORTNAME';
        var d = document, script = d.createElement('script');
        script.setAttribute('data-timestamp', +new Date());
        script.setAttribute('id', 'dsq-thread-scr');
        script.setAttribute('src', 'https://'+shortname+'.disqus.com/embed.js');
        script.setAttribute('async', 'true');
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>
    Please enable JavaScript to view the 
    <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a>
</noscript>
```


## Embed Count comments 
[[1](https://help.disqus.com/en/articles/1717274-adding-comment-count-links-to-your-home-page)][[2](https://github.com/disqus/DISQUS-API-Recipes/blob/master/snippets/js/comment-counts-api/commentcounts.html)]
```html
<a href="URL" data-disqus-identifier="668017">Article</a>
<span class="disqus-comment-count" data-disqus-identifier="668017">First article</span>
<script>
    (function() { 
        document.addEventListener('readystatechange', function() {
            var shortname = 'SHORTNAME';
            const tag = document.createElement('script');
            tag.setAttribute('id', 'dsq-count-scr');
            tag.setAttribute('src', 'https://'+shortname+'.disqus.com/count.js');
            tag.setAttribute('async', 'true');
            document.querySelector('body').appendChild(tag);
        });
    })();
</script>
```