
Na página de plugins no Admin, lista no console os plugins e quais versões serão atualizado.
*Obs.: console do navegador

[console.save()](/javascript/console_save.md)
``` javascript
    
    pluginslist = {};
    jQuery('.wp-list-table.plugins tbody tr').each(function( index ) {
        var _this = jQuery(this);
        if( !_this.hasClass('plugin-update-tr') ){
            classes = _this.attr('class');
            isUpdate = _this.hasClass('update');
            slug = _this.attr('data-slug');
            pathPlugin = _this.attr('data-plugin');
            title = _this.find('.plugin-title strong').text();
            versionInfo = _this.find('.desc .plugin-version-author-uri').text();
            version = versionInfo.split('|');

            newVersion = isUpdate ? _this.next('.plugin-update-tr').find('.open-plugin-details-modal').text().split(' ') : [];
        
            pluginslist[ slug ] = {
                "classes"     : classes,
                "slug"        : slug,
                "pathPlugin"  : pathPlugin,
                "plugin"       : title,
                "version"     : jQuery.trim(version[0]) + ( newVersion ? " > " : " ") + newVersion.slice(-1),
                "newVersion"  : jQuery.trim(newVersion.slice(-1)),
                "update"      : isUpdate
            }
        }

    });

    console.table(pluginslist);
```