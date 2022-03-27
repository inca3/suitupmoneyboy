const imageInput = document.querySelector('#image_input')
var uploadedImage = ""

const white = 'bg/white.png'
const yellow = 'bg/yellow.png'
const pink = 'bg/pink.png'
const purple = 'bg/purple.png'
const orange = 'bg/orange.png'
const teal = 'bg/teal.png'
const blue = 'bg/blue.png'
const green = 'bg/green.png'
const lavender = 'bg/lavender.png'

const bgWhite = document.querySelector('#white')
const bgYellow = document.querySelector('#yellow')
const bgPink = document.querySelector('#pink')
const bgPurple = document.querySelector('#purple')
const bgOrange = document.querySelector('#orange')
const bgTeal = document.querySelector('#teal')
const bgBlue = document.querySelector('#blue')
const bgGreen = document.querySelector('#green')
const bgLavender = document.querySelector('#lavender')

const chain = document.querySelector('#chain')

imageInput.addEventListener('change', function() {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
        uploadedImage = reader.result
        const suitUp = 'suit.png'
        const suitChain = 'chain.png'

        if (bgWhite.checked) {
            mergeImages([uploadedImage, white, suitUp])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgYellow.checked) {
            mergeImages([uploadedImage, yellow, suitUp])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgPink.checked) {
            mergeImages([uploadedImage, pink, suitUp])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgPurple.checked) {
            mergeImages([uploadedImage, purple, suitUp])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgOrange.checked) {
            mergeImages([uploadedImage, orange, suitUp])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgTeal.checked) {
            mergeImages([uploadedImage, teal, suitUp])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgBlue.checked) {
            mergeImages([uploadedImage, blue, suitUp])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgGreen.checked) {
            mergeImages([uploadedImage, green, suitUp])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgLavender.checked) {
            mergeImages([uploadedImage, lavender, suitUp])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }

        if (bgWhite.checked && chain.checked) {
            mergeImages([uploadedImage, white, suitChain])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgYellow.checked && chain.checked) {
            mergeImages([uploadedImage, yellow, suitChain])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgPink.checked && chain.checked) {
            mergeImages([uploadedImage, pink, suitChain])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgPurple.checked && chain.checked) {
            mergeImages([uploadedImage, purple, suitChain])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgOrange.checked && chain.checked) {
            mergeImages([uploadedImage, orange, suitChain])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgTeal.checked && chain.checked) {
            mergeImages([uploadedImage, teal, suitChain])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgBlue.checked && chain.checked) {
            mergeImages([uploadedImage, blue, suitChain])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgGreen.checked && chain.checked) {
            mergeImages([uploadedImage, green, suitChain])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        if (bgLavender.checked && chain.checked) {
            mergeImages([uploadedImage, lavender, suitChain])
                .then(b64 => document.querySelector('#generated_image').src = b64);
        }
        else return
        
    })
    reader.readAsDataURL(this.files[0])
})


