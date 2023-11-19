document.addEventListener("DOMContentLoaded", function() {
       let radio_inputs = document.getElementsByName("radio_fundo");
   
       radio_inputs.forEach(function(radio_input) {
           radio_input.addEventListener("click", function() {
               console.log("Radio value:", radio_input.value);
               let prompt = radio_input.value;
               let content;
               switch (prompt) {
                case 'van_gogh':
                    console.log('Entrou em van_gogh');
                    content = document.getElementById('tela').style;
                    content.background = 'url("back/starry_night.jpg")';
                    content.backgroundRepeat = 'no-repeat';
                    content.backgroundSize = 'cover';
                    break;
            
                case 'salvador_dali':
                    console.log('Entrou em salvador_dali');
                    content = document.getElementById('tela').style;
                    content.background = 'url("back/a_persistencia_da_memoria.jpg")';
                    content.backgroundRepeat = 'no-repeat';
                    content.backgroundSize = 'cover';
                    break;
            
                case 'preto':
                    console.log('Entrou em preto');
                    content = document.getElementById('tela').style;
                    content.background = ''; // Remover qualquer imagem de fundo
                    content.backgroundColor = 'black';
                    break;
            
                default:
                
               
               
                }
           });
       });
   
       let form_check_input = document.getElementsByClassName("form-check-input");
   
       // Convertendo a coleção HTML em uma array
       Array.from(form_check_input).forEach(function(form_check_input) {
           form_check_input.addEventListener("click", function() {
               console.log("Checkbox value:", form_check_input.value);
               let prompt = form_check_input.value;
               let content;
               
               switch(prompt){
                case 'a_criacao_de_adao':
                    content = document.getElementById('img01').style;
                    if (form_check_input.checked){
                        content.display = 'block';
                    }else{
                        content.display = 'none';
                    }
                break;
                case 'mona_lisa':
                    content = document.getElementById('img02').style;
                    if (form_check_input.checked){
                        content.display = 'block';
                    }else{
                        content.display = 'none';
                    }
                break;
                case 'filho_do_homem':
                    content = document.getElementById('img03').style;
                    if (form_check_input.checked){
                        content.display = 'block';
                    }else{
                        content.display = 'none';
                    }
                break;
                case 'abapuru':
                    content = document.getElementById('img04').style;
                    if (form_check_input.checked){
                        content.display = 'block';
                    }else{
                        content.display = 'none';
                    }
                break;
                case 'a_escola_de_atenas':
                    content = document.getElementById('img05').style;
                    if (form_check_input.checked){
                        content.display = 'block';
                    }else{
                        content.display = 'none';
                    }
                break;
               }
               
           });
       });
   
       console.log("Script carregado corretamente.");

            var formulario = document.getElementById('formulario');
            formulario.addEventListener('submit', function(){
            let radioPrompt = document.getElementsByName("radio_fundo");

            radioPrompt.forEach(function(radioPrompt) {
            console.log("Radio value:", radioPrompt.value
            )}

            )}
        )}


)
