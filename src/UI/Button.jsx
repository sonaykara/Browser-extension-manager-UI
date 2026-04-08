const Button = ({ config , onClick }) => {

  return <button onClick={onClick} className={config.className}>{config.name}</button>;
};

export default Button;
