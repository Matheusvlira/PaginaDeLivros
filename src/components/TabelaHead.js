import React from "react";
const TabelaHead = (props) => (
 <thead>
  <tr>
    <th colSpan="4">Tabela de Livros</th>
  </tr>
  <tr>
      <th>ISBN</th>
      <th>Título
        <div className="container-setinhas">
          <div onClick={ () => props.ordenarCrescente() }>maior</div>
          <div onClick={ () => props.ordenarDecrescente() }>menor</div>
        </div>
      </th>
      <th>Autor</th>
  </tr>
 </thead>
);

export default TabelaHead;