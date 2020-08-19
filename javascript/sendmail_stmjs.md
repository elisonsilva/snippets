# Enviar emails de Javascript, usando SmtpJS.com

[https://pepipost.com/tutorials/how-to-send-emails-with-javascript/](https://pepipost.com/tutorials/how-to-send-emails-with-javascript/)

``` html
    /**
    * HTML OUT
    */
    <form method="post">
        <input type="button" class="sendmail" value="Send Email"/>
    </form>
```

``` javascript
/**
 * Enviar emails de Javascript, usando SmtpJS.com ( https://smtpjs.com/ )
 * Junto com Mailtrap (https://mailtrap.io/) testes
 */
    $(document).on('click', '.sendmail', sendEmail );

    function sendEmail() {
        try {
            Email.send({
                Host: "smtp.mailtrap.io",
                Username : "USERNAME",
                Password : "PASSWORD",
                To : 'TO@MAIL.COM.BR',
                From : "FROM@MAIL.COM.BR",
                Subject : "Subject",
                Body : "Body message",
            }).then(
                message => alert("Mail sent successfully!!")
            );
        } catch (error) {
            console.log('Erro ao tentar enviar e-mail:', error);
        }
    }
```