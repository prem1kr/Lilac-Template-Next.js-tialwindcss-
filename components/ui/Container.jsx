export default function Container({ children, className = "" }) {
    return (
        <div className={`min-w-full mx-auto px-0 md:px-0  ${className}`}>
            {children}
        </div>
    );
}
