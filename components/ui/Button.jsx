export default function Button({ children }) {
  return (
    <button className="border border-primary px-10 py-4 text-sm tracking-widest uppercase transition hover:bg-primary hover:bg-black hover:text-white cursor-pointer">
      {children}
    </button>
  );
}
