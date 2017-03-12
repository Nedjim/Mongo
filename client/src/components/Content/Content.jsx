import React from 'react';

export default class Content extends React.Component {
    render(){
        return(
            <div id='content'>
                <form>
                    <div>
                        <input type='text' name='name' placeholder='Nom'/>
                        <input type='text' name='prenom' placeholder='Prénom'/>
                        <input type='text' name='age' placeholder='Votre age'/>
                        <input type='submit' value='Valider'/>
                    </div>
                </form>
            </div>
        )
    }
}