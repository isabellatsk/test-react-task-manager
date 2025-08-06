import PropTypes from "prop-types";

// componente principal
function Title(props) {
  return (
    //retorna o h1 com uma class específica
    //exibe dentro dele o conteúdo passado como props.children
    // tudo que é colocado entre as tags do componente que usa o Title
    <h1 className="text-3xl text-slate-100 font-bold text-center">
      {props.children}
    </h1>
  );
}

// usando proptypes para declarar a validação da prop children
Title.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Title;
