import React from 'react'

export default function Second({t,supp,edit}) {
  return (
    <div>
      <input type="text"  value={t} readOnly class="form-control" style={{width:'50%',marginTop:'3%'}}/>  <input type="button" value="suuprimer" onClick={supp} class="btn btn-primary" style={{marginTop:'2%'}}/> <input type="button"onClick={() => edit(prompt('Nouveau contenu :'))} value="modifier" class="btn btn-danger" style={{marginTop:'2%'}}/>
    </div>
  )
}
