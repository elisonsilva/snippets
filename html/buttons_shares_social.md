# Exemplo de botões para compartilhar nas redes sociais

``` html
<div class="share">
    <ul class="share__list">
        <li class="share__item">
            <a class="share__link share__link--email"
                href="mailto:?subject=[Novo post] Padronizando%20E%20Validando%20Codigos%20Com%20Eslint&amp;body=Se%20voc%c3%aa%20j%c3%a1%20trabalhou%20em%20algum%20projeto%20utilizando%20JavaScript%20com%20mais%20de%20uma%20pessoa%20desenvolvendo%20junto%2c%20com%20certeza%2c%20j%c3%a1%20deve%20ter%20enfrentado%20e%20passado%20por%20alguns%20pequenos%20problemas%20referente%20aos%20c%c3%b3digos....https://SITE.COM.BR/PAGINA/"
                onclick="share(event,this);">
                <i class="share__icone fas fa-envelope-square"></i>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link--facebook"
                href="https://www.facebook.com/sharer.php?u=https://SITE.COM.BR/PAGINA/"
                onclick="share(event,this);">
                <i class="share__icone fab fa-facebook-square"></i>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link--linkedin"
                href="https://www.linkedin.com/shareArticle?url=https://SITE.COM.BR/PAGINA/&amp;title=Padronizando%20E%20Validando%20Codigos%20Com%20Eslint"
                onclick="share(event,this);">
                <i class="share__icone fab fa-linkedin"></i>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link--telegram"
                href="https://telegram.me/share/url?url=https://SITE.COM.BR/PAGINA/"
                onclick="share(event,this);">
                <i class="share__icone fab fa-telegram"></i>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link--twitter"
                href="https://twitter.com/intent/tweet?text=Padronizando%20E%20Validando%20Codigos%20Com%20Eslint&amp;url=https://SITE.COM.BR/PAGINA/&amp;via='mahenrique94'"
                onclick="share(event,this);">
                <i class="share__icone fab fa-twitter-square"></i>
            </a>
        </li>
        <li class="share__item">
            <a class="share__link share__link--whatsapp"
                href="whatsapp://send?text=https://SITE.COM.BR/PAGINA/"
                onclick="share(event,this);">
                <i class="share__icone fab fa-whatsapp-square"></i>
            </a>
        </li>
    </ul>
</div>
```