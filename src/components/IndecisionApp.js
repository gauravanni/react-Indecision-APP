import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state={
        options:[],
        selectedOption:undefined
    }

    closeModal=()=>{
        this.setState(()=>({selectedOption:undefined}));
    }
    handleDeleteOption=(optionToRemove)=>{
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=> optionToRemove!==option)
        }))
    }

    handleDeleteOptions=()=>{
        this.setState(()=>({options:[]}));
    };
    
    handlePickup=()=>{
        const randomNum=Math.floor(Math.random()*this.state.options.length);
        const option=this.state.options[randomNum];
        this.setState(()=>{
            return {
                selectedOption:option
            }
        })
    }

    handleAddOption=(option)=>{
        if(!option){
            return 'Item is required'
        } else if(this.state.options.indexOf(option)>-1){
            return 'This item already exist'
        }
        
        this.setState((prevState)=>({options:prevState.options.concat(option)}))
    }

    componentDidMount(){
        try{
            const json=localStorage.getItem('options');
            const options=JSON.parse(json);
            if(options){
                this.setState(()=>({ options }));
            }
        }catch(e){
            
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length!==this.state.options.length){
            const json=JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    render(){
        const title='Indecision App';
        const subtitle='Think what to do today?';
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePickup={this.handlePickup}
                />
                <div className="widget">
                    <Options options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption 
                        handleAddOption={this.handleAddOption}
                    />
                </div>
               
                </div>
               
                <OptionModal 
                selectedOption={this.state.selectedOption}
                closeModal={this.closeModal}
                />  
            </div>
        )
    }
}