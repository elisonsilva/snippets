# Endereços

``` javascript
    $(document).ready(function() {
        console.log("ready checkout6");
        $(window).on("load", function() {
            
            /**
             * VtexJs: Quando uma chamada é feita que atualiza o orderForm, o evento orderFormUpdated.vtex é disparado.
             * ref.: https://github.com/vtex/vtex.js/tree/master/docs/checkout#orderformupdatedvtex-orderform
             */

            // Contador para evitar que calculateShipping() entre em loop no evento orderFormUpdated.vtex
            window.time_count_vtex = 0; 


            $(window).on('orderFormUpdated.vtex', function(){
                if( window.summary ){
                    
                    if( window.summary.address === undefined) return;

                    postalCode = window.summary.address.postalCode; // Pega Cep já digitado
                    srpPickupInfo = $('.srp-pickup-info'); // Pega o campo que receberá a resposta
                    
                    console.log(srpPickupInfo.is(':visible'),postalCode,window.time_count_vtex);
                    
                    // Verifica se existe o cep e contado = 0
                    if( postalCode && window.time_count_vtex === 0 ){
                        
                        // Aumenta contador para +1
                        window.time_count_vtex = window.time_count_vtex + 1;
                        
                        // Função VtexJs calcular frete
                        vtexjs.checkout.calculateShipping({
                            "postalCode": window.summary.address.postalCode,
                            "country": 'BRA'
                        }).done(function( orderForm ) {
        
                            console.log('Frete recalculado', 'Opção retirada buscando endereço');
        
                            // Retorna o valor do contador para 0
                            window.time_count_vtex = 0;
                            
                            // Pega endereço retorno
                            PickupPointData = orderForm.shippingData.pickupPoints[0];
                            AddressPickupPoint = PickupPointData.address;
                            echoAddress = `${AddressPickupPoint.street}, ${AddressPickupPoint.number} <br /> ${AddressPickupPoint.neighborhood} / ${AddressPickupPoint.city} - ${AddressPickupPoint.state}`;
                            
                            // Adiciona retorno ao front
                            srpPickupInfo.find('label').eq(0).before('<div class="srpPickupInfo" style="padding: 15px 0 15px 15px;border-left: 3px solid #ccc;text-align: left;">' + echoAddress + '</div>');
                        });
                    }
                }
            });

            /***************************** */
        });
    });

```