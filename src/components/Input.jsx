// componente principal
function Input(props) {
  return (
    <input //aplica estilos fixos no <input>
      className="border border-slate-400 outline-slate-400 px-4 py-2  text-blue-950 rounded-md"
      {...props} //repassa todas as props recebidas diretamente para o <input>
    />
  );
}
export default Input;
