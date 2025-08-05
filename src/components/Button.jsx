function Button(props, { children }) {
  return (
    <button {...props} className="bg-slate-400 p-2 rounded-md text-white">
      {children}
    </button>
  ); //oque passar dentro do Button vem pra ca
}

export default Button;
