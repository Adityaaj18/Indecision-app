const app = {
    options: []
}



const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
        renderTemplate()
    }
}
const removeAll = () => {
    app.options = []
    renderTemplate()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById('app')

const renderTemplate = () => {
    const template = (
        <div>
        <p>{app.options.length} </p>
        <button disabled={app.options.length == 0} onClick={onMakeDecision}>what should I do</button>
        <button onClick={removeAll} >Remove All</button>
        <ol>
             {
                app.options.map((option) => <li key={option}>{option}</li> )                   
                        
              }
        </ol>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="option"></input>
                <button>Add Option</button>
                
            </form>
        
    
        </div>
    )
    ReactDOM.render(template, appRoot)
}
renderTemplate()

