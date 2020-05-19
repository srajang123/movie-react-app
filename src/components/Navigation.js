import React,{Component} from 'react';

export default class Navigation extends Component
{

    render=()=>{
        return(
            <div className='Links'>
                <ul className='list-group'>
                    <button className={this.props.cur==='all'?'list-group-item active-item':'list-group-item'} onClick={this.props.change} value='all'>All Genres</button>
                    {this.props.send.genres.map(el=>
                        <button className={el===this.props.cur?'list-group-item active-item':'list-group-item'} onClick={this.props.change} value={el}>{el}</button>
                    )}
                </ul>
            </div>
        )
    }
}