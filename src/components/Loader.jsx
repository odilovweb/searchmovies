function Loader() {
  return (
    <div className="h-screen w-[100%] fixed top-0 right-0 flex items-center justify-center bg-slate-900 opacity-40 z-50">
      <span className="loading loading-spinner text-success"></span>
    </div>
  );
}

export default Loader;
