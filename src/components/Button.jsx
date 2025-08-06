import PropTypes from "prop-types";

// componente principal
function Button(props) {
  return (
    //recebe todas as props passadas
    //aplica estilo fixo
    //mostra dentro ({props.children}) o conteúdo passado entre as tags do componente
    <button {...props} className="bg-slate-400 p-2 rounded-md text-white">
      {props.children}
    </button>
  );
}

// usando proptypes para declarar a validação da prop children
Button.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Button;
