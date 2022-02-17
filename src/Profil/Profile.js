 import React from 'react'
import PropTypes  from "prop-types"
 const Profil = (props) => {
    const styles = {Border : "solid 1px black" , textAlign : 'center' }
    
        return  (
<div styles ={styles}>
    <h1> {props.fullName}</h1>
    <h1>{props.bio}</h1>
    <h1> { props.Profession}</h1>
    {props.children}
    <button onClick={() => props.handleName(props.fullName) }>
        click !!
    </button>
</div>
                )
}
Profil.propTypes = {

    fullName: PropTypes.string,
    handleName: PropTypes.func
     };
  

export default Profil;

 