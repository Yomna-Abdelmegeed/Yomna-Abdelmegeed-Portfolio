export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  className = "",
  as = "a",
  ...rest
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-sm transition-all duration-300 focus-visible:outline-2";

  const variants = {
    primary:
      "bg-burgundy text-white shadow-lg shadow-burgundy/20 hover:bg-burgundy-light hover:-translate-y-0.5 hover:shadow-xl hover:shadow-burgundy/30",
    outline:
      "border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white hover:-translate-y-0.5",
    ghost:
      "text-navy hover:text-burgundy",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (as === "a" || href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
        {Icon && <Icon size={16} />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
      {Icon && <Icon size={16} />}
    </button>
  );
}
