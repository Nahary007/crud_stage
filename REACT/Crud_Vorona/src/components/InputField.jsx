function InputField({ id, label, name, value, onChange, placeholder }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />
        </div>
    );
}

export default InputField;