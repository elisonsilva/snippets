
Na página de plugins no Admin, lista no console os plugins e quais versões serão atualizado.
*Obs.: console do navegador

[console.save()](/javascript/console_save.md)

[export_csv_object.md](/javascript/export_csv_object.md)
``` javascript
        pluginslist = [];
        jQuery('.wp-list-table.plugins tbody tr:not(.plugin-update-tr)').each(function( index ) {
            var _this = jQuery(this),
            classes = _this.attr('class'),
            isUpdate = _this.hasClass('update'),
            slug = _this.attr('data-slug'),
            pathPlugin = _this.attr('data-plugin'),
            title = _this.find('.plugin-title strong').text(),
            versionInfo = _this.find('.desc .plugin-version-author-uri').text(),
            version = versionInfo.split('|'),
            versionNumber = version[0].split(' '),
            hasKeyUpdate = _this.next('.plugin-update-tr'),
            needKeyUpdate = hasKeyUpdate.length ? ( _this.next('.plugin-update-tr').find('a.update-link').length ? 1 : 0) : 0,
            newVersion = isUpdate ? _this.next('.plugin-update-tr').find('.open-plugin-details-modal').text() : '',
            isPay = (isUpdate ? ( !needKeyUpdate ? true : false) : false);
            regex = /[\d\.]+/gm;
            newVersion = regex.exec(newVersion);
            newVersion = newVersion !== null ? newVersion[0] : '';
        
            pluginslist.push({
                "Slug"              : slug,
                "Types"             : classes,
                "Path"              : pathPlugin,
                "Has Update"        : isUpdate, // É uma atualização sim ou não?
                "Paid"             : isPay, // Precisa da chave key para atualizar
                "Name" : title,
                "Current"             : versionNumber[1] ? 'v'+versionNumber[1] : '-',
                "New Version"              : isUpdate ? 'v' + jQuery.trim(newVersion) : '',
                "Status"            : '-',
                "Comments"       : isPay ? 'Para atualizar precisa da chave de ativação' : '',
            });

        });
        console.table(pluginslist);
```