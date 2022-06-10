# se adequar à Lei Geral de Proteção de Dados Pessoais
ref. [[1](https://ajuda.fastcommerce.com.br/como-adequar-a-loja-a-lei-geral-de-protecao-de-dados-pessoais)]

```html
<!-- Cookie Policy alert -->
<div class="cookiewarning bg-warning" id="cookie-law">
<div class="cookiewarning-position">
<h4>Política de cookies</h4>
<p>Utilizamos cookies próprios e de terceiros para melhorar nossos serviços analisando seus hábitos de navegação.</p>
<p><a href="#" id="cookie-url">Obtenha mais informações em nossa Política de cookies.</a></p>
<div class="cookiewarning-position-btn"><span class="cookiewarning-btn">ACEITAR</span></div>
</div>
</div>
<script>fnCookieWarning();</script>
```

```css
/* Cookie Warning */
 body.cookiewarning {}

body div.cookiewarning {
    display: none
}

body.cookiewarning div.cookiewarning {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 999991;
    background-color: rgba(0, 0, 0, .95);
    color: white
}

.cookiewarning-position {
    max-width: 1306px;
    padding: 15px 18%
}

.cookiewarning-position h4 {
    margin: 1.33em 0;
    padding: 0
}

.cookiewarning-position p {
    font-size: 0.9rem;
    margin: 1em 0;
}

.cookiewarning-position p a {
    text-decoration: underline;
    color: #ffffff
}

.cookiewarning-btn {
    background: #178239;
    color: #ffffff;
    padding: 5px 35px;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    border-radius: 2px;
    cursor: pointer;
}

body .removecookie {
    display: inline-block
}

body.cookiewarning .removecookie {
    display: none
}

.cookiewarning-position-btn {
    display: flex;
    display: -webkit-flex;
    flex-flow: row wrap;
    -webkit-flex-flow: row wrap;
    justify-content: space-evenly;
    -webkit-justify-content: space-evenly;
    align-items: center;
    -webkit-align-items: center;
}

/* Custom Cookie Policy */
.Cookiepolicy00Page .left-bar {
    min-height: 20px !important;
    display: none;
}

.fc-custom-cookie-policy-container {
    max-width: 1224px;
    text-align: center;
    margin: 0 auto;
}

.fc-custom-cookie-policy-content {
    text-align: left;
}

.fc-custom-cookie-policy-content p {
    font-size: 1rem;
    margin: 1em 0;
    padding: 0
}

.fc-custom-cookie-policy-content h5 {
    margin: 1.67em 0 !important;
    padding: 0 !important
}

@media only screen and (max-width:1024px) {

    /* Cookie Warning */
    .cookiewarning-position {
        max-width: 1306px;
        padding: 15px 5% !important
    }
}
```

```javascript
/* Cookie Policy Footer Warning */
function fnCookieWarning() {
    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }
    function readCookie(name) {
        var nameEQ = name + "=",
            ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    function eraseCookie(name) { createCookie(name, "", -1); }
    var cookieBody = document.getElementsByTagName("BODY")[0],
        cookieLaw = document.getElementById("cookie-law"),
        cookieURL = document.getElementById("cookie-url"),
        cookieName = "cookiewarning",
        cookieWarning = document.createElement("div." + cookieName);
    function setCookieWarning(active) { (!!active) ? cookieBody.classList.add(cookieName) : cookieBody.classList.remove(cookieName); }
    cookieURL.href = "/page,arq,cookie-policy-" + ("0" + FC$.Language).slice(-2) + ".htm,cookie";
    cookieLaw.addEventListener("click", function () {
        createCookie(cookieName, 1, 365)
        setCookieWarning(false);
    });
    if (readCookie(cookieName) != 1) setCookieWarning(true);
    function removeMe() {
        eraseCookie(cookieName);
        setCookieWarning(false);
    }
}
```