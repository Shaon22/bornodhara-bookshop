
const Button = (props) => {
    const {children}=props
    return <button className="btn sm:btn-sm btn-xs bg-cyan-400 text-white border-none">{children}</button>
};

export default Button;