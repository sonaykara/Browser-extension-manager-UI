const Button = ({ config }) => {
  console.log(config);
  return <button className={config.className}>{config.name}</button>;
};

export default Button;
