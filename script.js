function GET(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false)
    request.send()
    console.log(url)
    return request
}

function cepFunc(){
    const cep = document.getElementById(`cep`)  //pega o input
    const cepValue = cep.value                  //pega o value do input

    url = `https://viacep.com.br/ws/${cepValue}/json/`
    try{
        let request = GET(url)

        responseJSON = JSON.parse(request.responseText)

        city = responseJSON.localidade
        district = responseJSON.bairro 
        logradouro = responseJSON.logradouro

        document.getElementById(`city`).value = city     
        document.getElementById(`district`).value = district     
        document.getElementById(`logradouro`).value = logradouro     
    }
    catch{
        console.log("erro")
    }
    
}

let error = []

function isfilled(){
    
    let inputs = document.querySelectorAll('.req');

    inputs.forEach(element =>{
        if(element.value == "")
            error.push(element.previousElementSibling.innerHTML)
    })

    if(error.length == 0)
        return true
    else
        return false

}

const Modal = {

    open(){
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active')

        Modal.setModal()
    },

    close(){
        this.refreshModal()
        error = []

        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    },

    setModal(){
        const modalContent = document.createElement('div')
        modalContent.classList.add('modal')

        if(isfilled()){
            modalContent.innerHTML = 
            `
            <h2>Obrigado por preencher o formulário de cadastro!\n</h2>
            
            <button onclick="window.location.href='./exibicao.html'">OK</button>
            
            `
        }
        else{
            let content = "";

            error.forEach(element => {
                    content += "<p>"+element+"</p>"
            })

            modalContent.innerHTML = 
            `
            <h2>Por favor, preencha os seguintes campos:\n</h2>
            ${content}
            
            <button onclick="Modal.close()">OK</button>
            `
        }
        document.querySelector('.modal-overlay').append(modalContent)
    },

    refreshModal(){
        document.querySelector('.modal-overlay').innerHTML = ""
    }
}

$("#cep").mask("99999-999")
$("#cpf").mask("999.999.999-99")
$("#houseNumber").mask("99999999")
$("#telefone").mask("(99) 9 9999-9999")
