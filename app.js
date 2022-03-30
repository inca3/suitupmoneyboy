const imageInput = document.querySelector('#image_input')
var uploadedImage = ""

const colors = ['white', 'yellow', 'pink', 'purple', 'orange', 'teal', 'blue', 'green', 'lavender']

const chain = document.querySelector('#chain')

imageInput.addEventListener('change', function () {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
        uploadedImage = reader.result
        const suitUp = 'suit.png'
        const suitChain = 'chain.png'

        for ( let i = 0; i < colors.length; i++) {
            let bg = document.querySelector(`#${colors[i]}`)
            if (bg.checked) {
                mergeImages([uploadedImage, `bg/${colors[i]}.png`, suitUp])
                .then(b64 => document.querySelector('#generated_image').src = b64);
            }
            if (bg.checked && chain.checked) {
                mergeImages([uploadedImage, `bg/${colors[i]}.png`, suitChain])
                .then(b64 => document.querySelector('#generated_image').src = b64);                
            }
            else {
                mergeImages([uploadedImage])
                .then(b64 => document.querySelector('#generated_image').src = b64); 
            }
        }
    })

    reader.readAsDataURL(this.files[0])
})