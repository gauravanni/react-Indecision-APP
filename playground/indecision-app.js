console.log('app js is running!');

var app={
    title:'title1',
    subtitle:'subtitle1',
    options:[]
}

const onFormSubmit=(e)=>{
e.preventDefault();
const option=e.target.elements.option.value;
if(option)
{
    app.options.push(option);
    e.target.elements.option.value='';
    render();
}
};

const removeAll=()=>{
    console.log('remove all')
    app.options=[];
    render();
};

var appRoot=document.getElementById('app');

const render=()=>{
    const template= (
        <div>
            <h1>Title :{app.title}</h1>
            {app.subtitle && <p>subtitle: {app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your Options' :'No Options'}</p>
            <p>{app.options.length}</p>
            {app.options.length>0 && <button onClick={removeAll}>Remove All</button>}
            <ol>
               {
                   app.options.map((item)=> <li key={item}>{item}</li>)
               }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>);

        ReactDOM.render(template,appRoot);
}

render();



