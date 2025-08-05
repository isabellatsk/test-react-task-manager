function Input(props) {
  return (
    <input //os input tem suas caracteristicas mas o classname é igual em ambos
      className="border border-slate-400 outline-slate-400 px-4 py-2  text-blue-950 rounded-md"
      {...props} //pegar todas as props do Iput la em addTask

      // type={props.type}
      // placeholder={props.placeholder}
      // value={props.value}
      // onChange={props.onChange}
    />
  );
}
export default Input;
